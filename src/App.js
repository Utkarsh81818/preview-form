import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Form from "./Signup";
import Home from "./Home";
  
function App() {
    
  return (
      <div>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/form" element={<Form/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
}
  
export default App;