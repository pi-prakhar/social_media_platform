import React from 'react';
import NavBar from './components/navbar'
import './App.css'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Screens/Home'
import Login from './components/Screens/Login'
import Signup from './components/Screens/Signup'
import Profile from './components/Screens/Profile'
import CreatePost from './components/Screens/createpost';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup/>
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/createpost">
        <CreatePost />
      </Route>

    </BrowserRouter>
    
    
  );
}

export default App;
