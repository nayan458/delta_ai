import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './pages/Error';
import Explore from './pages/Explore';
import Home from './pages/Home';
import Learnings from './pages/Learnings';
import SignUp from './pages/SignUp';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/learning' element={<Learnings/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;