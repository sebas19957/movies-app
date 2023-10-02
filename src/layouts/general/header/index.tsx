import { ChangeEvent } from "react";
// @mui
import { styled } from "@mui/material/styles";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import SearchIcon from "@mui/icons-material/Search";
//
import { useNavigate } from "react-router-dom";
// import AddIcon from "@mui/icons-material/Add";
// utils
import { bgBlur } from "../../../utils/cssStyles";

import styles from "./header.module.css";

// ----------------------------------------------------------------------

const StyledRoot = styled(AppBar)(({ theme }: { theme: any }) => ({
  ...(bgBlur({ color: theme.palette.background.default }) as any),
  boxShadow: "none",
  backgroundColor: "transparent",
  textAlign: "center",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "block",
}));

// ----------------------------------------------------------------------

export default function Header() {
  const navigate = useNavigate();

  const handleChangeInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(event.target.value);
  };

  return (
    <StyledRoot>
      <StyledToolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Box
              component="img"
              src="/assets/icons/logo.png"
              alt="logo"
              width={40}
              height={40}
              className={styles["text-flicker-in-glow"]}
            />
            <Typography
              variant="h4"
              sx={{
                display: { xs: "none", sm: "none", md: "block" },
                textAlign: "center",
                marginTop: "10px",
                marginLeft: "10px",
                fontSize: {
                  xs: "1.5rem",
                  sm: "2rem",
                },
              }}
              onClick={() => navigate("/home")}
              className={styles["text-flicker-in-glow"]}
            >
              Movies App
            </Typography>
          </Box>
          <TextField
            variant="outlined"
            placeholder="Search movie"
            sx={{
              "& .MuiInputBase-root": {
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                color: "white",
              },
            }}
            size="small"
            onChange={(e) => handleChangeInput(e)}
            InputProps={{
              startAdornment: (
                <SearchIcon
                  sx={{
                    color: "white",
                    marginLeft: "10px",
                  }}
                />
              ),
            }}
          />
          <Button
            variant="contained"
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
            }}
            onClick={() => navigate("/create-movie")}
            startIcon={<LocalMoviesIcon />}
          >
            <Typography>Add movie</Typography>
          </Button>
        </Box>
      </StyledToolbar>
    </StyledRoot>
  );
}
