import { useState } from "react";

function ReviewForm({ bookTitle }) {
    const [form, setForm] = useState({ name: "", comment: "", rating: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const errs = {};
        if (!form.name) errs.name = "Name is required";
        if (!form.comment) errs.comment = "Comment is required";
        if (!form.rating || form.rating < 1 || form.rating > 5)
        errs.rating = "Rating must be between 1 and 5";
        return errs;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) {
        setErrors(errs);
        } else {
        console.log({ ...form, bookTitle }); // Simulate submission
        setSubmitted(true);
        setForm({ name: "", comment: "", rating: "" });
        }
    };

    return (
        <div style={{ marginTop: "40px" }}>
        <h3 style={{ fontSize: "1.4rem", marginBottom: "10px" }}>
            Leave a Review
        </h3>
        {submitted && <p style={{ color: "green" }}>Thanks for your feedback!</p>}
        <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
            <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
            }}
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

            <textarea
            placeholder="Your Comment"
            value={form.comment}
            onChange={(e) => setForm({ ...form, comment: e.target.value })}
            style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
            }}
            />
            {errors.comment && <p style={{ color: "red" }}>{errors.comment}</p>}

            <input
            type="number"
            placeholder="Rating (1-5)"
            value={form.rating}
            onChange={(e) => setForm({ ...form, rating: e.target.value })}
            style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
            }}
            />
            {errors.rating && <p style={{ color: "red" }}>{errors.rating}</p>}

            <button
            type="submit"
            style={{
                padding: "10px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "4px",
            }}
            >
            Submit Review
            </button>
        </form>
        </div>
    );
    }

export default ReviewForm;
