import { ChangeEvent, ReactNode, useReducer, useState } from "react";

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {
  // const [count, setCount] = useState<number>(0);

  const [state, dispatch] = useReducer(reducer, initState);

  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });

  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ 
      type: REDUCER_ACTION_TYPE.NEW_INPUT, 
      payload: e.target.value 
    });
  };

  return (
    <div>
      <h1>This is my counter component</h1>
      <h3>{children(state.count)}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input type="text" onChange={handleTextInput}/>
      <h1>{state.text}</h1>
    </div>
  );
};

export default Counter;

// import { ReactNode } from "react";

// type CounterProps = {
//   setCount: React.Dispatch<React.SetStateAction<number>>;
//   children: ReactNode;
// };

// const Counter = ({ children, setCount }: CounterProps) => {
//   return (
//     <>
//       <h1>{children}</h1>
//       <button onClick={() => setCount((prev) => prev + 1)}>+</button>
//       <button onClick={() => setCount((prev) => prev - 1)}>-</button>
//     </>
//   );
// };

// export default Counter;
