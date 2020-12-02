// 1. import the Navlink
import {Link, NavLink} from 'react-router-dom'

import React from 'react'

const  Navbar = () => {
    return (
        <nav className='nav-wrapper red darken-3'>
            <div className='container'>
                <a className='brand-logo'>Poke' Times</a>
                <ul className="right">
                    {/* 2. change our angchor tag to links and the href attribute to 'to'*/}
                    {/* 3. Note that in html, when we instpect, it stil shows anchor tags. */}
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar