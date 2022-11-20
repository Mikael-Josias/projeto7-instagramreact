import React from "react";
import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

export default function Sidebar() {

  return (
    <div class="sidebar">
      <Usuario/>

      <Sugestoes/>

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
