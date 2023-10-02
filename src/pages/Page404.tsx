import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(/assets/backgrounds/background_404.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        style={{
          content: "",
          background: "rgba(0, 0, 0, 0.7)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Box
            component="img"
            src="/assets/backgrounds/not_found_2.svg"
            alt="not_found"
            sx={{
              width: "70%",
              height: "70%",
            }}
          />

          <Typography
            variant="h2"
            sx={{
              color: "white",
              marginTop: { xs: "-180px", sm: "-50px" },
              fontSize: { xs: "40px", sm: "50px" },
            }}
          >
            Page not found
          </Typography>
          <Button
            variant="contained"
            sx={{ marginTop: "10px" }}
            onClick={() => navigate("/home")}
          >
            Return to home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page404;
