import './App.css';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom'
import Home from './pages/Home';
import FinancialServises from './pages/OurBusiness/FinancialServices';
import EnterpriseLevel from './pages/OurBusiness/EnterpriseLevel';
import SmeLevel from './pages/OurBusiness/SmeLevel';
import DbMiddleware from './pages/OurBusiness/DbMiddleware';
import Contact from './pages/Contact';
// import AboutReadMore from './component/AboutReadMore';
import AboutMore from './pages/AboutMore';
import OurProductPages from './pages/OurProductPages';

function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/financial-services" element={<FinancialServises/>}></Route>
            <Route path="/enterprise-level" element={<EnterpriseLevel/>}></Route>
            <Route path="/sme-level" element={<SmeLevel/>}></Route>
            <Route path="/database-middleware" element={<DbMiddleware/>}></Route>
            <Route path="/our-product" element={<OurProductPages/>}></Route>
            <Route path="/contact-us" element={<Contact/>}></Route>
            {/* <Route path="/AboutReadMore" element={<AboutReadMore/>}></Route> */}
            <Route path="/about-more" element={<AboutMore/>}></Route>
          </Routes>
    </Router>

  );
}

export default App;
