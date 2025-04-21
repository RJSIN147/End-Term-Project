import { useBookContext } from "../context/BookContext";
import BookCard from "../components/BookCard";

function Favorites() {
    const { favorites } = useBookContext();

    return (
        <div>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>
            Your Favorite Books
        </h2>
        {favorites.length === 0 ? (
            <p>No favorites yet. Go add some!</p>
        ) : (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {favorites.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
            </div>
        )}
        </div>
    );
}

export default Favorites;
