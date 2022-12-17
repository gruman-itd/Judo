import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import NavigationBar from './components/NavigationBar'
import Home from './pages/Home';
import Judo from './pages/Judo';

import { Container, Row, Col } from 'react-bootstrap';

function App() {

  return (
    <Router>
      <div className="main_container">
        <Container>
          <NavigationBar />
          <Routes>
            <Route element={<Home />} path="/" exact />
            <Route element={<Judo />} path="/judo/:id" />
          </Routes>
        </Container>
      </div>
    </Router>
  )
}

export default App;
