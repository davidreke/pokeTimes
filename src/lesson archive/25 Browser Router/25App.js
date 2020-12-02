import React, {Component} from 'react';
// 7 import the Navbar and add the component
// eight is setting up the router.
// 8. npm install react-router-dom
import Navbar from './components/Navbar';
// 9. import the react router and components;
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import About from  './components/About';
import Contact from './components/Contact';

// 2. After erasing excess files, make the component a class 
// 3. Create home component file
class App extends Component{
  render() {
    return(
      // 10 add theBrowser Router Component and the Route components
      // if you get an error try npm install --save react-router-dom
      <BrowserRouter>
      <div className='App'>
        <Navbar/>
        {/* below should start as <Route path='/' component={Home} /> */}
        {/* 11. add exact before the path */}
        {/* discuss how the page reloads after every click */}
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path ='/Contact' component={Contact} />
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
