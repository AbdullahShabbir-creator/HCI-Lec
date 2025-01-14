import './App.css';
import Navbar from './Componenet/Navabr';
import HciIntroduction from './Componenet/HciIntroduction';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Week1 from './Componenet/Week1';
import Week2 from './Componenet/Week2';
import Week3 from './Componenet/Week3';
import Week4 from './Componenet/Week4';
import Week5 from './Componenet/Week5';
import Lec1 from './Componenet/Lec1';
import Lec2 from './Componenet/Lec2';
import Lec3 from './Componenet/Lec3';
import Lec4 from './Componenet/Lec4';
import Lec5 from './Componenet/Lec5';
import Lec6 from './Componenet/Lec6';
import Lec7 from './Componenet/Lec7';
import Lec8 from './Componenet/Lec8';
import Lec10 from './Componenet/Lec10';
import Lec9 from './Componenet/Lec9';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HciIntroduction />} />
          <Route path="/week1" element={<Week1 />} />
          <Route path="/week2" element={<Week2 />} />
          <Route path="/week3" element={<Week3 />} />
          <Route path="/week4" element={<Week4 />} />
          <Route path="/week5" element={<Week5 />} />
          <Route path="/lec1" element={<Lec1 />} />
          <Route path="/lec2" element={<Lec2 />} />
          <Route path="/lec3" element={<Lec3 />} />
          <Route path="/lec4" element={<Lec4/>} />
          <Route path="/lec5" element={<Lec5/>} />
          <Route path="/lec6" element={<Lec6/>} />
          <Route path="/lec7" element={<Lec7/>} />
          <Route path="/lec8" element={<Lec8/>} />
          <Route path="/lec9" element={<Lec10/>} />
          <Route path="/lec10" element={<Lec9/>} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
