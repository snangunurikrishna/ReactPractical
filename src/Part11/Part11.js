import { useState } from "react";

const Part11 = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(2000);

  const handleDataChange = (data) => {
    console.log(data);
    setCount(2000 - data.length);
  };
  return (
    <>
      <textarea
        onChange={(e) => {
          handleDataChange(e.target.value);
        }}
      ></textarea>
      <p>{count}Characters Left</p>
    </>
  );
};

export default Part11;
