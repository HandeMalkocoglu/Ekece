import { useState } from "react";
import { Grid, List } from "lucide-react"; // İkonları içeren kütüphane (npm install lucide-react)
const ResultsFilter = () => {
  const [view, setView] = useState("grid");
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
      {/* Sol taraf: Sonuç sayısı */}
      <p className="text-gray-600 text-sm">Showing all 12 results</p>
      {/* Orta: Görünüm değiştirme butonları */}
      <div className="flex items-center gap-2">
        <span className="text-gray-600 text-sm">Views:</span>
        <button
          className={`p-2 rounded-lg border ${view === "grid" ? "bg-gray-200" : "bg-white"}`}
          onClick={() => setView("grid")}
        >
          <Grid size={16} />
        </button>
        <button
          className={`p-2 rounded-lg border ${view === "list" ? "bg-gray-200" : "bg-white"}`}
          onClick={() => setView("list")}
        >
          <List size={16} />
        </button>
      </div>
      {/* Sağ taraf: Dropdown ve Filtre butonu */}
      <div className="flex items-center gap-4">
        <select className="border p-2 rounded-lg text-sm text-gray-600">
          <option>Popularity</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest Arrivals</option>
        </select>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Filter</button>
      </div>
    </div>
  );
};
export default ResultsFilter;