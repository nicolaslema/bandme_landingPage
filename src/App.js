import GlobalStyle from "./globalStyles";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//paginas
import Home from "./pages/Home";
import PricingPage from "./pages/PricingPage";
import Navbar from '../src/components/navbar/Navbar';


function App() {
  return <Router>

  <GlobalStyle/>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
    </Routes>
  </Router>
}

export default App;
