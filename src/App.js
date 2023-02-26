import './App.css';
import Home from './Components/Home/Home';
// import HomeDemo from './Components/HomeDemo/HomeDemo';
import Navbar from './Components/Navbar/Navbar';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';


function App() {
  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  },[])

  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      {/* <HomeDemo></HomeDemo> */}
    </div>
  );
}

export default App;


