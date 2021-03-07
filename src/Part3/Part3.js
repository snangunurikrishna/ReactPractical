import { useState } from "react";
const Part3 = () => {
  const [inpData, setInpData] = useState("");
  const handleChange = (e) => {
    setInpData(e.target.value);
  };

  const initialState = [
    { id: "1", value: "Option1" },
    { id: "2", value: "Option2" },
  ];
  const [arrayData, setArrayData] = useState(initialState);

  const [condition, setCondition] = useState(false);

  const handleCondition = () => {
    setCondition(!condition);
  };
  return (
    <>
      <input onChange={(e) => handleChange(e)}></input>
      <input value={inpData}></input>

      <h1>
        {arrayData.map((data, index) => {
          return <h2 key={data.id}>{data.value}</h2>;
        })}
      </h1>

      <h1>{condition ? "True" : "false"}</h1>

      <button onClick={() => handleCondition()}>Change Condition</button>

      <h1>{condition && "True1"}</h1>
    </>
  );
};

export default Part3;
