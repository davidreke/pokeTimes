import React from 'react'


const About = (props) => {
    // 1. Add props to this page and then console.log(props). Look at the push portion of the props.
    console.log('props: ',props);
    // 2. add setTimeout. This will push /about to the history key, which has a value of an array. Adding about to the array will then tell the browser to go to About
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000)
    // now got to the navbar for 3
    return (
        <div className='container'>
            <h4 className='center'>Contact </h4>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, sit?</p>
        </div>
    )
}

export default About