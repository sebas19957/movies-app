import { useTheme, useMediaQuery } from "@mui/material";

import Slider from "react-slick";

import { Movie, movies } from "../../_mock/movies";

import MovieCard from "./MovieCard";

interface MovieListApiProps {
  data: Movie[];
}

const MovieListApi = ({ data }: MovieListApiProps) => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.only("xs"));
  const isSmScreen = useMediaQuery(theme.breakpoints.only("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.only("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.only("lg"));
  const isXlScreen = useMediaQuery(theme.breakpoints.only("xl"));

  const responsiveSlide = () => {
    if (isXsScreen) {
      return {
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    } else if (isSmScreen) {
      return {
        slidesToShow: 2,
        slidesToScroll: 2,
      };
    } else if (isMdScreen) {
      return {
        slidesToShow: 3,
        slidesToScroll: 3,
      };
    } else if (isLgScreen) {
      return {
        slidesToShow: 4,
        slidesToScroll: 4,
      };
    } else if (isXlScreen) {
      return {
        slidesToShow: 6,
        slidesToScroll: 6,
      };
    } else {
      return {
        slidesToShow: 6,
        slidesToScroll: 6,
      };
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: responsiveSlide().slidesToShow,
    slidesToScroll: responsiveSlide().slidesToScroll,
    slideMargin: 5,
  };

  return (
    <Slider {...settings}>
      {data.map((movie: Movie) => (
        <MovieCard key={movie.image} movie={movie} />
      ))}
    </Slider>
  );
};

export default MovieListApi;
