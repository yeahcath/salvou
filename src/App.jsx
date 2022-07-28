import './App.css';
import Navbar from './components/section/navbar/Navbar';
import Header from './components/section/header/Header';
import Content from './components/section/modulos/Content';
import Footer from './components/element/footer/Footer';
import About from './components/section/about/About';

function App() {
  
  return (
    <div className="App">
      <Navbar />    
      <Header />
      <About />
      <Content />
      <Footer />      
    </div>
  )
}

export default App
