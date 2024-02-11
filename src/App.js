import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Login from './Components/LoginSignup/Login';
import SignUp from './Components/LoginSignup/Signup';
import Home from './Components/Home/Home';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>

      
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/signup" exact element={<SignUp/>} />
          <Route path='/about' element={<About/>}/>
      </Routes>
    

      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
