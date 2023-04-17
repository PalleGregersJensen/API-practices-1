"use strict"

console.log("JS kører");

window.addEventListener("load", initApp);

const endpoint = "https://api-project-pgj-2023-default-rtdb.firebaseio.com/";

function initApp() {
    getPosts();
}

async function getPosts() {
    const response = await fetch(`${endpoint}/posts.json`);
    const data = await response.json();
    const posts = preparePostData(data);
    console.log(posts);
    return posts
}

function preparePostData(dataObject) {
    console.log(dataObject);
    const postArray = [];
    for (const key in dataObject) {
        const post = dataObject[key];
        post.id = key;
        postArray.push(post);
    }
    return postArray
}