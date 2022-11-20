import Sugestao from "./Sugestao";

export default function Sugestoes() {
  let sugestoes = [
    { img: "./assets/imgs/badvibesmemes.png", name: "bad.vibes.memes", follow: false},
    { img: "./assets/imgs/chibirdart.png", name: "chibirdart", follow: false},
    { img: "./assets/imgs/razoesparaacreditar.png", name: "razoesparaacreditar", follow: false},
    { img: "./assets/imgs/adorableanimals.png", name: "adorable_animals", follow: false},
    { img: "./assets/imgs/smallcutecats.png", name: "smallcutecats", follow: false},
  ];

  return (
    <div class="sidebar__sugestoes">
      <div>
        <p>Sugestões para você</p>
        <a>Ver tudo</a>
      </div>

      {sugestoes.map(s => <Sugestao img={s.img} name={s.name} />)}

    </div>
  );
}
