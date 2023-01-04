import React from "react";
import {Routes,Route} from 'react-router-dom'

import Achievements from "./routes/Achievements";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Training from "./routes/Training";



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/achievements' element={<Achievements />} />
        <Route path='/training' element={<Training />} />
        <Route path='/contact' element={<Contact/>} />
     
        
      </Routes>
    </div>
  );
}

export default App;
