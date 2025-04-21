import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

function BookList() {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("harry potter");

    const API_URL = import.meta.env.VITE_GOOGLE_BOOKS_API;
    const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

    useEffect(() => {
        const fetchBooks = async () => {
        const res = await fetch(`${API_URL}?q=${query}&key=${API_KEY}`);
        const data = await res.json();
        setBooks(data.items || []);
        };

        fetchBooks();
    }, [query]);

    return (
        <div>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>Search Books</h2>
        <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for books..."
            style={{
            padding: "10px",
            width: "100%",
            maxWidth: "400px",
            marginBottom: "30px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            }}
        />

        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {books.map((book) => (
            <BookCard key={book.id} book={book} />
            ))}
        </div>
        </div>
    );
}

export default BookList;
