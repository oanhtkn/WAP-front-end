import { Outlet } from "react-router-dom";
import MainNavigation from "../components/navigation/MainNavigation";

const RootPage = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default RootPage;
