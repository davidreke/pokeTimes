import React, { Component } from 'react'
import axios from 'axios'
// 1. Import Link from react-router-dom
import { Link } from 'react-router-dom'


class Home extends Component{
    state = {
        posts: []
    };
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res =>{
                console.log('response',res);
                this.setState({
                    posts: res.data.slice(0,10)
                })
            })
    };

    render(){
        const {posts} = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className='card-content'>
                            {/* 2 add a Link around the card-title span then preview page. Finally go to post.js for 3 */}
                            <Link to={'/' + post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
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
                {postList}
            </div>
        )
    }
}
   


export default Home