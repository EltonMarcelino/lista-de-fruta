import { useState } from "react";

function App() {
  const [fruitList, setFruit] = useState([
    {
      name: "Morango",
      price: 15,
      category: "Frutas",
    },
    {
      name: "Uva",
      price: 23,
      category: "Frutas",
    },
    {
      name: "Banana",
      price: 23,
      category: "Frutas",
    },
    {
      name: "Beterraba",
      price: 5,
      category: "Legumes",
    },
  ]);

  const total = fruitList.reduce(
    (currentValue, nextValue) => currentValue + nextValue.price,
    0
  );

  const fruit1 = fruitList.filter(
    (fruitValue) => fruitValue.category === "Frutas"
  );

  const fruit2 = fruitList.filter(
    (fruitValue) => fruitValue.category === "Legumes"
  );

  const add = () => {
    const newList = { name: "Beterraba", price: 5, category: "Legumes" };
    setFruit([...fruitList, newList]);
  };

  return (
    <div>
      <>
        {fruitList.map((fruit, index) => (
          <ul key={index}>
            <li>{fruit.name}</li>
          </ul>
        ))}

        <button onClick={add}>adicionar</button>

        <h2>frutas</h2>
        {fruit1.map((fruit, index) => (
          <ul key={index}>
            <li>{fruit.name}</li>
          </ul>
        ))}

        <h2>legumes</h2>
        {fruit2.map((fruit, index) => (
          <ul key={index}>
            <li>{fruit.name}</li>
          </ul>
        ))}

        <span>{`total:(${total})`}</span>
      </>
    </div>
  );
}

export default App;
