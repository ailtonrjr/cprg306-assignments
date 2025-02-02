export default function Item({ name, quantity, category }) {
  return (
    <section className="bg-slate-800 m-2 p-2 w-1/3">
      <h3 className="font-bold text-4x1 text-gray-100">{name}</h3>
      <p className="font-light text-1x1 text-gray-600">
        Buy {quantity} in {category}
      </p>
    </section>
  );
}
