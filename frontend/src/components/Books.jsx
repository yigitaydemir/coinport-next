import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
        console.log(res);
      } catch (error) {
        console.log(err);
      }
    };

    fetchAllBooks();
  }, []);

  const handleDelete = async (Id) => {
    try {
      await axios.delete("http://localhost:8800/books/" + Id);
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>List of All Books</h1>

      <div>
        {books.map((book) => (
          <div
            key={book.id}
            style={{
              border: "2px solid black",
              margin: "10px",
              padding: "5px",
            }}
          >
            {book.cover && <h3>{book.cover}</h3>}
            <h3>{book.title}</h3>
            <h3>{book.description}</h3>
            <h3>{book.price}</h3>

            <button onClick={() => handleDelete(book.id)}>Delete</button>
            <button><Link to={`/update/${book.id}`}>Update</Link></button>
          </div>
        ))}
      </div>

      <button style={{ margin: "10px", padding: "5px" }}>
        <Link to="/add">Add New Book</Link>
      </button>
    </div>
  );
};

export default Books;
