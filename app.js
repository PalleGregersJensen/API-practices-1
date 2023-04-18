"use strict";

console.log("JS kører");

window.addEventListener("load", initApp);

const endpoint = "https://api-project-pgj-2023-default-rtdb.firebaseio.com/";

async function initApp() {
  const posts = await getPosts();
  displayPosts(posts);
  const users = await getUsers();
  displayUsers(users);
  createPost(
    "My First Post",
    "My body text",
    "https://images.unsplash.com/photo-1641876749963-550554c7258d"
  );
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
  for (const post of posts) {
    const html =
      /*html*/
      `<table>
        <tr>
          <td>${post.title}</td>
          <td><img src="${post.image}"></td>
          <td>${post.body}</td>
        </tr>
     `;

    document.querySelector("#posts").insertAdjacentHTML("beforeend", html);
  }
}

function displayPost() {}

function createPost(title, body, image) {
  const newPost = {
    title: title,
    body: body,
    image: image,
  };
  console.log(newPost);
  const postAsJson = JSON.stringify(newPost);
}

async function getUsers() {
  const response = await fetch(`${endpoint}/users.json`);
  const data = await response.json();
  const users = prepareUserData(data);
  console.log(users);
  return users;
}

function prepareUserData(dataObject) {
  const userArray = [];
  for (const key in dataObject) {
    const user = dataObject[key];
    user.id = key;
    userArray.push(user);
  }
  return userArray;
}

function displayUsers(users) {
  for (const user of users) {
    const html =
      /*html*/
      `<table>
        <tr>
          <td>${user.title}</td>
          <td><img src="${user.image}"></td>
          <td>${user.name}</td>
          <td>${user.mail}</td>
          <td>${user.phone}</td>
        </tr>
     `;

    document.querySelector("#users").insertAdjacentHTML("beforeend", html);
  }
}
