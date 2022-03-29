import './App.css';

// Components
import Navbar from './components/Navbar';
import Aboutus from './components/Aboutus';
import North from './components/North';
import South from './components/South';
import Western from './components/Western';
import Eastern from './components/Eastern';
import Central from './components/Central';
import Contact from './components/Contact';

// react router dom

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';

import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>

        <Navbar />

        <div className="base">

          <Routes>

            <Route exact path="/" element={<Home />} />
            <Route exact path="/aboutus" element={<Aboutus />} />
            <Route exact path="/north" element={<North />} />
            <Route exact path="/south" element={<South />} />
            <Route exact path="/western" element={<Western />} />
            <Route exact path="/eastern" element={<Eastern />} />
            <Route exact path="/central" element={<Central />} />
            <Route exact path="/contact" element={<Contact />} />

          </Routes>

        </div>
        <Footer />

      </Router>
    </>
  );
}

export default App;
