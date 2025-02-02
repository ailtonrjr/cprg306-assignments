import Dog from "./dog.js";
import Item from "./item.js";
import ItemList from "./item-list.js";

export default function Page() {
  return (
    <main className="bg-zinc-700 m-4 ">
      <h1 className="m-1 p-1 text-3xl font-bold text-gray-300">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}
