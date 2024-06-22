import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Contacts from './components/Contacts'
import Skils from './components/Skils'
import About from './components/about'
import Work from './components/Work'
import Footer from './components/Footer'
// import Background from './components/Background'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Skils />
      <About />
      <Work />
      <Contacts />
      < Footer/>
      {/* <Background /> */}
    </>
  )
}

export default App
