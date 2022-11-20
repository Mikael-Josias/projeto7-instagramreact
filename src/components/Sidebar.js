import React from "react";

export default function Sidebar() {
  let [userImg, setUserImg] = React.useState("./assets/imgs/catanacomics.png");
  let [userName, setUserName] = React.useState("Catana");

  function changeUserName(){
    let newName = prompt("Digite seu novo username:");

    if (newName.trim()) {
      setUserName(newName);
    }else{
      alert("Username inválido!");
    }
  }

  function changeUserImg() {
    let newImg = prompt("Cole a nova URL:");

    if (validateUrl(newImg)) {
      setUserImg(newImg);
    } else {
      alert("URL INVÁLIDA!");
    }
  }

  function validateUrl(url) {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }

  return (
    <div class="sidebar">
      <div class="sidebar__perfil">
        <img src={userImg} onClick={changeUserImg} />
        <div>
          <a href="#CatanaComics">catanacomics</a>
          <p>
            {userName} <ion-icon name="pencil" onClick={changeUserName}></ion-icon>
          </p>
        </div>
      </div>

      <div class="sidebar__sugestoes">
        <div>
          <p>Sugestões para você</p>
          <a>Ver tudo</a>
        </div>

        <div class="sidebar__sugestoes__perfil">
          <div class="sidebar__sugestoes__perfil__detalhes">
            <img
              src="./assets/imgs/badvibesmemes.png"
              alt="Logo Bad vibe memes"
            />
            <div>
              <a href="#Badvibesmeme">bad.vibes.memes</a>
              <p>Segue você</p>
            </div>
          </div>

          <a href="#Seguir">Seguir</a>
        </div>

        <div class="sidebar__sugestoes__perfil">
          <div class="sidebar__sugestoes__perfil__detalhes">
            <img src="./assets/imgs/chibirdart.png" alt="Logo chibirdart" />
            <div>
              <a href="#Badvibesmeme">chibirdart</a>
              <p>Segue você</p>
            </div>
          </div>

          <a href="#Seguir">Seguir</a>
        </div>

        <div class="sidebar__sugestoes__perfil">
          <div class="sidebar__sugestoes__perfil__detalhes">
            <img
              src="./assets/imgs/razoesparaacreditar.png"
              alt="Logo razões para acreditar"
            />
            <div>
              <a href="#Badvibesmeme">razoesparaacreditar</a>
              <p>Novo no Instagram</p>
            </div>
          </div>

          <a href="#Seguir">Seguir</a>
        </div>

        <div class="sidebar__sugestoes__perfil">
          <div class="sidebar__sugestoes__perfil__detalhes">
            <img
              src="./assets/imgs/adorableanimals.png"
              alt="Logo adorable animals"
            />
            <div>
              <a href="#Badvibesmeme">adorable_animals</a>
              <p>Segue você</p>
            </div>
          </div>

          <a href="#Seguir">Seguir</a>
        </div>

        <div class="sidebar__sugestoes__perfil">
          <div class="sidebar__sugestoes__perfil__detalhes">
            <img
              src="./assets/imgs/smallcutecats.png"
              alt="Logo small cute cats"
            />
            <div>
              <a href="#Badvibesmeme">smallcutecats</a>
              <p>Segue você</p>
            </div>
          </div>

          <a href="#Seguir">Seguir</a>
        </div>
      </div>

      <div class="sidebar__sobre">
        <p>
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </p>
        <p>© 2021 INSTAGRAM DO FACEBOOK</p>
      </div>
    </div>
  );
}
