import Story from "./Story";

export default function Stories() {

  let stories = [
    {name: "9gag", img: "./assets/imgs/9gag.png"},
    {name: "meowed", img: "./assets/imgs/meowed.png"},
    {name: "barked", img: "./assets/imgs/barked.png"},
    {name: "nathanwpyle...", img: "./assets/imgs/nathanwpylestrangeplanet.png"},
    {name: "wawawiwac...", img: "./assets/imgs/wawawiwa.png"},
    {name: "respondeai", img: "./assets/imgs/respondeai.png"},
    {name: "filomoderna", img: "./assets/imgs/filomoderna.jpg"},
    {name: "memeriago.", img: "./assets/imgs/memeriagourmet.png"},
  ];

  return (
    <div class="stories">
      
      {stories.map(s => <Story name={s.name} img={s.img} />)}

      <div class="stories__proximo">
        <a href="#ProximosStories">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </a>
      </div>
    </div>
  );
}
