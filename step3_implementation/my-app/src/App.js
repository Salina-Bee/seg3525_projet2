// npm-modules
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Components
import NavbarComponent from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Services from './components/Services';
import Community from './components/Community';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

// Stylesheet
import './App.css';

document.body.style.backgroundColor = "black";

function App() {
  return (
    <>
      <Router>
      <NavbarComponent />
      <div className="content">       
          <Routes>
            <Route path='/seg3525_projet2' element={<Home/>}/>
            <Route path='/seg3525_projet2/products' element={<Products/>}/>
            <Route path='/seg3525_projet2/products/:id' element={<ProductDetails/>}/>
            <Route path='/seg3525_projet2/services' element={<Services/>}/>
            <Route path='/seg3525_projet2/community' element={<Community/>}/>
            <Route path='/seg3525_projet2/signin' element={<SignIn/>}/>
            <Route path='/seg3525_projet2/signup' element={<SignUp/>}/>
            
          </Routes>

      </div>
      </Router>
      
    </>
      
    
  );
}

export default App;
