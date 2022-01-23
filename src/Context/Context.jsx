import { createContext, useState } from "react";

const myContext = createContext();
const Context = (props) => {
  const [item, setItem] = useState([]);
  const [loader, setLoader] = useState(false);
  const fetchData = async (value) => {
    setLoader(true);
    const baseURL = `https://api.kendrasustain.com/api/emissionfactor?year=${value.year}&sector=${value.sector}&pollutant=${value.pollutant}`;
    const data = await fetch(baseURL);
    const jsonData = await data.json();
    setItem(jsonData);
    setLoader(false);
  };

  return (
    <myContext.Provider value={{ fetchData, item, loader }}>
      {props.children}
    </myContext.Provider>
  );
};
export { myContext };
export default Context;
