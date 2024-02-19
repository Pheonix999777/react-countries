import { Outlet } from "react-router-dom";
import { Container } from "../../components/Container/Container";
import { Header } from "../../components/Header/Header";
import { Box } from "@chakra-ui/react";
import sty from "./style.module.scss";
import { MainContext } from "modules/Main/Provider/MainContext";
import { useContext } from "react";

export const MainLayout = () => {
  const { isDarkMode } = useContext(MainContext);
  return (
    <div>
      <Header />
      <Box className={isDarkMode ? sty.darkmode : ""}>
        <Container>
          <Outlet />
        </Container>
      </Box>
    </div>
  );
};
