import React, {Component} from 'react';
import Navbar from './components/Navbar';
// context, right now the posts happen at the end of every page because the browser reads /about, /Contact, etc as also a post ID
// 1 import a switch tag from react-router dom
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from  './components/About';
import Contact from './components/Contact';
import Post from './components/Post'


class App extends Component{
  render() {
    return(
      <BrowserRouter>
      <div className='App'>
        <Navbar/>
        {/* 2 add a switch tag around the routes*/}
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path ='/Contact' component={Contact} />
        <Route path='/:post_id' component={Post} />
        </Switch>

      </div>
      </BrowserRouter>
    )
  }
}

export default App;
