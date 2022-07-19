import GlobalStyle from "./globalStyles";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//paginas
import Home from "./pages/Home";
import PricingPage from "./pages/PricingPage";


function App() {
  return <Router>

  <GlobalStyle/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/pricing" element={<PricingPage/>}/>
    </Routes>
  </Router>
}

export default App;
