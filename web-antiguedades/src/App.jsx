import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ContactForm from './components/ContactForm'
import Banner from './components/Banner'
import AboutUs from './components/AboutUs'
import Faq from './components/Faq'
import Products from './components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />

      <section id="nosotros">
        <AboutUs />
      </section>

      <section id="productos">
        <Products />
      </section>

      <section id="faq">
        <Faq />
      </section>

      <section id="contacto">
        <ContactForm />
      </section>

      <Footer />
    </>
  )
}

export default App
