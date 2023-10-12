import { useState, useEffect } from "react";
import { Typography, Box, Grid, TextField } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useSnackbar } from "notistack";

import MovieList from "../sections/movies/MovieList";
import MovieCard from "../sections/movies/MovieCard";
import { getMovies } from "../services/movies";

import { Movie, movies } from "../_mock/movies";

import styles from "./pages.module.css";

const HomePage = () => {
  const { enqueueSnackbar } = useSnackbar();

  const [moviesData, setMoviesData] = useState<any[]>([]);
  const [apiMoviesData, setApiMoviesData] = useState<any[]>([]);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleChangeInput = (event: any) => {
    setSearch(event.target.value);
    const filterMovies = movies.filter((movie: Movie) => {
      return movie.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setMoviesData(filterMovies);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getMovies();
        enqueueSnackbar(response?.message, {
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
          variant: response?.success ? "success" : "error",
        });
      } catch (error: any) {
        console.log(error);

        enqueueSnackbar(
          error?.response?.data?.message ?? "Internal Server Error",
          {
            anchorOrigin: {
              vertical: "top",
              horizontal: "right",
            },
            variant: "error",
          }
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title> Movies-app | Peliculas </title>
      </Helmet>

      {loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
          }}
        >
          <span className={styles.loader}></span>
        </div>
      ) : (
        <>
          <Grid container item xs={12} md={6} sx={{ marginBottom: 5 }}>
            <TextField
              variant="outlined"
              placeholder="Search movie"
              onChange={(e) => handleChangeInput(e)}
              sx={{
                "& .MuiInputBase-root": {
                  color: "black",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                },
              }}
              size="small"
              InputProps={{
                startAdornment: (
                  <img src="/assets/icons/search.png" alt="title" width={24} />
                ),
              }}
            />
          </Grid>

          {moviesData.length > 0 && search.length > 0 && (
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
          )}

          <Grid
            container
            spacing={2}
            sx={{
              marginBottom: moviesData.length > 0 && search.length > 0 ? 20 : 0,
            }}
          >
            {moviesData.length > 0 &&
              search.length > 0 &&
              moviesData.map((movie: Movie, index: number) => (
                <Grid key={index} item xs={12} md={2}>
                  <MovieCard key={movie.image} movie={movie} />
                </Grid>
              ))}
          </Grid>

          <Grid
            container
            sx={{
              marginBottom:
                moviesData.length === 0 && search.length > 0 ? 20 : 0,
            }}
          >
            {moviesData.length === 0 && search.length > 0 && (
              <Typography
                sx={{
                  color: "white",
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                No results found
              </Typography>
            )}
          </Grid>

          <div
            style={{ padding: "15px" }}
            className={styles["flip-in-hor-top"]}
          >
            {/* ---------------recientes-------------- */}
            {/* <Box sx={{ marginBottom: "15px" }}>
          <Typography
            sx={{
              color: "white",
              fontSize: "22px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Recent additions
          </Typography>
          <MovieList genre="accion" />
        </Box> */}
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
      )}
    </>
  );
};

export default HomePage;
