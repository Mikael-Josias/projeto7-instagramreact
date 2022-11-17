import reactDom from "react-dom";

import Header from "./components/Header";

const root = document.querySelector(".root");

function Cabecalho(){
    return (
        <Header/>
    );
}

reactDom.render(Cabecalho(), root);