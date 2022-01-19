import React, { useContext } from "react";
import Row from "./Row";
import { myContext } from "../Context/Context";
function Table(props) {
  const { item } = useContext(myContext);
  return item.length > 0 ? (
    <div>
      <table>
        <thead>
          <tr>
            <th>Pollutant</th>
            <th>Sector</th>
            <th>Source</th>
            <th>Fuel Name</th>
            <th>Year</th>
            <th>Emissin Factor</th>
            <th> Unit</th>
            <th>Activity Units</th>
          </tr>
        </thead>
        <tbody>
          {item.map((element) => {
            if (item.indexOf(element) < 5)
              return <Row key={item.indexOf(element)} item={element} />;
            return (
              <Row
                key={item.indexOf(element)}
                item={element}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <></>
  );
}

export default Table;
