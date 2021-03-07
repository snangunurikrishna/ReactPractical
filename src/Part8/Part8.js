import { useState } from "react";

const Part8 = () => {
  const initialState = 0;
  const [state, setState] = useState(initialState);
  const handleInputChange = (data) => {
    setState(data);
  };
  return (
    <>
      <button
        onClick={() => {
          handleInputChange((x) => x - 1);
        }}
      >
        --
      </button>
      {state}
      <button
        onClick={() => {
          handleInputChange((x) => x + 1);
        }}
      >
        ++
      </button>
    </>
  );
};

export default Part8;

// Using reducer (uncomment this for reducer code)

// import { useState, useReducer } from "react";

// const reducer = (state, action) => {
//   switch (action) {
//     case "incr":
//       return state + 1;
//     case "decr":
//       return state - 1;
//     default:
//       return 0;
//   }
// };

// const Part8 = () => {
//   const initialState = 0;
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const handleInputChange = () => {};
//   return (
//     <>
//       <button
//         onClick={() => {
//           handleInputChange(dispatch("decr"));
//         }}
//       >
//         --
//       </button>
//       {state}
//       <button
//         onClick={() => {
//           handleInputChange(dispatch("incr"));
//         }}
//       >
//         ++
//       </button>
//     </>
//   );
// };

// export default Part8;
