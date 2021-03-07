import { useState, useEffect } from "react";
const Part6 = () => {
  const [data, setData] = useState(true);

  useEffect(() => {
    console.log("rendered");
    handleChange1()
  }, [data]);

  const handleChange1 = () => {

  }
  const handleChange = () => {
    setData(!data);
  };

  const [arr,setArr] = useState(["1","2"])
  const addMore = () => {
      setArr([...arr,"1"])
  }
  return (
    <>
      <button
        onClick={() => {
          handleChange();
        }}
      >
        Click Me
      </button>

      <div>{arr.map((key,index)=>{
          return <h1>{key}</h1>
      })}</div>

      <button onClick={()=>{addMore()}}>Add data</button>
    </>
  );
};

export default Part6;
