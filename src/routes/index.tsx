import { Route, Routes } from 'react-router-dom'

import Assignment1 from './Assignment1'
import Assignment2 from './Assignment2'
import Home from './Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="assignment1" element={<Assignment1 />} />
      <Route path="assignment2" element={<Assignment2 />} />
    </Routes>
  )
}

export default App
