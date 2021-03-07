import React from "react";
const ReactChild = (props) => {
  return (
    <>
      <input value={props.data} ref={props.inputRef} />
    </>
  );
};

export default ReactChild;
