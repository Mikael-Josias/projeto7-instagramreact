import reactDom from "react-dom";

import Header from "./components/Header";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import Sidebar from "./components/Sidebar";

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
            <Sidebar/>
        </div>
      </div>
    </>
  );
}

reactDom.render(Cabecalho(), root);
