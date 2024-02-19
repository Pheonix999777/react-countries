import { createContext } from "react";

export const MainContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

export const MainContextProvider = ({ children, value }) => {
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
