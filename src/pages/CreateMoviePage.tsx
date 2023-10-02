import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";
import { Typography } from "@mui/material";

import SaveIcon from "@mui/icons-material/Save";
import TitleIcon from "@mui/icons-material/Title";
import DescriptionIcon from "@mui/icons-material/Description";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GradeIcon from "@mui/icons-material/Grade";
import CategoryIcon from "@mui/icons-material/Category";

import styles from "./pages.module.css";

const CreateMoviePage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{ width: "80%", backgroundColor: "rgba(255, 255, 255, 0.6)" }}
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
                  startAdornment: <TitleIcon sx={{ marginRight: "5px" }} />,
                }}
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
                    <DescriptionIcon sx={{ marginRight: "5px" }} />
                  ),
                }}
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
                    <CalendarMonthIcon sx={{ marginRight: "5px" }} />
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                variant="outlined"
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
                  startAdornment: <GradeIcon sx={{ marginRight: "5px" }} />,
                }}
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
                  startAdornment: <CategoryIcon sx={{ marginRight: "5px" }} />,
                }}
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
          <Button variant="contained" startIcon={<SaveIcon />}>
            <Typography>Create Movie</Typography>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CreateMoviePage;
