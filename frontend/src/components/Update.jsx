import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    description: "",
    price: null,
    cover: "",
  });
  const { id } = useParams()

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/books/${id}`, book); 
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "gray",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "25px",
      }}
    >
      <h1>Update Book</h1>

      <form style={{ border: "2px solid black", padding: "25px" }}>
        <div style={{ margin: "5px 0" }}>
          <label htmlFor="">Title</label>
          <input type="text" name="title" id="" onChange={handleChange} />
        </div>

        <div style={{ margin: "5px 0" }}>
          <label htmlFor="">Description</label>
          <input type="text" name="description" onChange={handleChange} />
        </div>

        <div style={{ margin: "5px 0" }}>
          <label htmlFor="">Cover</label>
          <input type="text" name="cover" onChange={handleChange} />
        </div>

        <div style={{ margin: "5px 0" }}>
          <label htmlFor="">Price</label>
          <input type="number" name="price" onChange={handleChange} />
        </div>

        <button
          onClick={handleClick}
          style={{ marginTop: "10px", padding: "7px" }}
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default Update;
