import { Box, Typography } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import { GithubImage } from "../assets/githubImg";
import store from "../redux/store";
import { GeneralTable, StandartModal } from "../components";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Box padding={2} bgcolor={"#FDFDFD"} height={'100vh'}>
        <Box
          display={"flex"}
          gap={2}
          alignItems={"center"}
          justifyContent={"center"}
          paddingY={2}
        >
          <GithubImage />
          <Typography fontSize={50}>GitHub Repository Viewer</Typography>
        </Box>
        <GeneralTable />
        <StandartModal />
      </Box>
    </Provider>
  );
};
