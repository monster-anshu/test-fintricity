import React, { useContext } from "react";
import Row from "./Row";
import { myContext } from "../Context/Context";
function Table(props) {
  const { item } = useContext(myContext);
  const head = [
    "Pollutant",
    "Sector",
    "Source",
    "Fuel Name",
    "Year",
    "Emission Factor",
    "Unit",
    "Activity Units",
  ];
  return item.length > 0 ? (
    <div>
      <table>
        <thead>
          <tr>
            {head.map((element) => {
              return <th key={head.indexOf(element)}>{element}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {item.map((element) => {
            return <Row key={item.indexOf(element)} item={element} />;
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <></>
  );
}

export default Table;
