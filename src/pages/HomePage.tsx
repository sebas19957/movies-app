import { Typography, Box, Grid } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";
import MovieList from "../sections/movies/MovieList";
import Slider from "react-slick";

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
  };

  return (
    <>
      <Helmet>
        <title> Movies-app | Peliculas </title>
      </Helmet>
      <Box sx={{ padding: "15px", marginTop: "35%" }}>
        {/* ---------------acción-------------- */}
        <Box sx={{ marginBottom: "15px" }}>
          <Typography
            sx={{
              color: "white",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            Acción
          </Typography>
          <MovieList genre="accion" />
        </Box>

        {/* ---------------ciencia_ficcion-------------- */}
        <Box sx={{ marginBottom: "15px" }}>
          <Typography
            sx={{
              color: "white",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            Ciencia Ficción
          </Typography>
          <MovieList genre="ciencia_ficcion" />
        </Box>

        {/* ---------------comedia-------------- */}
        <Box sx={{ marginBottom: "15px" }}>
          <Typography
            sx={{
              color: "white",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            Comedia
          </Typography>
          <MovieList genre="comedia" />
        </Box>

        {/* ---------------fantasia-------------- */}
        <Box sx={{ marginBottom: "15px" }}>
          <Typography
            sx={{
              color: "white",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            Fantasía
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
            }}
          >
            Romance
          </Typography>
          <MovieList genre="romance" />
        </Box>

        {/* ---------------terror-------------- */}
        <Box sx={{ marginBottom: "15px" }}>
          <Typography
            sx={{
              color: "white",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            Terror
          </Typography>
          <MovieList genre="terror" />
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
