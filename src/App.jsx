import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blogs from './Components/Blogs/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className='text-4xl text-center text-red-500'>React collection tailwind</h1>
    <Blogs></Blogs>
    </>
  )
}

export default App
