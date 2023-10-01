import { useState, useEffect } from "react";
// @mui
import { styled } from "@mui/material/styles";
import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import TheatersIcon from "@mui/icons-material/Theaters";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import dayjs from "dayjs";
// utils
import { bgBlur } from "../../../utils/cssStyles";

import styles from "./general.module.css";

// ----------------------------------------------------------------------

const StyledRoot = styled(AppBar)(({ theme }: { theme: any }) => ({
  // ...(bgBlur({ color: theme.palette.background.default }) as any),
  boxShadow: "none",
  backgroundColor: "transparent",
  textAlign: "center",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "block",
}));

// ----------------------------------------------------------------------

export default function Header() {
  return (
    <StyledRoot>
      <StyledToolbar>
        {/*TODO: poner icono  */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "10px",
          }}
          className={styles["tracking-in-contract-bck-bottom"]}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src="/assets/icons/logo.png"
              alt="logo"
              width={40}
              height={40}
            />
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                fontFamily: "'Carter One', cursive",
                marginTop: "10px",
                marginLeft: "10px",
                fontSize: {
                  xs: "1.5rem",
                  sm: "2rem",
                },
              }}
            >
              Movies App
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
              "&:hover": {
                backgroundColor: "rgba(255, 0, 0, 0.5)",
              },
            }}
            startIcon={<LocalMoviesIcon />}
          >
            Agregar
          </Button>
        </Box>
      </StyledToolbar>
    </StyledRoot>
  );
}
