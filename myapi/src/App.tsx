import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Navbar,Home,Film } from './components/index';

const App: React.FC = () => {
  return (
  
    <Router>
      <Navbar />
      <Routes>      
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<Film />} />
      </Routes>
    </Router>
  );
};

export default App;
