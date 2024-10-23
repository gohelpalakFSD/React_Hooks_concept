import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ChildA from './ChildA'


function App() {

  let [count, setCount] = useState(0)

  let [color, setColor] = useState('black');

  console.log("Loading APP Component")

  let Learning = useCallback(() =>{
    console.log("learning");
},[color])

  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Add</button>


        <h1>{color}</h1>
        <button onClick={()=>setColor("blue")}>Change COlor</button>
      <ChildA Learning={Learning} color={color}/>
    </>
  )
}

export default App
