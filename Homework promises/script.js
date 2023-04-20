const postsDiv = document.getElementById("posts");
const deleteButton = document.getElementById("delete");
const addButton = document.getElementById("add");
const editButton = document.getElementById("edit");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (data) {
    return data.json();
  })
  .then(function (posts) {
    for (let index = 0; index < posts.length; index++) {
      let newParagraf = document.createElement("p");
      newParagraf.innerText = posts[index].title;
      postsDiv.appendChild(newParagraf);
    }
  });

deleteButton.addEventListener("click", onDeletePost);
addButton.addEventListener("click", onAddPost);
editButton.addEventListener("click", onEditPost);

function onDeletePost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", { method: "DELETE" });
}

function onAddPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "test title",
      body: "test body",
      userId: 1,
    }),
  })
    .then((data) => data.json())
    .then((json) => console.log(json));
}

function onEditPost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 5,
      title: "updated title",
      body: "updated body",
      userId: 10,
    }),
  })
    .then((data) => data.json())
    .then((json) => console.log(json));
}