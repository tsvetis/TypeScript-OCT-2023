const USERS_URL = "https://jsonplaceholder.typicode.com/posts";

// interface Post {
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function getUsers(): void {
  fetch(USERS_URL, { method: "GET" })
    .then((res) => {
      return res.json();
    })
    .then((data: Post[]) => {
      const postTiles = data.map((post) => {
        return post.title;
      });

      console.log({ postTiles });
    })
    .catch((err) => console.log(`Error: ${err}`));
}

getUsers();
