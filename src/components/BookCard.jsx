import { Link } from "react-router-dom";
import { useBookContext } from "../context/BookContext";
import "./BookCard.css";

function BookCard({ book }) {
    const { addToFavorites, favorites } = useBookContext();
    const isFav = favorites.find((b) => b.id === book.id);

    const thumbnail = book.volumeInfo.imageLinks?.thumbnail;
    const title = book.volumeInfo.title;
    const authors = book.volumeInfo.authors?.join(", ");

    return (
        <div className="book-card">
        {thumbnail && <img src={thumbnail} alt={title} />}
        <h3>{title}</h3>
        <p>{authors}</p>
        <div className="book-card-footer">
            <Link to={`/book/${book.id}`}>Details</Link>
            <button onClick={() => addToFavorites(book)} disabled={isFav}>
            {isFav ? "Saved" : "Favorite"}
            </button>
        </div>
        </div>
    );
}

export default BookCard;
