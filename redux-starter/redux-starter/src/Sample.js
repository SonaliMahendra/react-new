import React, { useReducer } from "react";

//2. write desc for reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "TOGGLESHOWTEXT":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const UseReducer = () => {
  //1. first define reducer()
  //dispatch will take the reducer to the new state
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div align="center">
      <h1>{state.count}</h1>
      <button
        //3. call the dispatch function with type
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "TOGGLESHOWTEXT" });
        }}
      >
        click me
      </button>
      <div>{state.showText && <p>I appear!..</p>}</div>
    </div>
  );
};

export default UseReducer;
