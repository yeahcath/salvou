import './App.css';
import Navbar from './components/section/navbar/Navbar';
import Header from './components/section/header/Header';
import About from './components/section/about/About';
import Footer from './components/element/footer/Footer';

function App() {
  
  return (
    <div className="App">
      <Navbar />    
      <Header />
      <About />
      <Footer />      
    </div>
  )
}

export default App
