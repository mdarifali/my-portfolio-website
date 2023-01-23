import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./Componants/Home/Home";
import Navbar from "./Componants/Navbar/Navbar";
import Blog from "./Componants/Blog/Blog";
import ProjectOne from "./Componants/Projects/ProjectOne";
import ProjectTwo from "./Componants/Projects/ProjectTwo";
import ProjectThree from "./Componants/Projects/ProjectThree";


function App() {
  return (
    <div className="bg-dark">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Project-1" element={<ProjectOne />} />
        <Route path="/Project-2" element={<ProjectTwo />} />
        <Route path="/Project-3" element={<ProjectThree />} />
      </Routes>
    </div>
  );
}

export default App;
