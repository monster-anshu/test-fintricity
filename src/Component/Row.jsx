import React from "react";

function Row(props) {
  const { item } = props;
  const value = Object.values(item);
  return (
    <tr>
      {value.map((element) => {
        return <td key={value.indexOf(element)} >{element}</td>;
      })}
    </tr>
  );
}

export default Row;
