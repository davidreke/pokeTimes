// 1. npm install axios
// we use this to serve and fetch server APIS, in this case a dummy API
// 3. import axios

import React, { Component } from 'react'
import axios from 'axios'

// 2. We now need to turn this into a class based component because we are going to use lifecycle hooks to go out and grab data.

class Home extends Component{
    // 4. add a componentDidMount function and a defualt state
    state = {
        posts: []
    };
    componentDidMount(){
        // below asynchronous, we dont' knwo when it will be done, so we have to attach.then and then use a call back function
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res =>{
                console.log('response',res);
                // after console.logging this, look at the data key in the res object
                // 5. add the setState method
                this.setState({
                    posts: res.data.slice(0,10)
                })
            })
    };

    render(){
        // 6. use destructuring to get a posts variable and ternary operator to display posts if they exist
        const {posts} = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className='card-content'>
                            <span className="card-title">{post.title}</span>
                            <p>{post.body}</p>

                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center"> No Posts yet </div>
        );
        return (
            <div className='container'>
                <h4 className='center'>Home </h4>
                {/* 7. remove teh paragraph replace it with the postList variable */}
                {postList}
            </div>
        )
    }
}
   


export default Home