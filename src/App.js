import GlobalStyle from "./globalStyles";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//paginas
import Home from "./pages/Home";
import PricingPage from "./pages/PricingPage";
import Navbar from '../src/components/navbar/Navbar';
import Footer from "./components/footer/Footer";


function App() {
  return <Router>

  <GlobalStyle/>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
    </Routes>

    <Footer />
  </Router>
}

export default App;
