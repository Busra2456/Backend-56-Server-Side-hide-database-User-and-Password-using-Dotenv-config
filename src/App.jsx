
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCrad from './components/coffeeCrad'
import { useState } from 'react';




function App() {
 

  const loaderCoffees = useLoaderData();
  const [coffees,setCoffees] = useState(loaderCoffees);
  
  return (
    <div>
  
    <div className='m-20'>
     
     
     <h1 className='text-6xl text-center my-20 text-purple-600'>Hot Hot Cold Cold Coffee: {coffees.length} </h1>
    <div className='grid md:grid-cols-2 gap-6 p-5'>
    {
      coffees.map(coffee =><CoffeeCrad 
        key={coffee._id} 
        coffee={coffee}
        coffees={coffees}
        setCoffees={setCoffees}
      
         ></CoffeeCrad>  )
    }
    </div>
    </div>
    </div>

  )
}

export default App
