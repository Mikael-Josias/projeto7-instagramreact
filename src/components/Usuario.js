import React from "react";

export default function Usuario(props) {
  let [userImg, setUserImg] = React.useState("./assets/imgs/catanacomics.png");
  let [userName, setUserName] = React.useState("Catana");

  function changeUserName() {
    let newName = prompt("Digite seu novo username:");

    if (newName.trim()) {
      setUserName(newName);
    } else {
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
    <div class="sidebar__perfil" data-test="user">
      <img src={userImg} onClick={changeUserImg} data-test="profile-image"/>
      <div>
        <a href="#CatanaComics">catanacomics</a>
        <p data-test="name">
          {userName}{" "}
          <ion-icon name="pencil" onClick={changeUserName} data-test="edit-name"></ion-icon>
        </p>
      </div>
    </div>
  );
}
