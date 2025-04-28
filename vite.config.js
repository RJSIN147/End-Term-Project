import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_GOOGLE_BOOKS_API": JSON.stringify(
      process.env.VITE_GOOGLE_BOOKS_API
    ),
    "process.env.VITE_GOOGLE_BOOKS_API_KEY": JSON.stringify(
      process.env.VITE_GOOGLE_BOOKS_API_KEY
    ),
  },
});
