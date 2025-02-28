"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCounter] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const increment = () => {
    setCounter(count + 1);
    console.log(count);
  };

  const decrement = () => {
    setCounter(count - 1);
    console.log(count);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let item = { name, category, count };
    alert(`Added item: ${name}, quantity: ${count}, category: ${category}`);
    console.log(item);
  };

  const handleNameChange = (event) => {
    let newName = event.target.value.toUpperCase();
    setName(newName);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <form
      className="bg-blue-800 m-5 w-96 h-44 flex flex-col items-center justify-center"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-row items-center justify-center w-96 h-1/3 bg-slate-800">
        <input
          className="bg-white rounded-md text-black p-3 m-2 w-96"
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(event) => handleNameChange(event)}
          required
        />
      </div>
      <div className="flex flex-row justify-between align-baseline w-96 h-1/3 bg-slate-800">
        <div className="flex flex-row items-center justify-center w-2/5 h-5/6 bg-white rounded-md m-2">
          <p className="text-1x1 text-gray-900 w-4/5 bg-white h-10 rounded-md p-2 ">
            {count}
          </p>
          <button
            className="bg-blue-500 w-12 h-6 m-1 font-extrabold rounded-lg text-white disabled:bg-gray-400"
            onClick={decrement}
            disabled={count <= 1}
          >
            {" "}
            {"-"}{" "}
          </button>
          <button
            className="bg-blue-500 w-12 h-6 mr-2 justify-center font-extrabold rounded-lg text-white disabled:bg-gray-400"
            onClick={increment}
            disabled={count >= 20}
          >
            {" "}
            {"+"}{" "}
          </button>
        </div>
        <div className="flex flex-row items-center justify-end w-6/12">
          <select
            className="bg-white w-3/4 h-5/6 rounded-md text-black p-2"
            value={category}
            onChange={(event) => handleCategoryChange(event)}
            required
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-96 h-1/3  bg-slate-800">
        <button
          className="bg-blue-500 w-96 h-10 m-2 font-extrabold rounded-md text-white disabled:bg-gray-400"
          type="submit"
        >
          {"+"}
        </button>
      </div>
    </form>
  );
}
