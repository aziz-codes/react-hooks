import { createContext, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  let name = "Aziz";

  return <AppContext.Provider value={{ name }}>{children}</AppContext.Provider>;
};
export const useStateContext = ()=>useContext(AppContext);