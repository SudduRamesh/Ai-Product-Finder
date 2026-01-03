import { useState } from "react";

export default function SearchBox({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 w-full max-w-xl mx-auto">
      <input
        type="text"
        placeholder="What are you looking for?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:text-white"
      />
      <button className="px-5 bg-blue-600 text-white rounded-lg">
        Search
      </button>
    </form>
  );
}