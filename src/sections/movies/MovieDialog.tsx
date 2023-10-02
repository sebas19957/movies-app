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
        width: "100%",
        "& .MuiDialog-paperWidthSm": {
          borderRadius: "15px",
          backgroundColor: "black",
          backgroundImage: `url(/assets/movies/${dataMovie.image}.jpg)`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "340px",
        },
      }}
    >
      <DialogTitle
        sx={{
          justifyContent: "ceter",
          width: "100%",
        }}
      >
        <Grid container justifyContent="center">
          <Typography variant="h5">{dataMovie.name}</Typography>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Typography>{dataMovie.descripcion}</Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", mb: 2 }}>
        <Button variant="contained" color="inherit" onClick={handleClose}>
          Cerrar
        </Button>
        {/* <Button
          variant="contained"
          color="primary"
          disabled={loading}
          onClick={handleRenewToken}
          endIcon={
            loading && (
              <CircularProgress
                sx={{ color: "#767676" }}
                thickness={5}
                size={20}
              />
            )
          }
        >
          {loading ? "Guardando..." : "Extender Sesión"}
        </Button> */}
      </DialogActions>
    </Dialog>
  );
};

export default MovieDialog;
