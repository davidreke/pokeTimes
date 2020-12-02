
const initState= {
    // 1 add in some dummy data in the initState so we can interact with it then go to Home.js
    posts: [{id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
    {id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'},
    {id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'}]
}

const rootReducer = (state = initState, action) => {
    // 5. console.log the action
    console.log('root reducer says: ', action)
    // 6. handle the action in an if statement that filters out the post and returns a new state.
    //  Seven in on Post.js
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return (action.id !== post.id)
        });
        return{
            ...state,
            posts: newPosts
        }

    }
    return state
}


export default rootReducer