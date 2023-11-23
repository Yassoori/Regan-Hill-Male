import {Routes, Route} from 'react-router-dom'
// Import Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Work from './pages/Work'
import Product from './components/Product'

const Links = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path="/product/:id" element={<Product/>}/>
    </Routes>
  )
}

export default Links