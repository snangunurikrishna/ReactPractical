const ReactChild = (props) => {
  return (
    <>
      <div>{props.childData}</div>
      <button
        onClick={() => {
          props.parentMethod("Iam coming from child and displayed in parent");
        }}
      >
        Child button
      </button>
    </>
  );
};

export default ReactChild;
