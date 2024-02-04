import { useState } from 'react'
import Box from './components/Box'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-primary h-screen w-full flex justify-center items-center font-sans">
        <Box />
      </div>
    </>
  )
}

export default App
