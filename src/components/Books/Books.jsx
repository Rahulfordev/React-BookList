import { useEffect, useState } from "react";
import BookRow from "../Book/BookRow";
import { getDataFormLocalstorage } from "../../Utils/Utils";
const Books = () => {
  // main array of objects state || books state || books array of objects
  const [books, setBooks] = useState(getDataFormLocalstorage());
  // input field states

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [pubYear, setPubYear] = useState("");

  // input clear function
  function clearInput() {
    setTitle("");
    setAuthor("");
    setIsbn("");
    setPubYear("");
  }

  // form submit event
  const handleSubmit = (e) => {
    e.preventDefault();

    const book = {
      title,
      author,
      isbn,
      pubYear,
    };

    setBooks([...books, book]);

    clearInput();
  };

  const handleDelte = (id) => {
    const filterBookList = books.filter((book) => book.isbn !== id);
    setBooks(filterBookList);
  };

  // delete book from LS

  // saving data to local storage

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <div className="wrapper">
      <h1>BookList App</h1>
      <p>Add and view your books using local storage</p>
      <div className="main">
        <div className="form-container">
          <form onSubmit={handleSubmit} className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
            ></input>
            <br></br>
            <label>Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="form-control"
            ></input>
            <br></br>
            <label>ISBN#</label>
            <input
              type="text"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              className="form-control"
              required
            ></input>
            <label>Publish Year</label>
            <input
              type="text"
              value={pubYear}
              onChange={(e) => setPubYear(e.target.value)}
              className="form-control"
              required
            ></input>
            <br></br>
            <button type="submit" className="btn btn-success btn-md">
              ADD
            </button>
          </form>
        </div>

        <div className="view-container">
          {books.length > 0 ? (
            <>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>ISBN#</th>
                      <th>Title</th>
                      <th>Author</th>
                      <th>Published Year</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {books.map((book) => (
                      <BookRow
                        key={book.isbn}
                        deleteList={handleDelte}
                        book={book}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                onClick={() => setBooks([])}
                className="btn btn-danger btn-md"
              >
                Remove All
              </button>
            </>
          ) : (
            "No Book are available"
          )}
        </div>
      </div>
    </div>
  );
};

export default Books;
