import './App.css'
import Navbar from './Components/NavBar'
import Proyectos from './Components/Proyectos'
import Skills from './Components/Skills'
import Inicio from './Components/Inicio'
import ScrollToTopButton from './Components/ScrollToTopButton'
import Certificates from './Components/Certificates'

function App() {
  return (
    <>
        <Navbar />
      <div id="inicio">
        <Inicio />
      </div>
      <div id="proyectos">
        <Proyectos />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="certificates">
        <Certificates />
      </div>
      <ScrollToTopButton/>
    </>
  )
}

  export default App
