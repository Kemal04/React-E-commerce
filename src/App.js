import React from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Route path='/' element={<Home />} />
      </Router>
    </div>
  )
}

export default App