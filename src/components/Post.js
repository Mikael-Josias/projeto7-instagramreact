import React from "react";

export default function Post(props) {
  let content = "";
  let [liked, setLiked] = React.useState(props.likes.likedByYou);
  let [numLikes, setNumLikes] = React.useState(props.likes.numLikes);

  if (
    props.postContent.substr(props.postContent.length - 3) === "mp4" ||
    props.postContent.substr(props.postContent.length - 3) === "ogv"
  ) {
    content = (
      <video controls autoplay muted loop>
        <source src={props.postContent} type="video/mp4" />
      </video>
    );
  } else {
    content = <img src={props.postContent} />;
  }

  function setLike() {
    let num = Number(String(numLikes).replace(".", ""));

    if (liked) {
      num -= 1;
      setLiked(false);
    } else {
      num += 1;
      setLiked(true);
    }

    setNumLikes(num.toLocaleString("pt-BR"));
  }

  return (
    <div class="posts__card">
      <div class="posts__card__cabecalho">
        <div>
          <img src={props.user.userImg} alt="Logo meowed" />
          <a href="#Meowed">{props.user.userName}</a>
        </div>

        <ion-icon class="icon" name="ellipsis-horizontal"></ion-icon>
      </div>

      {content}

      <div class="posts__card__opcoes">
        <div>
          <a href="#Gostei" onClick={setLike}>
            <ion-icon class="icon" name="heart-outline"></ion-icon>
          </a>
          <a href="#Comentar">
            <ion-icon class="icon" name="chatbubble-outline"></ion-icon>
          </a>
          <a href="#Compartilhar">
            <ion-icon class="icon" name="paper-plane-outline"></ion-icon>
          </a>
        </div>

        <a href="#Marcar">
          <ion-icon class="icon" name="bookmark-outline"></ion-icon>
        </a>
      </div>

      <div class="posts__card__comentarios">
        <img src={props.likes.likedByImg} alt="Logo responde ai" />
        <p>
          Curtido por <a href="#RespondeAi">{props.likes.likedByName}</a> e
          <a href="#Pessoas">outras {numLikes} pessoas</a>
        </p>
      </div>
    </div>
  );
}
