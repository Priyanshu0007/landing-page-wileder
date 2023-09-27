import './App.scss'
import FinalSection from './components/finalsection'
import Footer from './components/footer'
import Hero from './components/hero-section'
import LogoSection from './components/logosection'
import Navbar from './components/navbar'
import Subsection from './components/subsection'

function App() {

  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <Subsection/>
      <FinalSection/>
      <LogoSection/>
      <Footer/>
    </div>
  )
}

export default App

