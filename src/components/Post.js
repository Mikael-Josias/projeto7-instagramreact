export default function Post(props) {
  let content = "";

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
          <a href="#Gostei">
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
          <a href="#Pessoas">outras {props.likes.numLikes} pessoas</a>
        </p>
      </div>
    </div>
  );
}
