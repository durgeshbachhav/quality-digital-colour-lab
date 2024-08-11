

import ContactUs from './components/Contactus'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Offers from './components/Offers'
import { Reviews } from './components/Reviews'
import Services from './components/Services'

function App() {
  return (
    <div className='bg-black'>
      <Header />
      <Hero />
      <div id='services'>
        <Services />
      </div>
      <div id='about'>
        <Features />
      </div>
      <Offers />
      <Reviews />
      <div id='contact'>
        <ContactUs />
      </div>
      <Footer />
    </div>
  )
}

export default App
