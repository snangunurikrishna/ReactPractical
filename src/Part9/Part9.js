import { useRef } from "react";
import ReactChild from "../ReactChild/ReactChild";

const Part9 = () => {
  const customRef = useRef();
  const handleChild = () => {
    customRef.current.value = "New data";
    customRef.current.focus();
    customRef.current.disabled = true;
  };

  const handleAsync = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos", {
      mode: "cors",
    });
    console.log(data);
  };
  return (
    <>
      <ReactChild data={"sample data"} inputRef={customRef} />
      <button
        onClick={() => {
          handleChild();
        }}
      >
        Submit
      </button>
      <button
        onClick={() => {
          handleAsync();
        }}
      >
        Handle Asynchronous data
      </button>
    </>
  );
};

export default Part9;
