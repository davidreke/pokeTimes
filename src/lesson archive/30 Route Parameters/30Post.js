import React, { Component } from 'react'

class Post extends Component{
    // 5. create a default state
    state = {
        id: null
    }
    // 4. add componentDidMount method and demo the console.log
        // when you look at the console.log look at the props object and then show the match property and that match property is an object with the key 'params'
    componentDidMount(){
        console.log(this.props)
        let newID = this.props.match.params.post_id;
        console.log( 'new id: ',newID)
        // 6 change state to newID
        this.setState ({id: newID})
    }

    render() {
        return (
            <div className='container'>
                {/* <h4>route param</h4> */}
                {/* comment out the above h4 tag and replace it with the below JS */}
               <h4>{this.state.id}</h4> 
            </div>
        )
    }
}

export default Post

// Go back to app.js for