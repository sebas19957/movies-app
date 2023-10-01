import { Navigate, useRoutes } from "react-router-dom";
// layouts
import SimpleLayout from "./layouts/simple/SimpleLayout";
// pages
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import Page404 from "./pages/Page404";
import CreateMoviePage from "./pages/CreateMoviePage";
import GeneralLayout from "./layouts/general/GeneralLayout";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "",
      element: <GeneralLayout />, //TODO: Create DashboardLayout
      children: [
        { element: <Navigate to="/home" />, index: true },
        { path: "home", element: <HomePage /> },
        { path: "detail-movie", element: <MovieDetailPage /> },
        { path: "create-movie", element: <CreateMoviePage /> },
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
  return routes;
};

export default Routes;
