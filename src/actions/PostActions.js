// 1. set up export. Do 2 on Post.js

export const deletePost = (id) => {
    console.log('delete post action dispatched')
    return {
        type: 'DELETE_POST',
        id: id
    }
}