
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home.jsx";
import Detail from "./Routes/Detail.jsx"
import Favs from "./Routes/Favs.jsx"
import Contact from "./Routes/Contact.jsx"



function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/detail" element={<Detail/>}/>
            <Route path="/favs" element={<Favs/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
