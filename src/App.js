import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Login from './Components/LoginSignup/Login';
import SignUp from './Components/LoginSignup/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>

      <Routes>
          <Route path='/login' exact element={<Login/>}/>
          <Route path="/signup" exact element={<SignUp/>} />
      </Routes>

      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
