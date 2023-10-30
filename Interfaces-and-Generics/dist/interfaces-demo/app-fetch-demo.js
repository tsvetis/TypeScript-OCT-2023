"use strict";
const USERS_URL = "https://jsonplaceholder.typicode.com/posts";
function getUsers() {
    fetch(USERS_URL, { method: "GET" })
        .then((res) => {
        return res.json();
    })
        .then((data) => {
        const postTiles = data.map((post) => {
            return post.title;
        });
        console.log({ postTiles });
    })
        .catch((err) => console.log(`Error: ${err}`));
}
getUsers();
