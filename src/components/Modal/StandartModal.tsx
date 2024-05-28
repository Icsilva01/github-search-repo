import CloseIcon from "@mui/icons-material/Close";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { Box, IconButton, Modal, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import branchImage from "../../assets/branchImg.svg";
import commitImage from "../../assets/commitImg.svg";
import issueImage from "../../assets/issueImg.svg";
import pullRequestImage from "../../assets/pullrequestImg.svg";
import { closeModal, selectRepo } from "../../redux/actions/actions";
import { RootState } from "../../redux/reducers/reducers";
import { StandartButton } from "../StandartButton/StandartButton";

const style = {
  position: "absolute" as "absolute",
  top: { lg: "50%", md: "50%", xs: "50%" },
  left: { lg: "50%", md: "50%", xs: "55%" },
  transform: "translate(-50%, -50%)",
  width: { lg: 872, md: 673, xs: "80%" },
  height: "auto",
  maxHeight: { lg: 500, md: 500, xs: "100%" },
  bgcolor: "white",
  borderRadius: "30px",
  boxShadow: "0px 0px 20px 0px #858484CC",
  overflow: { lg: "hidden", md: "hidden", xs: "auto" },
  alignItems: "center",
  textAlign: "center",
  outline: "none",
};

export const StandartModal: React.FC = () => {
  const { selectedRepo, isModalOpen } = useSelector(
    (state: RootState) => state.repo
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    //@ts-expect-error
    dispatch(selectRepo(null));
    //@ts-expect-error
    dispatch(closeModal());
  };

  const handleAction = () => {
    window.open(selectedRepo?.url, "_blank");
  };

  if (!selectedRepo) return null;

  return (
    <Modal open={isModalOpen} onClose={handleClose}>
      <Stack sx={style} spacing={1}>
        <Box
          paddingY={2}
          width={0.9}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <Box>
              <img
                src={selectedRepo.owner.avatarUrl}
                alt=""
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
            </Box>
            <Typography
              fontSize={24}
              fontWeight={700}
              lineHeight={"29.05px"}
              color="#535353"
              paddingY={1}
            >
              {selectedRepo.owner.login}
            </Typography>
          </Box>
          <IconButton onClick={handleClose}>
            <CloseIcon sx={{ width: 32, height: 32 }} />
          </IconButton>
        </Box>
        <Box width={0.68}>
          <Typography
            fontSize={24}
            fontWeight={700}
            lineHeight={"29.05px"}
            color="#013F79"
          >
            {selectedRepo.name}
          </Typography>
          <Typography
            fontSize={20}
            lineHeight={"24px"}
            fontWeight={500}
            color="#535353"
          >
            {selectedRepo.description}
          </Typography>
        </Box>
        <Box display={"flex"} gap={2} paddingY={1} flexDirection={{lg:"row", md:"row", xs:"column"}}>
          <Box display={"flex"} gap={1} alignItems={"center"} height={20}>
            <img src={commitImage} alt="" />
            <Typography
              fontSize={20}
              lineHeight={"24px"}
              fontWeight={500}
              color="#535353"
            >
              {selectedRepo.defaultBranchRef.target.history.totalCount} commits
            </Typography>
          </Box>
          <Box display={"flex"} gap={1} alignItems={"center"} height={20}>
            <img src={branchImage} alt="" />
            <Typography
              fontSize={20}
              lineHeight={"24px"}
              fontWeight={500}
              color="#535353"
            >
              {selectedRepo.refs.totalCount} branches
            </Typography>
          </Box>
          <Box display={"flex"} gap={1} alignItems={"center"} height={20}>
            <img src={pullRequestImage} alt="" />
            <Typography
              fontSize={20}
              lineHeight={"24px"}
              fontWeight={500}
              color="#535353"
            >
              {selectedRepo.pullRequests.totalCount} pull request
            </Typography>
          </Box>
          <Box display={"flex"} gap={1} alignItems={"center"} height={20}>
            <img src={issueImage} alt="" />
            <Typography
              fontSize={20}
              lineHeight={"24px"}
              fontWeight={500}
              color="#535353"
            >
              {selectedRepo.issues.totalCount} issues
            </Typography>
          </Box>
        </Box>
        <Box display={"flex"} gap={1}>
          <Typography
            fontSize={20}
            lineHeight={"24px"}
            fontWeight={500}
            color="#013F79"
          >
            Linguagens utilizadas:
          </Typography>
          {selectedRepo.languages.edges.map((edge) => (
            <Box display={"flex"}>
              <RadioButtonUncheckedIcon sx={{ color: "#013F79" }} />
              <Typography key={edge.node.name}>{edge.node.name}</Typography>
            </Box>
          ))}
        </Box>
        <Box
          display={"flex"}
          gap={2}
          width={{ xs: "50%", sm: 380 }}
          paddingY={2}
          sx={{
            flexDirection: { xs: "column-reverse", sm: "row" },
          }}
        >
          <StandartButton
            buttonSize="large"
            onClick={handleClose}
            bgcolor="#f4f4f4"
            textColor="#013F79"
            border="1px solid #013F79"
            sx={{
              order: { xs: 1, sm: 0 },
            }}
          >
            Voltar
          </StandartButton>
          <StandartButton
            onClick={handleAction}
            buttonSize="large"
            bgcolor="#013F79"
            sx={{
              order: { xs: 0, sm: 1 },
            }}
          >
            Visitar Repositório
          </StandartButton>
        </Box>
      </Stack>
    </Modal>
  );
};
