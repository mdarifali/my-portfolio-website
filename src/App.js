import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./Componants/Home/Home";
import Navbar from "./Componants/Navbar/Navbar";


function App() {
  return (
    <div className="bg-dark">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
