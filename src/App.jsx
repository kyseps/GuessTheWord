import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-screen w-screen bg-gray-400 absolute'>
    <h1 className='text-xl text-teal-950 flex justify-center mt-8'>Hey guys This gon be the Game we call GuessTheWord</h1>

    </div>
    </>
  )
}

export default App
