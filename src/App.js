import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import NewTournamentPage from "./pages/NewTournament";
import TournamentsPage from "./pages/Tournaments";
import TournamentsRootPage from "./pages/TournamentsRoot";
import TournamentDetailsPage from "./pages/TournamentDetails";
import RootPage from "./pages/Root";
import DashboardPage from "./pages/Dashboard";
import RegisterPage from "./pages/Register";
import ErrorPage from "./pages/Errorpage";

function App() {
  // TODO: errror element
  const router = createBrowserRouter([
    {
      path: "",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "tournaments",
          element: <TournamentsRootPage />,
          children: [
            {
              path: "",
              element: <TournamentsPage />,
            },
            {
              path: ":id",
              element: <TournamentDetailsPage />,
            },
            {
              path: "new",
              element: <NewTournamentPage />,
            },
          ],
        },
        {
          path: "dashboard",
          element: <DashboardPage />,
        },
      ],
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "register",
      element: <RegisterPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
