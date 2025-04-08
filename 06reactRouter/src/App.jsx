import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Homepage,About,Contact} from './pages/index'
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
      <NavBar />
      <div className="max-w-4xl mx-auto mt-8">
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
