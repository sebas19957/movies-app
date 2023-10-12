import { useState } from "react";
import { Card, Box, Typography } from "@mui/material";
import { Movie } from "../../_mock/movies";
import MovieDialog from "./MovieDialog";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={handleOpen}
      >
        <Card
          sx={{
            width: "240px",
            height: "120px",
            cursor: "pointer",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            marginBottom: "5px",
            "&:hover": {
              border: "3px solid white",
            },
          }}
        >
          <Box
            sx={{
              height: "100%",
              position: "relative",
              objectPosition: "center",
            }}
          >
            <img
              alt={movie.image}
              src={
                movie.image
                  ? `/assets/movies/${movie.image}.jpg`
                  : `/assets/images/no_image.jpg`
              }
              style={{ width: "100%", objectFit: "cover" }}
            />
          </Box>
        </Card>
        <Box
          sx={{
            textAlign: "center",
            width: "240px",
          }}
        >
          <Typography sx={{ color: "white" }}>{movie.title}</Typography>
        </Box>
      </div>
      <MovieDialog
        open={open}
        handleClose={handleCloseDialog}
        dataMovie={movie}
      />
    </>
  );
};

export default MovieCard;
