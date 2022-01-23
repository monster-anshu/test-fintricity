import React, { useContext, useState } from "react";
import { myContext } from "../Context/Context";
import { Autocomplete, TextField } from "@mui/material";
function Submit() {
  const { fetchData } = useContext(myContext);
  const [year, setYear] = useState("2019");
  const [sector, setSector] = useState("Energy");
  const [pollutant, setPollutant] = useState("Methane");
  const submit = (e) => {
    e.preventDefault();
    fetchData({ year, sector, pollutant });
  };

  const years = ["2019", "2018", "2017", "2016", "2015"];
  const sectors = ["Energy", "Memo", "Waste"];
  const pollutants = ["Methane", "Nitrous Oxide"];
  return (
    <div>
      <form onSubmit={submit}>
        <div className="formChild">
          <Autocomplete
            disablePortal
            value={year}
            onChange={(event, newValue) => {
              setYear(newValue);
            }}
            options={years}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Year" />}
          />
        </div>
        <div className="formChild">
          <Autocomplete
            value={sector}
            disablePortal
            options={sectors}
            sx={{ width: 300 }}
            onChange={(event, newValue) => {
              setSector(newValue);
            }}
            renderInput={(params) => <TextField {...params} label="Sector" />}
          />
        </div>
        <div className="formChild">
          <Autocomplete
            value={pollutant}
            disablePortal
            options={pollutants}
            sx={{ width: 300 }}
            onChange={(event, newValue) => {
              setPollutant(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Pollutant" />
            )}
          />
        </div>
        <div className="formChild">
          <input type="submit" className="btn" />
        </div>
      </form>
    </div>
  );
}

export default Submit;
