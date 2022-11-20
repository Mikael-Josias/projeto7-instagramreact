import React from "react";

export default function Sugestao(props) {

    let [follow, setFollow] = React.useState(props.follow);

  return (
    <div class="sidebar__sugestoes__perfil">
      <div class="sidebar__sugestoes__perfil__detalhes">
        <img src={props.img} alt={"Logo " + props.name} />
        <div>
          <a href="#Badvibesmeme">{props.name}</a>
          <p>Segue você</p>
        </div>
      </div>

      <a href="#Seguir">{!follow? "seguir" : "parar de seguir"}</a>
    </div>
  );
}
