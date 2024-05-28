import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import StarRateIcon from "@mui/icons-material/StarRate";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {
  Box,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openModal,
  searchRepos,
  selectRepo,
} from "../../redux/actions/actions";
import { RootState } from "../../redux/reducers/reducers";
import { Repo } from "../../redux/types/types";
import { NoData, SearchBar, StandartButton } from "..";

export const GeneralTable: React.FC = () => {
  const { repos, loading, error, pageInfo, repositoryCount } = useSelector(
    (state: RootState) => state.repo
  );
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [newPage, setNewPage] = useState(0);

  useEffect(() => {
    setPage(newPage);
  }, [repos, newPage, repositoryCount]);

  const handleSearch = () => {
    setPage(0);
    //@ts-expect-error
    dispatch(searchRepos(query, rowsPerPage));
  };

  const handleLoadMore = () => {
    const newAfter = pageInfo?.endCursor;
    //@ts-expect-error
    dispatch(searchRepos(query, rowsPerPage, newAfter));
  };

  const handleRowClick = (repo: Repo) => {
    //@ts-expect-error
    dispatch(selectRepo(repo));
    //@ts-expect-error
    dispatch(openModal());
  };

  const handleChangePage = (
    // @ts-expect-error
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setNewPage(newPage);
    if (newPage > page && pageInfo?.hasNextPage) {
      handleLoadMore();
    } else {
      //@ts-expect-error
      dispatch(searchRepos(query, rowsPerPage));
    }
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(0);
    //@ts-expect-error
    dispatch(searchRepos(query, newRowsPerPage));
  };

  if (error)
    return (
      <Box display={"flex"} gap={1} alignItems={"center"}>
        <ErrorOutlineIcon sx={{ color: "#9B0A0A" }} />
        <Typography fontWeight={500} color={"#9B0A0A"}>Seu token está incorreto ou inválido</Typography>
        <Box>
          <StandartButton onClick={() => window.location.reload()} bgcolor="#013F79">
            Recarregar
          </StandartButton>
        </Box>
      </Box>
    );

  const handleEmptySearch = () => {
    //@ts-expect-error
    dispatch(searchRepos(""));
    setQuery("");
  };

  const limitedCaracters = (description: string) => {
    if (description?.length > 30) {
      return description.slice(0, 30) + "...";
    }
    return description;
  };
  return (
    <Stack paddingY={2}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={2}
      >
        <SearchBar
          query={query}
          setQuery={setQuery}
          handleSearch={handleSearch}
          loading={loading}
          handleEmptySearch={handleEmptySearch}
        />
      </Box>
      {repos.length > 0 ? (
        <>
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: 1,
              borderRadius: 1,
              border: 0,
              "&::-webkit-scrollbar": {
                width: "4px",
                height: "10px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#ffffff",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#013F79",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "#013F79",
              },
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      width: 80,
                      color: "#013F79",
                      fontWeight: 700,
                    }}
                  >
                    ••
                  </TableCell>
                  <TableCell
                    sx={{
                      minWidth: 140,
                      color: "#013F79",
                      fontWeight: 700,
                    }}
                  >
                    Nome do repositório
                  </TableCell>
                  <TableCell
                    sx={{
                      minWidth: 140,
                      color: "#013F79",
                      fontWeight: 700,
                    }}
                  >
                    Proprietário
                  </TableCell>
                  <TableCell
                    sx={{
                      minWidth: 140,
                      color: "#013F79",
                      fontWeight: 700,
                    }}
                  >
                    Descrição
                  </TableCell>
                  <TableCell
                    sx={{
                      maxWidth: 140,
                      color: "#013F79",
                      fontWeight: 700,
                    }}
                  >
                    Estrelas
                  </TableCell>
                  <TableCell
                    sx={{
                      maxWidth: 140,
                      color: "#013F79",
                      fontWeight: 700,
                    }}
                  >
                    Detalhes
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody
                sx={{
                  color: "#f5f8fa!important",
                }}
              >
                {repos.map((repo, index) => (
                  <TableRow key={repo.id}>
                    <TableCell
                      sx={{
                        width: 80,
                        color: "#535353",

                        fontWeight: 700,
                      }}
                    >
                      {page * rowsPerPage + index + 1}
                    </TableCell>
                    <TableCell
                      sx={{
                        minWidth: 80,
                        color: "#535353",

                        fontWeight: 700,
                      }}
                    >
                      {limitedCaracters(repo.name)}
                    </TableCell>
                    <TableCell
                      sx={{
                        minWidth: 80,
                        color: "#535353",
                        fontWeight: 700,
                      }}
                    >
                      {limitedCaracters(repo.owner.login)}
                    </TableCell>
                    <TableCell
                      sx={{
                        minWidth: 80,
                        color: "#535353",
                        fontWeight: 700,
                      }}
                    >
                      {limitedCaracters(repo.description)}
                    </TableCell>
                    <TableCell
                      sx={{
                        minWidth: 80,
                        color: "#535353",
                        fontWeight: 700,
                      }}
                    >
                      <Box
                        display={"flex"}
                        gap={1}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        {repo.stargazers.totalCount}
                        <StarRateIcon sx={{ color: "#E3B539" }} />
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        minWidth: 80,
                        color: "#535353",
                        fontWeight: 700,
                      }}
                    >
                      <IconButton onClick={() => handleRowClick(repo)}>
                        <RemoveRedEyeIcon
                          sx={{ color: "#013F79", cursor: "pointer" }}
                          titleAccess="Exibir detalhes"
                        />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={repositoryCount}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            labelRowsPerPage={"Repositórios por página"}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelDisplayedRows={({ from, to, count }) =>
              ` ${from}-${to} de ${count}`
            }
          />
        </>
      ) : (
        <NoData />
      )}
    </Stack>
  );
};
