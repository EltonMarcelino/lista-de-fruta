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

  const total = fruitList.reduce((currentValue, nextValue) =>  currentValue + nextValue.price,0)
console.log(total)

const fruits = fruitList.filter(fruitValue=>(fruitValue.category ==="Frutas"))
console.log(fruits)






  return (
    <div>
      <>
       
        {fruitList.map((fruit, index)=>(
          <ul key={index}>
        <li>{fruit.name}</li>
        </ul>
      ))}


      <span>{`total:(${total})`}</span>

          {fruits.map((fruit, index) =>(
             <ul key={index}>
              <span>{fruit.name}</span>
             </ul>
             
          ))}
     
      </>
     
        
      
    </div>
      

    
  )
}

export default App
