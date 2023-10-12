import { useEffect, useRef } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";

import { Movie } from "../../_mock/movies";

interface MovieDialogProps {
  open: boolean;
  handleClose: () => void;
  dataMovie: Movie;
}

const MovieDialog = ({ open, handleClose, dataMovie }: MovieDialogProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dialogRef.current && open) {
      document.body.style.overflow = "hidden";
      dialogRef.current.scrollIntoView();
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <Dialog
      open={open}
      scroll="body"
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      sx={{
        "& .MuiDialog-paperWidthSm": {
          borderRadius: "15px",
          backgroundImage: `url(/assets/movies/${dataMovie.image}.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        },
      }}
    >
      {/* <div
        style={{
          backgroundColor: "#000000",
          opacity: 0.8,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      /> */}
      <DialogTitle
        sx={{
          justifyContent: "ceter",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.9)",
          opacity: 0.8,
        }}
      >
        <Grid container justifyContent="center">
          <Typography variant="h5" sx={{ color: "red" }}>
            {dataMovie.title}
          </Typography>
        </Grid>
      </DialogTitle>
      <DialogContent
        sx={{
          height: "200px",
          backgroundColor: "rgba(0,0,0,0.9)",
          opacity: 0.8,
        }}
      >
        <Typography sx={{ color: "white", zIndex: 1 }}>
          {dataMovie.overview}
        </Typography>
      </DialogContent>
      <DialogActions
        sx={{
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.9)",
          opacity: 0.8,
        }}
      >
        <Button
          variant="contained"
          color="inherit"
          onClick={handleClose}
          startIcon={
            <img src="/assets/icons/close-bg.png" alt="title" width={24} />
          }
        >
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MovieDialog;
