import SearchIcon from "@mui/icons-material/Search";
import { Box, CircularProgress, InputBase, Paper } from "@mui/material";
import { StandartButton } from "../StandartButton/StandartButton";

type SearchBarProps = {
  handleSearch: () => void;
  query: string;
  setQuery: (query: string) => void;
  loading: boolean;
  handleEmptySearch: () => void;
};

export const SearchBar = ({handleSearch, query, setQuery, loading, handleEmptySearch }: SearchBarProps) => {

  return (
    <Box display={"flex"} gap={1} height={38} alignItems={"center"}>
      <Paper
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 370,
          height: 32,
          border: "1px solid #013F79",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={"Pesquise pelo repositório"}
          inputProps={{ "aria-label": "search google maps" }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchIcon sx={{ color: "#013F79" }} />
      </Paper>
      <Box>
        <StandartButton
          onClick={handleSearch}
          buttonSize="large"
          bgcolor="#013F79"
        >
          Buscar
        </StandartButton>
      </Box>
      {query && (
        <Box>
          <StandartButton
            onClick={handleEmptySearch}
            buttonSize="large"
            bgcolor="#f4f4f4"
            textColor="#013F79"
            border="1px solid #013F79"
          >
            Limpar
          </StandartButton>
        </Box>
      )}
      {loading && (
        <Box>
          <CircularProgress size={30} sx={{ color: "#013F79" }} />
        </Box>
      )}
    </Box>
  );
};
