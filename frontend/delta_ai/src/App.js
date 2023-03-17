import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DiscussionForums from './pages/DiscussionForums';
import Error from './pages/Error';
import Explore from './pages/Explore';
import Home from './pages/Home';
import Learnings from './pages/Learnings';
import Login from './pages/Login';
import Mentor from './pages/Mentor';
import Registration from './pages/Register';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/learning' element={<Learnings/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Registration/>}/>
        <Route path='/mentor' element={<Mentor/>}/>
        <Route path='/discussion' element={<DiscussionForums/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;