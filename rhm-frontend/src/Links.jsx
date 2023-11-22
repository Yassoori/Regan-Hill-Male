import {Routes, Route} from 'react-router-dom'
// Import Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Work from './pages/Work'

// // Import Components
// import SingleWork from "./components/SingleWork"

// // Import Shop Pages
// import Shopfront from './pages/Shopfront'
import Product from './components/Product'

const Links = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/work' element={<Work/>}/>
        {/* <Route path='/work/:id' element={<SingleWork/>}/> */}
        {/* Shop Pages */}
        {/* <Route path="/shop" element={<Shopfront/>}/> */}
        <Route path="/product/:id" element={<Product/>}/>
    </Routes>
  )
}

export default Links