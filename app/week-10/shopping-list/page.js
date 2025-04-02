"use client";
import { useState } from "react";

import Counter from "./new-item.js";
import ItemList from "./item-list.js";
import itemsData from "./items.json";
import MealsIdeas from "./meals-ideas.js";

export default function Page() {

    const [itemList, setItemList] = useState([...itemsData]);
    const [selectedItem, setSelectedItem] = useState(null);


    const handleItemSelect = (item) => {
      let cleanedName = item.name.match(/^[^,]+/)[0].trim().replace(/[^a-zA-Z0-9]/g, " ");
      setSelectedItem(cleanedName);
    }

    const handleAddItem = (item) => {
        setItemList((prevItemList) => ([...prevItemList, item]));
    };

  return (
    <main className="flex flex-row bg-slate-950 p-4">
      <div className="flex flex-col">
      <h1 className="text-3xl font-bold  text-gray-100">Shopping List</h1>
      <Counter 
        onAddItem={handleAddItem}/>
      <ItemList 
        items={itemList}
        onItemSelect={handleItemSelect}/>
      </div>
      <div className="flex flex-col">
      <MealsIdeas 
        ingredient={selectedItem}/>
      </div>  
    </main>
  );
}
