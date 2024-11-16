import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Currencies from './pages/Currencies'
import Price from './pages/Prices'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/currencies">Currencies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/price/:symbol" element={<Price />} />
      </Routes>
    </div>
  )
}