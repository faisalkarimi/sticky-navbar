import './App.css';
import Layout from './components/Layout';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
