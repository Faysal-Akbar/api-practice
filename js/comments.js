const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(Response => Response.json())
    .then(data => displayComments(data))
}
// loadComments();

const displayComments = (comments) => {
    const divContainer = document.getElementById('div-container');
    // for(const comment of comments){
        comments.forEach(comment => {
            const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
        <h2>${comment.id}</h2>
        <h3>${comment.email}</h3>
        <p>${comment.body}</p>
        <button onclick="singleComment('${comment.id}')">Details</button>
        `
        divContainer.appendChild(div);
        })
}

const singleComment = (comment) => {
    const url = `https://jsonplaceholder.typicode.com/comments/${comment}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaySingleComment(data))
}

const displaySingleComment = comments => {
   const singleCommentContainer = document.getElementById('single-comment');
   singleCommentContainer.innerHTML = '';
   const div = document.createElement('div');
   div.classList.add('singleComment');
   div.innerHTML = `
   <h2>Here is the single comment-</h2>
   <h2>${comments.id}</h2>
   <h3>${comments.email}</h3>
   <p>${comments.body}</p>
   `
   singleCommentContainer.appendChild(div);
}