export default function Dog({ name, age, breed, color }) {
  // let name = props.name;
  // let age = props.age;
  // let breed = props.breed;
  // let color = props.color;

  // let {name, age, breed, color} = props; destructuring the props object

  return (
    <section className="bg-slate-300 m-2 p-2">
      <h3 className="font-bold text-2x1 text-sky-700">{name}</h3>
      <p>Age: {age}</p>
      <p>Breed: {breed}</p>
      <p>Color: {color}</p>
    </section>
  );
}
