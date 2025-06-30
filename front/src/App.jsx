import './App.css';
import './index.css'; 

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import  Footer  from './components/Footer';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Register from './pages/register';

import Efiling from './pages/IncomeTax/Efiling';
import IncomeTax2 from './pages/IncomeTax/IncomeTax2';
import IncomeTax3 from './pages/IncomeTax/IncomeTax3';
import IncomeTax4 from './pages/IncomeTax/IncomeTax4';
import IncomeTax5 from './pages/IncomeTax/IncomeTax5';
import IncomeTax6 from './pages/IncomeTax/IncomeTax6';
import IncomeTax7 from './pages/IncomeTax/IncomeTax7';
import IncomeTax8 from './pages/IncomeTax/IncomeTax8';
import IncomeTax9 from './pages/IncomeTax/IncomeTax9';
import IncomeTax10 from './pages/IncomeTax/IncomeTax10';
import IncomeTax11 from './pages/IncomeTax/IncomeTax11';
import IncomeTax12 from './pages/IncomeTax/IncomeTax12';
import IncomeTax13 from './pages/IncomeTax/IncomeTax13';

import Gst1 from './pages/GST/Gst1.jsx';



function App() {
  return (
    <BrowserRouter>
      <Header/>
   
      <Routes>
         <Route  path={"/"}  element={<Home/>}/>
         {/* INCOME TAX */}
          <Route  path={"/efiling"}  element={<Efiling />}/>
           <Route  path={"/incometax2"}  element={<IncomeTax2 />}/>
           <Route  path={"/incometax3"}  element={<IncomeTax3 />}/>
           <Route  path={"/incometax4"}  element={<IncomeTax4 />}/>
           <Route  path={"/incometax5"}  element={<IncomeTax5 />}/>
           <Route  path={"/incometax6"}  element={<IncomeTax6 />}/>
           <Route  path={"/incometax7"}  element={<IncomeTax7 />}/>
           <Route  path={"/incometax8"}  element={<IncomeTax8 />}/>
           <Route  path={"/incometax9"}  element={<IncomeTax9 />}/>
           <Route  path={"/incometax10"}  element={<IncomeTax10 />}/>
           <Route  path={"/incometax11"}  element={<IncomeTax11 />}/>
           <Route  path={"/incometax12"}  element={<IncomeTax12 />}/>
           <Route  path={"/incometax13"}  element={<IncomeTax13 />}/>
           

          {/* GST */}
          < Route  path={"/gst1"}  element={< Gst1/>}/>        
          


           <Route  path="/signIn"  element={<SignIn/>}/>
           <Route  path="/register"  element={<Register/>}/>
      
      </Routes>
      
        <Footer/>
    </BrowserRouter>
  );
}

export default App;