import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import Analisis from './pages/analisis';
import Noticias from './pages/noticias';
// import Noticias from './pages/noticias';
// import Analisis from './pages/analisis';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let component
  switch (window.location.pathname){
    case "/":
      component = <Home />
      break
    case "/noticias":
      component = <Noticias />
      break
    case "/analisis":
      component = <Analisis />
      break 
    default:
  }
  return (
    <>
      <Navbar />
      {component}
    </>
  );
}

export default App;
