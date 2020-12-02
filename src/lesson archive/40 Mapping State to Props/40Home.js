import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
// 3. import connect from react-redux. Connect allows us to do the infamous high-order component go to the export for 4
import { connect } from 'react-redux'


class Home extends Component{
    // 2. remove State, component did mount, and axios from this page


    render(){
        // 7. console.log this.props, also replace const {posts} = this.state /with/ this.props
        console.log('props: ',this.props)
        const {posts} = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt='A pokeball' className='pokeball' />
                        <div className='card-content'>
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
            <div className='container home'>
                <h4 className='center'>Home </h4>
                {postList}
            </div>
        )
    }
}
   
// 5 create const that maps the state to props

const mapStateToProps = ( state ) => {
    return{
        posts:state.posts
    }
}

// 4. wrap home in the connect method to make it a higher order component
// 6. connect mapStateTo Props to the export
export default connect(mapStateToProps)(Home)
// note --- we invoke this component and then it returns the Homem component, hence both paranthesis