import React, { useContext } from "react";
import { myContext } from "../Context/Context";
function Loader() {
  const { loader } = useContext(myContext);
  return (
    loader && (
      <div className="Spinner">
        <div className="spinner-border" role="status">
          <div className="loader"></div>
        </div>
      </div>
    )
  );
}

export default Loader;
