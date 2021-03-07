import { useState, useEffect } from "react";
const Part5 = () => {
  const [data, setData] = useState([
    { id: 1, value: "TechnicalAdda" },
    { id: 2, value: "Fullstack techie" },
  ]);

  const [radioSel, setRadio] = useState("");
  const handleRadio = (value) => {
    setRadio(value);
  };

  const [obj, setObj] = useState({ id: 1, value: "Tech" });

  useEffect(() => {
    handleFirstRender();
  }, []);

  const handleFirstRender = () => {
    console.log("rendered");
  };
  return (
    <>
      <div>
        {data.map((d, index) => {
          return (
            <>
              <input
                type="radio"
                checked={radioSel === d.value}
                onChange={() => handleRadio(d.value)}
              />
              {d.value}
            </>
          );
        })}
      </div>
      <h1>{radioSel}</h1>
      <input value={radioSel} />
      <div>
        {Object.keys(obj).map((key, index) => {
          return (
            <h1 key={key}>
              {key}
              {obj[key]}
            </h1>
          );
        })}
      </div>
    </>
  );
};

export default Part5;
