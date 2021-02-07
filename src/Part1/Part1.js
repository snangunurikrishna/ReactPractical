import ReactChild from "../ReactChild/ReactChild";

const Part1 = () => {
  const data = `<div>Iam Div</div><h1>Im h1</h1>`;

  const parentMethod = (data) => {
    console.log(data);
  };

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
      <ReactChild
        childData={"Iam comingfrom parent"}
        parentMethod={parentMethod}
      ></ReactChild>
    </>
  );
};

export default Part1;
