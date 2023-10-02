import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
// routes
import Router from "./routes";
//
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// styles
import "./App.css";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        {/* <ThemeProvider> */}
        {/* <ScrollToTop /> */}
        <Router />
        {/* </ThemeProvider> */}
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
