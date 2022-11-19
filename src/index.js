import reactDom from "react-dom";

import Header from "./components/Header";
import Stories from "./components/Stories";

const root = document.querySelector(".root");

function Cabecalho() {
  return (
    <>
      <Header />
      <div className="conteudo">
        <Stories />
      </div>
    </>
  );
}

reactDom.render(Cabecalho(), root);
