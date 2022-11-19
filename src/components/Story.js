export default function Story(props) {
  return (
    <div class="stories__card">
      <a href="#Storie">
        <div>
          <img class="stories__card__imagem" src={props.img} alt={props.name}/>
        
        </div>
        
        <p class="stories__card__nome">{props.name}</p>
      </a>
    </div>
  );
}
