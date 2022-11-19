export default function Posts(){
    return (
        <div class="posts">
          <div class="posts__card">
            <div class="posts__card__cabecalho">
              <div>
                <img src="./assets/imgs/meowed.png" alt="Logo meowed" />
                <a href="#Meowed">meowed</a>
              </div>

              <ion-icon class="icon" name="ellipsis-horizontal"></ion-icon>
            </div>

            <img
              src="./assets/imgs/gato-telefone.png"
              alt="Gato branco usando um celular"
            />

            <div class="posts__card__opcoes">
              <div>
                <a href="#Gostei"
                  ><ion-icon class="icon" name="heart-outline"></ion-icon
                ></a>
                <a href="#Comentar"
                  ><ion-icon class="icon" name="chatbubble-outline"></ion-icon
                ></a>
                <a href="#Compartilhar"
                  ><ion-icon class="icon" name="paper-plane-outline"></ion-icon
                ></a>
              </div>

              <a href="#Marcar"
                ><ion-icon class="icon" name="bookmark-outline"></ion-icon
              ></a>
            </div>

            <div class="posts__card__comentarios">
              <img src="./assets/imgs/respondeai.png" alt="Logo responde ai" />
              <p>
                Curtido por <a href="#RespondeAi">respondeai</a> e
                <a href="#Pessoas">outras 101.523 pessoas</a>
              </p>
            </div>
          </div>

          <div class="posts__card">
            <div class="posts__card__cabecalho">
              <div>
                <img src="./assets/imgs/barked.png" alt="Logo barked" />
                <a href="#Meowed">barked</a>
              </div>

              <ion-icon class="icon" name="ellipsis-horizontal"></ion-icon>
            </div>

            <img src="./assets/imgs/dog.png" alt="Cachorro filhote dormindo" />

            <div class="posts__card__opcoes">
              <div>
                <a href="#Gostei"
                  ><ion-icon class="icon" name="heart-outline"></ion-icon
                ></a>
                <a href="#Comentar"
                  ><ion-icon class="icon" name="chatbubble-outline"></ion-icon
                ></a>
                <a href="#Compartilhar"
                  ><ion-icon class="icon" name="paper-plane-outline"></ion-icon
                ></a>
              </div>

              <a href="#Marcar"
                ><ion-icon class="icon" name="bookmark-outline"></ion-icon
              ></a>
            </div>

            <div class="posts__card__comentarios">
              <img
                src="./assets/imgs/adorableanimals.png"
                alt="Logo adorable animals"
              />
              <p>
                Curtido por <a href="#Adorable_Animals">adorable_animals</a> e
                <a href="#Pessoas">outras 99.159 pessoas</a>
              </p>
            </div>
          </div>

          <div class="posts__card">
            <div class="posts__card__cabecalho">
              <div>
                <img
                  src="./assets/imgs/adorableanimals.png"
                  alt="Logo Adorable Animals"
                />
                <a href="#Adorable_Animals">adorable_animals</a>
              </div>

              <ion-icon class="icon" name="ellipsis-horizontal"></ion-icon>
            </div>

            <video controls autoplay muted loop>
              <source src="./assets/imgs/video.mp4" type="video/mp4" />
              <source src="./assets/imgs/video.ogv" type="video/ogv" />
            </video>

            <div class="posts__card__opcoes">
              <div>
                <a href="#Gostei"
                  ><ion-icon class="icon" name="heart-outline"></ion-icon
                ></a>
                <a href="#Comentar"
                  ><ion-icon class="icon" name="chatbubble-outline"></ion-icon
                ></a>
                <a href="#Compartilhar"
                  ><ion-icon class="icon" name="paper-plane-outline"></ion-icon
                ></a>
              </div>

              <a href="#Marcar"
                ><ion-icon class="icon" name="bookmark-outline"></ion-icon
              ></a>
            </div>

            <div class="posts__card__comentarios">
              <img src="./assets/imgs/barked.png" alt="Logo adorable animals" />
              <p>
                Curtido por <a href="#Barked">barked</a> e
                <a href="#Pessoas">outras 99.159 pessoas</a>
              </p>
            </div>
          </div>
        </div>
    );
}