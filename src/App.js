import './App.css';


import Navbar from './components/Navbar';


import Categories from './Categories';
import Suppliers from './Suppliers';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

function App(){

   
        return(
        <div id="main-container">
            <Navbar></Navbar>
            
            <Routes>
                <Route path = "/" element={<Home></Home>} />
                <Route path ="/Categories" element={<Categories />} />
                <Route path = "/Suppliers" element={<Suppliers />}/> 
            </Routes>

            
         
              
        </div>
    );
    }
    export default App;