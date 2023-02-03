import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Currency from './Pages/Currency/Currency';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/Currency" element={<Currency />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
