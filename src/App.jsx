import './App.css';
import Navbar from './components/section/navbar/Navbar';
import Header from './components/section/header/Header';
import Footer from './components/element/footer/Footer';
import About from './components/section/about/About';
import Websites from './components/section/modulos/Website';

function App() {
  
  return (
    <div className="App">
      <Navbar />    
      <Header />
      <About />
      <Websites />
      <Footer />      
    </div>
  )
}

export default App
