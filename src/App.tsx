import { useState } from 'react'
import Message from './Components/Message'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Message />
    </div>
  )
}

export default App
