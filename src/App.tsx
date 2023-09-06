
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import PostNews from './Pages/Addpost'



function App() {
  

  return (
    <Routes>
      <Route  path="/" element={<Home/>} />

      <Route  path="/about" element={<About/>} />

      <Route  path="/contact" element={<Contact/>} />

      <Route  path="/postnews" element={<PostNews/>} />
    </Routes>
    
    
  )
}

export default App
