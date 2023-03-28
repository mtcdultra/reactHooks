import React, { useReducer, useState } from "react";

const initialState = { count: 0 };

const actions = {
  decrement: "decrement",
  increment: "increment",
  double: "multiply",
  half: "half",
  reset: "reset",
  custom: "custom",
};

function reducer(state, action) {
  switch (action.type) {
    case actions.increment:
      return { count: state.count + 1 };
    case actions.decrement:
      return { count: state.count - 1 };
    case actions.double:
      return { count: state.count * 2 };
    case actions.half:
      return { count: state.count / 2 };
    case actions.reset:
      return { count: initialState.count };
    case actions.custom:
      return { count: action.payload };
    default:
      throw new Error();
  }
}

export function CounterUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [customCount, setCustomCount] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: actions.custom, payload: customCount });
  }

  return (
    <div>
      <h3>Counter using useReducer</h3>
      <span>Count: {state.count}</span>&nbsp;
      <br />
      <button onClick={() => dispatch({ type: actions.decrement })}>-</button>
      &nbsp;
      <button onClick={() => dispatch({ type: actions.increment })}>+</button>
      &nbsp;
      <button onClick={() => dispatch({ type: actions.double })}>*2</button>
      &nbsp;
      <button onClick={() => dispatch({ type: actions.half })}>/2</button>
      &nbsp;
      <button onClick={() => dispatch({ type: actions.reset })}>
        Reset
      </button>{" "}
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="custom_value">Custom Value</label>
        <input
          id="custom_value"
          type="number"
          value={customCount}
          onChange={(e) => setCustomCount(e.target.value)}
        />
        <button type="submit">Insert</button>
      </form>
    </div>
  );
}
