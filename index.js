import { posts } from './data.js'

const getPostsHtml = () => {
    
    let postsHtml = ''
    
    posts.forEach( post => {
        postsHtml += `
            <div class="post-info">
                    <img src="${post.avatar}" class="post-avatar">
                    <div class="user-info">
                        <p class="post-name">${post.name}</p>
                        <p class="post-location">${post.location}</p>   
                    </div> 
                </div>
                <img src="${post.post}" class="post-image">
                <div class="icons">
                    <img src="images/icon-heart.png" class="post-like">
                    <img src="images/icon-comment.png" class="post-comment">
                    <img src="images/icon-dm.png" class="post-dm">
                </div>
                <div class="comments">
                    <p class="post-likes">${post.likes} likes</p>
                    <p class="post-comment"><strong>${post.username}</strong>${post.comment}</p>
                </div>
                <div class="gap"></div>
        `
    }) 
    return postsHtml  
}

const render = () => {
    document.getElementById('posts').innerHTML = getPostsHtml()
}

render()