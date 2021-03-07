import { useRef, useState } from "react";
import ReactChild from "../ReactChild/ReactChild";

const Part2 = () => {
  // const customref = useRef();
  const callbackRef = useRef();
  const initialState = [
    { id: "1", value: "TechnicalAdda" },
    { id: "2", value: "Saikrishna" },
  ];
  const [data, setData] = useState(initialState);

  const [inpData, setInp] = useState("");

  const accessMethod = () => {
    // customref.current.childcomp();
    console.log(callbackRef);
  };

  const handleChange = (data) => {
    setInp(data.target.value);
  };
  return (
    <>
      {/* <input ref={customref} value={"temp"} /> */}
      <button
        onClick={() => {
          accessMethod();
        }}
      >
        Click me{" "}
      </button>

      <br />

      <select>
        <option>Option1</option>
        <option>Option2</option>
        <option>Option3</option>
      </select>

      <select onChange={(event) => handleChange(event)}>
        {data.map((da, index) => {
          return (
            <option key={index} value={da.value}>
              {da.value}
            </option>
          );
        })}
      </select>
      <input value={inpData} />
      <ReactChild
        onRef={(callback) => {
          callbackRef.current = callback;
        }}
      />
    </>
  );
};

export default Part2;
