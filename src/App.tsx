import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
// routes
import Router from "./routes";
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
