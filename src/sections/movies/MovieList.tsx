import { Grid } from "@mui/material";
import React from "react";
import MovieCard from "./MovieCard";
import { movie, movies } from "../../_mock/movies";
import Slider from "react-slick";

interface MovieListProps {
  genre:
    | "accion"
    | "comedia"
    | "ciencia_ficcion"
    | "terror"
    | "fantasia"
    | "romance";
}

const MovieList = ({ genre }: MovieListProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    slideMargin: 5,
  };

  return (
    <Slider {...settings}>
      {movies
        .filter((mov: movie) => mov.movie_genre === genre)
        .map((movie: movie) => (
          <MovieCard key={movie.image} movie={movie} />
        ))}
    </Slider>
  );
};

export default MovieList;
