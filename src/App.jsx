import { useState } from "react"

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
    
  ]) 

  const total = fruitList.reduce((valorAtual, proximoValor) =>  valorAtual + proximoValor.price,0)
console.log(total)

  return (
    <div>
      <h1></h1>
      <span>${`total:(${total})`}</span>
    </div>
      

    
  )
}

export default App
