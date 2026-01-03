import { FaStar } from "react-icons/fa";

export default function ProductCard({ item, onSave }) {
  return (
    <div className="p-5 bg-white dark:bg-gray-800 shadow rounded-xl">
      <h2 className="text-xl font-semibold dark:text-white">{item.name}</h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{item.description}</p>

      <span className="block mt-3 text-sm text-blue-600">
        Category: {item.category}
      </span>

      <div className="flex items-center mt-2 text-yellow-400">
        {Array.from({ length: item.rating }).map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      <button
        onClick={() => onSave(item)}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg w-full"
      >
        Save
      </button>
    </div>
  );
}