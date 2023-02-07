import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PokeDetails from './pages/PokeDetails';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:name" element={<PokeDetails />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
