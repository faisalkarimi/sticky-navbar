import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/screens/Home';
import About from './components/screens/About';
import Projects from './components/screens/Projects';
import Hobby from './components/screens/Hobby';
import Contact from './components/screens/Contact';

function App() {
  const handleClick = (e) => {
    e.target.className = 'current';
  }
  return (
    
    <Router>
      <Layout onMenuItemclick={handleClick}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/hobby" element={<Hobby />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
    </Router>
  );
}

export default App;
