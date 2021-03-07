import { useState } from "react";
import "./Part4.css";

const Part4 = () => {
  const [condition, setCondition] = useState(true);

  const handleConditionChange = () => {
    setCondition(!condition);
  };

  const [data, setData] = useState([
    { id: 1, value: "TechnicalAdda" },
    { id: 2, value: "FullStackTechie" },
  ]);

  const [selRadio, setSelectedRadio] = useState("");
  const handleRadioChange = (data) => {
    setSelectedRadio(data);
  };
  return (
    <>
      <h1 className={condition ? "redClass" : "blueClass"}>
        My background color is changed based on condition
      </h1>
      <button
        onClick={() => {
          handleConditionChange();
        }}
      >
        Change Condition
      </button>

      <h1>{condition && "Iam shown"}</h1>

      <div>
        {data.map((d, index) => {
          return (
            <>
              <input
                type="radio"
                checked={selRadio === d.value}
                onChange={() => {
                  handleRadioChange(d.value);
                }}
              />
              {d.value}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Part4;
