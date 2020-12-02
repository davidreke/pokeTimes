// 1. create Rainbow.js and add imports
// for reference: https://reactjs.org/docs/higher-order-components.html
// a higher order component is essentially a function that returns component
import React from  'react'

const Rainbow = (WrappedComponent) => {

    const colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
    const randomColor = colors[Math.floor(Math.random()* 6)]
    // materalize has the class 'red-text' setup
    const className = randomColor+'-text';

    return (props) => {
        // note - we need the props incase the component we wrap has props, we need to have those props in the HOC now
        return(
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }

}

export default Rainbow

// go to about.js for steps 2 and 3