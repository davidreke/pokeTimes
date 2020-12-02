import React, { Component } from 'react'
// 2. Add the import
import Rainbow from './Rainbow'

const About = () => {
    return (
        <div className='container'>
            <h4 className='center'>About </h4>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, sit?</p>
        </div>
    )
}

// 3. add Rainbow to the export
export default Rainbow(About)