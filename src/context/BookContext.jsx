import { createContext, useContext, useState } from "react";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
    // This will hold an array of favorite books
    const [favorites, setFavorites] = useState([]);
    const addToFavorites = (book) => {
        setFavorites((prev) => [...prev, book]);
    };
    const removeFromFavorites = (id) => {
        setFavorites((prev) => prev.filter((book) => book.id !== id));
    };
    
    return (
        <BookContext.Provider
        value={{ favorites, addToFavorites, removeFromFavorites }}
        >
        {children}
        </BookContext.Provider>
    );
};

export const useBookContext = () => useContext(BookContext);
