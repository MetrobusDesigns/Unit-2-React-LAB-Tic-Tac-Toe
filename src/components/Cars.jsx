import React, {useState} from 'react';

function Cars(){
const [car, setCar] = useState ({ year: 2024, 
                                make: "Ford",
                                model: "Mustang"})

function handleYearChange (event){
  setCar(c => ({...c, year: event.target.value}));
}
function handleMakeChange(event){
  setCar (c => ({...c, make: event.target.value}))
}
function handleModelChange(event){
  setCar (c=> ({...car, model:event.target.value}))
}

  return (
    <div>
      {/* this sets the static element set with const [car , setCar] */}
      <p>Your favorite car is a: {car.year}, {car.make}, {car.model}</p>
      <input type="number" value={car.year} onChange={handleYearChange}/>
      <input type="text" value={car.make} onChange={handleMakeChange}/>
      <input type="text" value={car.model} onChange={handleModelChange}/>

    </div>
  )
}

export default Cars