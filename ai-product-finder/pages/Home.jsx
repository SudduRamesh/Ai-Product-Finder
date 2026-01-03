import { useState } from "react";
import axios from "axios";
import SearchBox from "../components/SearchBox";
import ProductCard from "../components/ProductCard";
import useLocalStorage from "../hooks/useLocalStorage";
import { generatePrompt } from "../utils/aiPrompt";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [saved, setSaved] = useLocalStorage("savedProducts", []);

  const searchAI = async (query) => {
    setLoading(true);
    setResults([]);

    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1",
        { inputs: generatePrompt(query) },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
          },
        }
      );

      const text = response.data[0].generated_text;
      const json = JSON.parse(text.match(/\[([\s\S]*)\]/)[0]);

      setResults(json);
    } catch (error) {
      console.error(error);
      alert("AI Error — try again.");
    }

    setLoading(false);
  };

  const saveItem = (item) => {
    if (!saved.some((x) => x.name === item.name)) {
      setSaved([...saved, item]);
    }
  };

  return (
    <div className="px-6 py-10">
      <SearchBox onSearch={searchAI} />

      {loading && (
        <p className="text-center mt-10 text-lg dark:text-white">Loading...</p>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {results.map((item, i) => (
          <ProductCard key={i} item={item} onSave={saveItem} />
        ))}
      </div>
    </div>
  );
}