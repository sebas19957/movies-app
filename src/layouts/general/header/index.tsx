// @mui
import { styled } from "@mui/material/styles";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";

//
import { useNavigate } from "react-router-dom";
// import AddIcon from "@mui/icons-material/Add";
// utils
import { bgBlur } from "../../../utils/cssStyles";

import styles from "./header.module.css";

// ----------------------------------------------------------------------

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...(bgBlur({ color: theme.palette.background.default }) as any),
  boxShadow: "none",
  backgroundColor: "transparent",
  textAlign: "center",
  width: "100%",
  [theme.breakpoints.only("xs")]: {
    marginRight: "0px !important",
  },
  [theme.breakpoints.up("xs")]: {
    marginRight: "12px !important",
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "block",
}));

// ----------------------------------------------------------------------

export default function Header() {
  const navigate = useNavigate();

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

          <Button
            variant="contained"
            onClick={() => navigate("/create-movie")}
            startIcon={
              <img src="/assets/icons/movie-white.png" alt="title" width={24} />
            }
          >
            <Typography>Add movie</Typography>
          </Button>
        </Box>
      </StyledToolbar>
    </StyledRoot>
  );
}
