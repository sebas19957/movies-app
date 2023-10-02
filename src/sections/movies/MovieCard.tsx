import { Card, Box, Stack, Typography } from "@mui/material";
import { movie } from "../../_mock/movies";

interface MovieCardProps {
  movie: movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Box>
      <Card
        sx={{
          width: "240px",
          height: "120px",
          cursor: "pointer",
          backgroundColor: "black",
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
            src={`/assets/movies/${movie.image}.jpg`}
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
        <Typography sx={{ color: "white" }}>{movie.name}</Typography>
      </Box>
    </Box>
  );
};

export default MovieCard;
