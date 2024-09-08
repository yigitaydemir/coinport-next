import { Routes, Route } from "react-router-dom";
import Books from "./components/Books";
import Add from "./components/Add";
import Update from "./components/Update";

function App() {
  return (
    <>
      <h1 style={{ color: "red" }}>Hello</h1>
      <Routes>
        <Route path="/" element={<Books></Books>}></Route>
        <Route path="/add" element={<Add></Add>}></Route>
        <Route path="/update/:id" element={<Update></Update>}></Route>
      </Routes>
    </>
  );
}

export default App;
