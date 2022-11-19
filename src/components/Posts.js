import Post from "./Post";

export default function Posts() {
  let posts = [
    {
      user: { userImg: "./assets/imgs/meowed.png", userName: "meowed" },
      postContent: "./assets/imgs/gato-telefone.png",
      likes: {likedByImg: "./assets/imgs/respondeai.png", likedByName: "respondeai", numLikes: 101.523, likedByYou: false}
    },
    {
      user: { userImg: "./assets/imgs/barked.png", userName: "barked" },
      postContent: "./assets/imgs/dog.png",
      likes: {likedByImg: "./assets/imgs/adorableanimals.png", likedByName: "adorable_animals", numLikes: 99.159, likedByYou: false}
    },
    {
      user: { userImg: "./assets/imgs/adorableanimals.png", userName: "adorable_animals" },
      postContent: "./assets/imgs/video.mp4",
      likes: {likedByImg: "./assets/imgs/barked.png", likedByName: "barked", numLikes: 99.159, likedByYou: false}
    },
  ];

  return (
    <div class="posts">
      {posts.map(p => <Post user={p.user} postContent={p.postContent} likes={p.likes} />)}
    </div>
  );
}
