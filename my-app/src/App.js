
import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Howitwork from "./components/Howitwork";
import About from "./components/About";
import Ajent from "./components/Ajent";
import Ajentbox from "./components/Ajentbox";
import Properties from "./components/Properties";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <Howitwork/>
     <About/>
     {/* <Ajentbox/> */}
     <Ajent/>
     <Properties/>
     <Contact/>
    </div>
  );
}

export default App;
