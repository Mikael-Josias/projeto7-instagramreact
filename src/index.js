import reactDom from "react-dom";

const root = document.querySelector(".root");

function Cabecalho(){
    return (
        <header>
            <h1>Olá Mundo</h1>
        </header>
    );
}

reactDom.render(Cabecalho(), root);