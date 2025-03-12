import item from "./item.js";
import ItemList from "./item-list.js";

export default function Page() {
  return (
    <main className="flex flex-col bg-slate-950 p-4">
      <h1 className="text-3xl font-bold  text-gray-100">Shopping List</h1>
      <ItemList />
    </main>
  );
}
