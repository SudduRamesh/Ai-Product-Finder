export default function SavedList({ items, onRemove }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {items.map((item, i) => (
        <div
          key={i}
          className="p-5 bg-white dark:bg-gray-800 shadow rounded-lg"
        >
          <h2 className="text-lg font-semibold dark:text-white">{item.name}</h2>
          <p className="text-gray-500 dark:text-gray-300">{item.description}</p>

          <button
            onClick={() => onRemove(item)}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg w-full"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}