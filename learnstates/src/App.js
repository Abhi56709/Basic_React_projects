import React from 'react'
import { useState } from 'react'
import Counter from './counter'

export default function App() {
  // let name = ''
  const [name, setName] = useState('neha')
  const handleclick=()=> {
    //name = 'Akash'
    // alert(name);
    setName('Akash');
  }
  return (
    <div>
      {/* <h1>Hello {name}</h1>
      <button onClick={handleclick}>Click</button> */}
    <Counter />
    </div>
  )
}