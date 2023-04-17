"use strict";

console.log("JS kører");

window.addEventListener("load", initApp);

const endpoint = "https://api-project-pgj-2023-default-rtdb.firebaseio.com/";

async function initApp() {
  const posts = await getPosts();
  displayPosts(posts);
}

async function getPosts() {
  const response = await fetch(`${endpoint}/posts.json`);
  const data = await response.json();
  const posts = preparePostData(data);
  console.log(posts);
  return posts;
}

function preparePostData(dataObject) {
  const postArray = [];
  for (const key in dataObject) {
    const post = dataObject[key];
    post.id = key;
    postArray.push(post);
  }
  return postArray;
}

function displayPosts(posts) {
  const container = document.querySelector("#posts");

  container.innerHTML = "";
  for (const post of posts) {
    const html =
      /*html*/
      `<table>
        <tr>
          <td>${post.id}</td>
          <td><img src="${post.image}"></td>
          <td>${post.title}</td>
        </tr>
     `;

    container.insertAdjacentHTML("beforeend", html);
  }
}
