import React from 'react'
import Lottery from './Lottery'
import Nav from './Nav'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import E404 from './E404';
import Home from './Home';
import About from './About';
const App = () => {
  return (
    <>
    {/* <Nav />
    <div className='container'>
       <Lottery />
    </div> */}
    <Nav />
    <Router>
      <Routes>
        <Route exact path="/lottery_game" element ={<Lottery/>}/>
        <Route exact path="/Home" element ={<Home/>}/>
        <Route exact path="/About" element ={<About/>}/>
        <Route path="*" element={<E404/>}/>
      </Routes>
    </Router>
   </>
  );
};

export default App
