import { createContext, useState } from "react";
import products from "../Data/Data.json";

export const StoreData = createContext();

const MainContext = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("skyworld"))
  );
  // console.log(user);

  const [data, setData] = useState(products);
  return (
    <StoreData.Provider value={{ data, user, setUser }}>
      {children}
    </StoreData.Provider>
  );
};

export default MainContext;
