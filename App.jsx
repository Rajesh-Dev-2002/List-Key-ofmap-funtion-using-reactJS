import React from 'react'

import './App.css'

 function App() {
  const IPL=["MI","CSK","RCB","CSK"];
//   const l1=[
//     {
//     id:"1",
//     name:"Rajesh kumar"
//   },
//     {
//     id:"2",
//     name:"Rakesh kumar"
//   },
//     {
//     id:"3",
//     name:"Ramesh kumar"
//   },
// ]
  const result= IPL.map((id,name)=> <h1>{id} And Index is {name}</h1> )
  return (
    <div>

      <h1>{result}</h1>
      
    </div>
  )
}
export default App
