import React from "react";
import Loader from "./Component/Loader";
import Submit from "./Component/Submit";
import Table from "./Component/Table";
import Context from "./Context/Context";

export default function App() {
  return (
    <>
      <div className="App">
        <Context>
          <Loader />
          <Submit />
          <Table />
        </Context>
      </div>
    </>
  );
}
