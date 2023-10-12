import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
// routes
import Router from "./routes";
//
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// styles
import "./App.css";
import AppTheme from "./theme";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppTheme>
          {/* <ScrollToTop /> */}
          <Router />
        </AppTheme>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
