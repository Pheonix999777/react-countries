import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import queryClient from "./services/queryClient";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Routers } from "./router/router";
import { Provider } from "react-redux";
import store from "./store";
import { useState } from "react";
import { MainContextProvider } from "modules/Main/Provider/MainContext";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <MainContextProvider value={{ isDarkMode, toggleTheme }}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
              <Routers />
            </QueryClientProvider>
          </Provider>
        </BrowserRouter>
      </ChakraProvider>
    </MainContextProvider>
  );
}

export default App;
