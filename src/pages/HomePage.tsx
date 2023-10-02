import { Typography, Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import MovieList from "../sections/movies/MovieList";

import styles from "./pages.module.css";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title> Movies-app | Peliculas </title>
      </Helmet>

      <Typography
        sx={{
          color: "white",
          fontSize: "22px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Search result
      </Typography>

      {/* //TODO: Implementar loading */}
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span className={styles.loader}></span>
        <span className={styles.loaderText}>Loading</span>
      </div> */}
      <div style={{ padding: "15px" }} className={styles["flip-in-hor-top"]}>
        {/* ---------------action-------------- */}
        <Box sx={{ marginBottom: "15px" }}>
          <Typography
            sx={{
              color: "white",
              fontSize: "22px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Action
          </Typography>
          <MovieList genre="accion" />
        </Box>

        {/* ---------------acience fiction -------------- */}
        <Box sx={{ marginBottom: "15px" }}>
          <Typography
            sx={{
              color: "white",
              fontSize: "22px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Science Fiction
          </Typography>
          <MovieList genre="ciencia_ficcion" />
        </Box>

        {/* ---------------comedy-------------- */}
        <Box sx={{ marginBottom: "15px" }}>
          <Typography
            sx={{
              color: "white",
              fontSize: "22px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Comedy
          </Typography>
          <MovieList genre="comedia" />
        </Box>

        {/* ---------------fantasy-------------- */}
        <Box sx={{ marginBottom: "15px" }}>
          <Typography
            sx={{
              color: "white",
              fontSize: "22px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Fantasy
          </Typography>
          <MovieList genre="fantasia" />
        </Box>

        {/* ---------------romance-------------- */}
        <Box sx={{ marginBottom: "15px" }}>
          <Typography
            sx={{
              color: "white",
              fontSize: "22px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Romance
          </Typography>
          <MovieList genre="romance" />
        </Box>

        {/* ---------------horror-------------- */}
        <Box sx={{ marginBottom: "15px" }}>
          <Typography
            sx={{
              color: "white",
              fontSize: "22px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Horror
          </Typography>
          <MovieList genre="terror" />
        </Box>
      </div>
    </>
  );
};

export default HomePage;
