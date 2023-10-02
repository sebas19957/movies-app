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
import { SearchProvider } from "./contexts/SearchContext";

function App() {
  return (
    <HelmetProvider>
      <SearchProvider>
        <BrowserRouter>
          <AppTheme>
            {/* <ScrollToTop /> */}
            <Router />
          </AppTheme>
        </BrowserRouter>
      </SearchProvider>
    </HelmetProvider>
  );
}

export default App;
