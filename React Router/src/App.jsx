import {BrowserRouter,Routes,Route  } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Users from "./Pages/Users";
import Navbar from "./Components/Navbar";
import Error from "./Pages/Error";
import Contact from "./Pages/Contact";


function App()
{
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="users" element={<Users />}/>
      <Route path="*" element={<Error />}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;