import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes} from 'react-router-dom'
import Login from './Components/LoginSignup/Login';
import SignUp from './Components/LoginSignup/Signup';
import Home from './Pages/Home.jsx';
import About from './Components/About/About';
import Showall from './Pages/Showall.jsx';
import Placedetails from './Pages/Placedetails.jsx';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/signup" exact element={<SignUp/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/explore' element={<Showall/>}/>
          <Route path='/places/:placeId' element={<Placedetails />}/>
      </Routes>

    </div>
  );
}

export default App;
