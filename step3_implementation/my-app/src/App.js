// npm-modules
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Components
import NavbarComponent from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
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
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/community' element={<Community/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
          </Routes>

      </div>
      </Router>
      
    </>
      
    
  );
}

export default App;
