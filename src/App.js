import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./redux/counter";

function App() {
  // const [count, setCount] = React.useState(0);
  const count = useSelector(state => state.counter.value); // store.js의 counter
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {count}</h1>
      {/* <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button> */}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}

export default App;
