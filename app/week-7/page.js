"use client";
import { useState } from "react";

import item from "./item.js";
import Counter from "./new-item.js";
import ItemList from "./item-list.js";
import itemsData from "./items.json";

export default function Page() {

    const [itemList, setItemList] = useState([...itemsData]);

    const handleAddItem = (item) => {
        setItemList((prevItemList) => [...prevItemList, item]);
    }

  return (
    <main className="flex flex-col bg-slate-950 p-4">
      <h1 className="text-3xl font-bold  text-gray-100">Shopping List</h1>
        <Counter 
        onAddItem={handleAddItem}/>
      <ItemList 
        items={itemList}/>
    </main>
  );
}
