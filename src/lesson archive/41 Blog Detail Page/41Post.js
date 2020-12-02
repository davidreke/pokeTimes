import React, { Component } from 'react'
// 2. remove the import of axios and import redux
import { connect } from 'react-redux'

class Post extends Component{
   // 1. remove state and componentDidMount
   
    

    render() {
        // 5. update post to equal props instead of state and update the title and body JS
        const post = this.props.post ? (
            <div className="post">
                <h4 className='post'>
                    {this.props.post.title}
                </h4>
                <p>
                    {this.props.post.body}
                </p>
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

// 4. map state to props

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id ===id)
    }
}

// 3. Change the vanilla export to a connect export
export default connect(mapStateToProps)(Post)

