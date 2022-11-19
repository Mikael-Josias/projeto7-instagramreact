import reactDom from "react-dom";

import Header from "./components/Header";
import Stories from "./components/Stories";
import Posts from "./components/Posts";

const root = document.querySelector(".root");

function Cabecalho() {
  return (
    <>
      <Header />
      <div className="conteudo">
        <div className="conteudo__principal">
          <Stories />
          <Posts />
        </div>
        <div className="conteudo__secundario">

        </div>
      </div>
    </>
  );
}

reactDom.render(Cabecalho(), root);
