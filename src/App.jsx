import './App.css'
import {Route, Routes} from 'react-router-dom'
import Currencies from './pages/Currencies.jsx'
import Main from './pages/Main.jsx'
import Prices from './pages/Prices.jsx'
import Nav from './components/Nav.jsx'

function App() {
  

  return (
    <div className="App">
    <Nav />
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/currencies" element={<Currencies/>}/>
      <Route path="/price/:symbol" element={<Price/>}/>
    </Routes>
  </div>
  )
}

export default App
