
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Bclass from './components/Bclass';
import Eclass from './components/Eclass';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";




import { BrowserRouter , Routes, Route } from "react-router-dom";
const firebaseConfig = {
  apiKey: "AIzaSyA2yrwmUQYslf9xFUFFhJ2pIo5F2ZRuil8",
  authDomain: "airways-d5689.firebaseapp.com",
  projectId: "airways-d5689",
  storageBucket: "airways-d5689.appspot.com",
  messagingSenderId: "712006478009",
  appId: "1:712006478009:web:4a4145287e6829b7cdd368",
  measurementId: "G-VVHBZE3RTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);





function App() {
  return (
    <>
    <BrowserRouter>
          <Navbar/>
    <Routes>
          
     <Route exact path ="/About" Component={About}/>
     <Route exact path ="/Contact" Component={Contact}/>
     <Route exact path ="Ticket/Bclass" Component={Bclass}/>
     <Route exact path ="Ticket/Eclass" Component={Eclass}/>
              
              
    
  


     </Routes>      
      
     </BrowserRouter>
     </>
    
  );
}

export default App;
