import { useState } from "react";

const Part12 = () => {
  const initialCountries = ["Select", "India", "USA"];
  const [countries, setCountries] = useState(initialCountries);
  const [states, setStates] = useState([]);

  const handleCountries = (country) => {
    console.log(country);

    let states = [];

    if (country === "India") {
      states = ["Telangana", "Uttar Pradesh"];
    } else if (country === "USA") {
      states = ["Texas", "Newyork"];
    } else {
      states = [];
    }

    setStates(states);
  };
  return (
    <>
      <select
        onChange={(e) => {
          handleCountries(e.target.value);
        }}
      >
        {countries.map((country, index) => {
          return (
            <option key={index} value={country}>
              {country}
            </option>
          );
        })}
      </select>

      <select>
        {states.map((state, index) => {
          return <option>{state}</option>;
        })}
      </select>
    </>
  );
};

export default Part12;
