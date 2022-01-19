import React from "react";

function Row(props) {
  const { item } = props;
  return (
    <tr>
      <td>{item.pollutant}</td>
      <td>{item.sector}</td>
      <td>{item.source}</td>
      <td>{item.fuel_name}</td>
      <td>{item.year}</td>
      <td> {item.emission_factor} </td>
      <td> {item.unit} </td>
      <td> {item.activity_unit} </td>
    </tr>
  );
}

export default Row;
