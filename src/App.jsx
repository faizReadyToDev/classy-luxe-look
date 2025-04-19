import { Route ,Routes , BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import ProductCard from './Components/ProductCard/ProductCard'
import Footer from './Components/Footer/Footer'
import CustomOrder from './Components/CustomOrder/CustomOrder'
import HeroSection from './Components/HeroSection/HeroSection'
import ProductDetail from './Components/ProductDetail/ProductDetail'
import { SharedStateProvider } from './Components/ContextApi/ContextApi'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import AboutUs from './Components/AboutUs/AboutUs'
import ContactUs from './Components/ContactUs/ContactUs'
import MobileHeaderMenu from './Components/MobileHeaderMenu/MobileHeaderMenu'

function App() {


  return (
    <>
    
    <SharedStateProvider>
      <Router>
        <ScrollToTop/>
        <Header/>
       

        <Routes>

          <Route path='/' element={<HeroSection/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/product' element={<ProductCard/>}/>
          <Route path='/custom' element={<CustomOrder/>}/>
          <Route path='/product-collections' element={<ProductDetail/>}/>
        </Routes>
          <Footer/>
      </Router>
    </SharedStateProvider>
    </>
  )
}

export default App
