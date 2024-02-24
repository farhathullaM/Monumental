import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Components/LoginSignup/Login';
import SignUp from './Components/LoginSignup/Signup';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Showall from './Components/Showall/Showall';

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
          <Route path='/explore' element={<Showall/>}/>
      </Routes>
    

      </BrowserRouter>
    </div>
  );
}

export default App;
