import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/next";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
      <SpeedInsights />
    </>
  );
};

export default Layout;
