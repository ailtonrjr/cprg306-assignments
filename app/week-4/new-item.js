"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCounter] = useState(1);

  const increment = () => {
    setCounter(count + 1);
    console.log(count);
  };

  const decrement = () => {
    setCounter(count - 1);
    console.log(count);
  };

  return (
    <section className="bg-slate-100 m-2 p-2 w-1/5 flex flex-row items-center justify-center">
      <p className="font-bold text-1x1 text-gray-900 w-9">{count}</p>
      <button
        className="bg-blue-500 w-8 h-6 m-1 font-extrabold rounded-lg text-white disabled:bg-gray-400"
        onClick={decrement}
        disabled={count <= 1}
      >
        {" "}
        {"-"}{" "}
      </button>

      <button
        className="bg-blue-500 w-8 h-6 m-1 font-extrabold rounded-lg text-white disabled:bg-gray-400"
        onClick={increment}
        disabled={count >= 20}
      >
        {" "}
        {"+"}{" "}
      </button>
    </section>
  );
}
