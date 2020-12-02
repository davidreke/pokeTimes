import {Link, NavLink, withRouter} from 'react-router-dom'

import React from 'react'

const  Navbar = (props) => {
    // 3. add a new SetTimeOut
    // props.history will not be possible 
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000)
    // 4. Comment out step three and console.log props
    // The navbar isn't in a router, so its not included in the history prototype of props.

    // 5. Now let's try adding in a higher level component. Add 'withRouter' to the imports for react-router-dom then go to the export of this file
    console.log('props :',props)
    return (
        <nav className='nav-wrapper red darken-3'>
            <div className='container'>
                <a className='brand-logo'>Poke' Times</a>
                <ul className="right">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}
// 6. add WithRouter to the export, then uncomment out step three and run again. 
// explenation: a Higher order component is a component with additional functionality. IF you look at the browser now you will see addtional key/value pairs added to props.
export default withRouter(Navbar)

