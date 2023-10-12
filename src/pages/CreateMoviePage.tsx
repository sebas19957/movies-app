import { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";

import { postMovie } from "../services/movies";
import CreateMovieValidation from "../utils/validations/CreateMovieValidation";

import styles from "./pages.module.css";

const CreateMoviePage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: "",
      overview: "",
      year: "",
      rating: 0,
      category: "",
    },
    validationSchema: CreateMovieValidation,
    validateOnChange: false,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await postMovie(values);
        enqueueSnackbar(response?.message, {
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
          variant: response?.success ? "success" : "error",
        });
      } catch (error: any) {
        console.log(error);

        enqueueSnackbar(error?.response?.data?.message, {
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
          variant: "error",
        });
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          width: { xs: "100%", md: "80%" },
          backgroundColor: "rgba(255, 255, 255, 0.6)",
        }}
        className={styles["flip-in-diag-1-tr"]}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginTop: "15px" }}
        >
          Create Movie
        </Typography>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                variant="outlined"
                placeholder="Title"
                fullWidth
                sx={{
                  "& .MuiInputBase-root": {
                    color: "black",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                  },
                }}
                size="small"
                InputProps={{
                  startAdornment: (
                    <img
                      src="/assets/icons/writing-sign.png"
                      alt="title"
                      width={24}
                      style={{ marginRight: "5px" }}
                    />
                  ),
                }}
                name="title"
                value={formik.values.title}
                error={!!formik.errors.title}
                helperText={formik.errors.title}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                variant="outlined"
                placeholder="Overview"
                fullWidth
                sx={{
                  "& .MuiInputBase-root": {
                    color: "black",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                  },
                }}
                size="small"
                InputProps={{
                  startAdornment: (
                    <img
                      src="/assets/icons/file-description.png"
                      alt="title"
                      width={24}
                      style={{ marginRight: "5px" }}
                    />
                  ),
                }}
                name="overview"
                value={formik.values.overview}
                error={!!formik.errors.overview}
                helperText={formik.errors.overview}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                variant="outlined"
                placeholder="Year"
                fullWidth
                sx={{
                  "& .MuiInputBase-root": {
                    color: "black",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                  },
                }}
                size="small"
                InputProps={{
                  startAdornment: (
                    <img
                      src="/assets/icons/calendar.png"
                      alt="title"
                      width={24}
                      style={{ marginRight: "5px" }}
                    />
                  ),
                }}
                name="year"
                value={formik.values.year}
                error={!!formik.errors.year}
                helperText={formik.errors.year}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                variant="outlined"
                type="number"
                placeholder="Rating"
                fullWidth
                sx={{
                  "& .MuiInputBase-root": {
                    color: "black",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                  },
                }}
                size="small"
                InputProps={{
                  startAdornment: (
                    <img
                      src="/assets/icons/stars.png"
                      alt="title"
                      width={24}
                      style={{ marginRight: "5px" }}
                    />
                  ),
                }}
                name="rating"
                value={formik.values.rating}
                error={!!formik.errors.rating}
                helperText={formik.errors.rating}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                variant="outlined"
                placeholder="Category"
                fullWidth
                sx={{
                  "& .MuiInputBase-root": {
                    color: "black",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                  },
                }}
                size="small"
                InputProps={{
                  startAdornment: (
                    <img
                      src="/assets/icons/category.png"
                      alt="title"
                      width={24}
                      style={{ marginRight: "5px" }}
                    />
                  ),
                }}
                name="category"
                value={formik.values.category}
                error={!!formik.errors.category}
                helperText={formik.errors.category}
                onChange={formik.handleChange}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "15px",
            marginTop: "15px",
          }}
        >
          <Button
            variant="contained"
            startIcon={
              <img src="/assets/icons/save-white.png" alt="title" width={24} />
            }
            disabled={loading}
            endIcon={
              loading && (
                <CircularProgress
                  sx={{ color: "white" }}
                  thickness={7}
                  size={20}
                />
              )
            }
            onClick={() => formik.handleSubmit()}
          >
            <Typography>{loading ? "Saving..." : "Create Movie"}</Typography>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CreateMoviePage;
