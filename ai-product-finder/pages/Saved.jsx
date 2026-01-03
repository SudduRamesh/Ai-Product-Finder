import useLocalStorage from "../hooks/useLocalStorage";
import SavedList from "../components/SavedList";

export default function Saved() {
  const [saved, setSaved] = useLocalStorage("savedProducts", []);

  const removeItem = (item) => {
    setSaved(saved.filter((x) => x.name !== item.name));
  };

  return (
    <div className="px-6 py-10">
      <h1 className="text-2xl font-bold dark:text-white">Saved Products</h1>

      {saved.length === 0 ? (
        <p className="mt-4 dark:text-gray-300">
          No saved products yet.
        </p>
      ) : (
        <SavedList items={saved} onRemove={removeItem} />
      )}
    </div>
  );
}