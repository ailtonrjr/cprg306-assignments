"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {

   const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <main className="bg-slate-950 min-h-screen">
      <div className="flex align-baseline justify-items-start mt-6 p-1">
        <p className="flex align-bottom text-md text-white font-sans ">
          Sort by:
        </p>
        <button
          className={`w-24 h-8 mx-2 text-white ${
            sortBy === "name" ? "bg-orange-500" : "bg-orange-700"
          }`}
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className={`w-24 h-8 mx-2 text-white ${
            sortBy === "category" ? "bg-orange-500" : "bg-orange-700"
          }`}
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
        <button
          className={`w-24 h-16 mx-2 text-white ${
            sortBy === "Grouped Category" ? "bg-orange-500" : "bg-orange-700"
          }`}
          onClick={() => setSortBy("Grouped Category")}
        >
          Grouped Category
        </button>
      </div>
      <div className="flex justify-start m-2 p-1">
        <ul className="w-4/6 shadow-lg ">
          {sortedItems.map((item) => (
            <li key={item.id} className="bg-slate-900 my-4 p-2 text-white">
              <h3 className="font-bold text-xl">{item.name}</h3>
              <p className="font-light text-md">
                Buy {item.quantity} in {item.category}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
