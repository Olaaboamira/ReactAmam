
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Apis from './Components/Api/Apis';
// import Apis from './Components/Api/Apis';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} children={<Route path="/" element={<Register />} />}/>
      <Route path="/" element={<Home />} children={<Route path="SginUp" element={<Login/>} />}/>
      <Route path="/" element={<Home />} children={<Route path="SginUp/weather" element={<Apis/>} />}/>
      </Routes>
      {/* <Register/> */}
      {/* <Apis/> */}
    </div>
  );
}

export default App;
