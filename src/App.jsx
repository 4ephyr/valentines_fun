import { useState } from 'react'
import Box from './components/Box'
import Watermark from './components/Watermark'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Watermark />
      <div className="bg-primary h-[70vh] w-full flex justify-center items-center font-sans">
        <Box />
      </div>
    </>
  )
}

export default App
