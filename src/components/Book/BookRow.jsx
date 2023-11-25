/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
const BookRow = ({ book, deleteList }) => {
 
  return (
    <tr>
      <td>{book.isbn}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.pubYear}</td>
      <td onClick={() => deleteList(book.isbn)} className="button-btn">
        <MdDelete color="red" />
      </td>
    </tr>
  );
};

export default BookRow;
