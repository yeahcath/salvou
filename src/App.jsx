import './App.css';
import Navbar from './components/section/navbar/Navbar';
import Header from './components/section/header/Header';
import Modules from './components/section/modulos/Modules';
import Footer from './components/element/footer/Footer';
import About from './components/section/about/About';

function App() {
  
  return (
    <div className="App">
      <Navbar />    
      <Header />
      <About />
      <Modules />
      <Footer />      
    </div>
  )
}

export default App
