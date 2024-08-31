// import Heading from "./components/Heading";
// import Section from "./components/Section";
// import Counter from "./components/Counter";
// import List from "./components/List";
import { useCallback, useEffect, useState, MouseEvent, KeyboardEvent, useMemo, useRef } from "react";

interface User {
  id: number;
  username: string;
}

type fibFunc = (n: number) => number

const fib: fibFunc = (n) => {
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2)
}

const myNum: number = 37

const App = () => {
  // const [count, setCount] = useState<number>(1);
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    console.log("mounting");
  }, []);

  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>): void => setCount(prev => prev + 1), [])

   const result = useMemo<number>(() => fib(myNum), [myNum])

  return (
    <>
      <h1>{count}</h1>
      <button onClick={addTwo}>Click Me!</button>
      <h1>result: {result}</h1>
    </>
    // <div style={{ backgroundColor: "gray" }}>
    //   <Heading title={"Hello"}></Heading>
    //   <Section title={"This is not default title"}>This is my section.</Section>
    //   <Counter setCount={setCount}>Count is {count}</Counter>
    //   <List
    //     items={["coffee", "tacos", "code"]}
    //     render={(item: string) => <span style={{ color: "gold" }}>{item}</span>}
    //   ></List>
    // </div>
  );
};

export default App;
