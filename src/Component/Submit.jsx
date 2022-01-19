import React, { useContext, useState } from "react";
import { myContext } from "../Context/Context";
function Submit() {
  const { fetchData } = useContext(myContext);
  const submit = (e) => {
    e.preventDefault();

    if (
      value.pollutants === "none" ||
      value.sector === "none" ||
      value.year === "none"
    )
      alert("Input not valid ");
    else fetchData(value);
  };
  const [value, setValue] = useState({
    year: "2019",
    sector: "Energy",
    pollutants: "Methane",
  });
  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div className="formChild">
          <fieldset>
            <legend>Year</legend>
            <label htmlFor="year">
              <select onChange={onChange} id="year" name="year">
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
              </select>
            </label>
          </fieldset>
        </div>
        <div className="formChild">
          <fieldset>
            <legend>Sector</legend>
            <label htmlFor="sector">
              <select onChange={onChange} id="sector" name="sector">
                <option value="Energy">Energy</option>
                <option value="Memo">Memo</option>
                <option value="Waste">Waste</option>
              </select>
            </label>
          </fieldset>
        </div>
        <div className="formChild">
          <fieldset>
            <legend>Pollutants</legend>
            <label htmlFor="pollutants">
              <select onChange={onChange} name="pollutants" id="pollutants">
                <option value="Methane">Methane</option>
                <option value="Nitrous Oxide">Nitrous Oxide</option>
              </select>
            </label>
          </fieldset>
        </div>
        <div className="formChild">
          <input type="submit" className="btn" />
        </div>
      </form>
    </div>
  );
}

export default Submit;
