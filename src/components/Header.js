export default function Headers(){
    return (
    <header class="header">
      <div>
        <div class="header__logo">
          <a href="#Instagram"
            ><ion-icon class="icon" name="logo-instagram"></ion-icon
          ></a>
          <div class="linha-vertical"></div>
          <a href="#Instagram"
            ><img src="./assets/imgs/logo.png" alt="Logo Instagram"
          /></a>
        </div>

        <div>
          <input
            class="header__search"
            type="text"
            placeholder="Pesquisar"
          />
        </div>

        <div class="header__options">
          <a href="#Compartilhar"
            ><ion-icon class="icon" name="paper-plane-outline"></ion-icon
          ></a>
          <a href="#Explorar"
            ><ion-icon class="icon" name="compass-outline"></ion-icon
          ></a>
          <a href="#Amizades"
            ><ion-icon class="icon" name="heart-outline"></ion-icon
          ></a>
          <a href="#Perfil">
            <ion-icon class="icon" name="person-outline"></ion-icon
          ></a>
        </div>
      </div>
    </header>
    );
}