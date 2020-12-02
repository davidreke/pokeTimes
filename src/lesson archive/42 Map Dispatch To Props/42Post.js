import React, { Component } from 'react'
import { connect } from 'react-redux'

class Post extends Component{
    // 4. create the handleClick function. Go to RootReducer for 5.
    handleClick = () =>{
        this.props.deletePost(this.props.post.id)
        // 7 the below code sends you to the home page after you delet the post.
        this.props.history.push('./')
    }
    render() {
        // 2. console.log this.props
        // console.log('post props: ',this.props)
        const post = this.props.post ? (
            <div className="post">
                <h4 className='post'>
                    {this.props.post.title}
                </h4>
                <p>
                    {this.props.post.body}
                </p>
                <div className="center">
                    {/* 3. add button that calls the handleClick function */}
                    <button className='btn grey' onClick={this.handleClick}>Delete Post</button>
                </div>
            </div>
        ) : (
            <div className="center"> Loading Post ... </div>
        )

        return (
            <div className='container'>
               { post } 
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id ===id)
    }
}

// 1. create a mapDispatchToProps constant
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch({type: 'DELETE_POST', id: id})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)

