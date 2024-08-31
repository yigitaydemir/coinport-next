import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";
import { useState } from "react";
import List from "./components/List";

const App = () => {
  const [count, setCount] = useState<number>(1);

  return (
    <div style={{ backgroundColor: "gray" }}>
      <Heading title={"Hello"}></Heading>
      <Section title={"This is not default title"}>This is my section.</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List
        items={["coffee", "tacos", "code"]}
        render={(item: string) => <span style={{ color: "gold" }}>{item}</span>}
      ></List>
    </div>
  );
};

export default App;
