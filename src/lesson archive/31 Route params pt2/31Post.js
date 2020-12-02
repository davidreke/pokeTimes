import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component{
    state = {
        post: null
    }
    componentDidMount(){

        let newID = this.props.match.params.post_id;
        console.log(newID);
        // 3. add axios.get to get post data, finally console.log the response and preview in localhost
        axios.get('https://jsonplaceholder.typicode.com/posts/'+ newID)
            .then(res => {
                this.setState({
                    post: res.data
                });
                console.log('response', res.data);
            })
    }

    render() {
        // 4. set up a post variable with a ternary operator
        const post = this.state.post ? (
            <div className="post">
                <h4 className='post'>
                    {this.state.post.title}
                </h4>
                <p>
                    {this.state.post.body}
                </p>
            </div>
        ) : (
            <div className="center"> Loading Post ... </div>
        )

        return (
            <div className='container'>
                {/* 5. replace the inside of the div with the post variable and show on local host */}
               { post } 
            </div>
        )
    }
}

export default Post

// Go back to app.js for