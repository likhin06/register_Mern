import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginMERN from './LoginMERN';
import FormMERN from './FormMERN';
import FormDataMERN from './FormDataMERN';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginMERN />} />
        <Route path="/Register" element={<FormMERN />} />
        <Route path="/GetReg" element={<FormDataMERN />} />
      </Routes>
    </Router>
  );
}

export default App;
