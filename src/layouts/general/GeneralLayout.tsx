import { Outlet } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
//
import Header from "./header";
import { useEffect, useState } from "react";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const Main = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_MOBILE + 52,
  paddingBottom: theme.spacing(10),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
  },
}));

// ----------------------------------------------------------------------

const GeneralLayout = () => {
  const backgroundImages = [
    "/assets/backgrounds/background_image_2.jpeg",
    "/assets/backgrounds/background_image_3.png",
    "/assets/backgrounds/background_image.jpg",
  ];

  const [backgroundImage, setBackgroundImage] = useState<string>(
    backgroundImages[0]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = backgroundImages.indexOf(backgroundImage);
      const nextIndex = (currentIndex + 1) % backgroundImages.length;
      setBackgroundImage(backgroundImages[nextIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImage]);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        transition: "all 0.5s ease-in-out",
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
          height: "100vh",
          pointerEvents: "none",
        }}
      ></div>
      <Header />

      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Main style={{ height: "calc(100vh)" }}>
          <Outlet />
        </Main>
      </div>
    </div>
  );
};

export default GeneralLayout;
