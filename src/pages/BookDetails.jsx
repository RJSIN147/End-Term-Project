import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReviewForm from "../components/ReviewForm";

const API_URL = import.meta.env.VITE_GOOGLE_BOOKS_API;
const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

function BookDetails() {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
        const res = await fetch(`${API_URL}/${id}?key=${API_KEY}`);
        const data = await res.json();
        setBook(data);
        };

        fetchBook();
    }, [id]);

    if (!book) return <p>Loading...</p>;

    const info = book.volumeInfo;

    return (
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>{info.title}</h2>
        {info.imageLinks?.thumbnail && (
            <img
            src={info.imageLinks.thumbnail}
            alt={info.title}
            style={{ marginBottom: "20px" }}
            />
        )}
        <p>
            <strong>Authors:</strong> {info.authors?.join(", ")}
        </p>
        <p style={{ marginTop: "10px", color: "#555" }}>{info.description}</p>

        <ReviewForm bookTitle={info.title} />
        </div>
    );
}

export default BookDetails;
