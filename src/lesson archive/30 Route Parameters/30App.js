import React, {Component} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import About from  './components/About';
import Contact from './components/Contact';
// 3. Import Post and then demo by using localhost3000/1234
// after demo go to Post.js for the next part
import Post from './components/Post'

class App extends Component{
  render() {
    return(
      <BrowserRouter>
      <div className='App'>
        <Navbar/>
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path ='/Contact' component={Contact} />
        {/* 1. add a new Route below */}
        <Route path='/:post_id' component={Post} />
        {/* the color makes the url a variable of sorts */}
        {/* 2. create Post.js */}
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
