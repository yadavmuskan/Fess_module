
import './App.css';
import Dashboard from './Table/Dashboard';
import Acadmic from './components/Login';
import Placement from './components/Placement';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Fees from './components/Forgetpass';
import Register from './components/Register';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/login" element={<Acadmic />} />
          <Route path="/register" element={<Register />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/forgot-password" element={<Fees />} />
          
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
