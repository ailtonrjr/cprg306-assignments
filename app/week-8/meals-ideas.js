"use client";

import { useState, useEffect } from "react";

export default function MealsIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  var fetchError = null;
  
  

  useEffect(() => {
    loadMealsIdeas(ingredient);
  }, [ingredient]);

  async function loadMealsIdeas(ingredient) {
    try {
      fetchError = false;
      const meals = await fetchMealsIdeas(ingredient);
      setMeals(meals);
    } catch (error) {
      console.error("Error fetching meals ideas:", error);
      setMeals([])
      fetchError = true;
    } 
  }

  async function fetchMealsIdeas(ingredient) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  }

  const handleClick = (meal) => {
    setSelectedMeal(meal);
  };

  return (
    <main>
      <div className="p-2 m-2">
          <h1 className="text-3xl font-bold text-white">Meals Ideas</h1>
          {meals.length < 1 ? (
            <p className="text-white pt-3">
            No meal ideas found for {ingredient}
          </p>) : (
          <p className="text-white pt-3">
            Here are some meal ideas using {ingredient}
          </p>)}
          {meals.length > 0 ? (
            <ul className="w-4/6 shadow-lg">
              {meals.map((meal) => (
                <li
                  key={meal.idMeal}
                  onClick={() => handleClick(meal)}
                  className="bg-slate-900 my-4 p-2 text-white cursor-pointer hover:bg-orange-700"
                >
                  <h4 className="font-bold text-xl">{meal.strMeal}</h4>
                  <p className="font-light text-md">
                    {meal.strArea} {meal.strCategory}
                  </p>
                </li>
              ))}
            </ul>
          ) : ("")}
          </div>
            


    </main>
  );
}