class Header extends HTMLElement {
    
    constructor() {
      super();
      this.attachShadow({ mode: "open" });







      // HTML && CSS DEL WEBCOMPONENT
  
      this.shadowRoot.innerHTML = /*html*/ `








        <style>

          :host {
            display: block;
            width: 100%;
            height: 100%;
            font-family: Arial, sans-serif;
          }

          nav {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .menu {

            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

          }
          
          ul {
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8%;
            padding: 0;
            margin: 0;
          }

          a {
            text-decoration: none;
            color: black;
            font-weight: bold;
            font-size: var(--font-size-subtitle);
            white-space: nowrap;
          }

          a:hover,
          .active {
            color: var(--color-yellow);
            position: relative;
            border-bottom: 3px solid var(--color-yellow);
            transition: color .3s ease
          }

          .login {
            position: absolute;
            top: 0;
            right: 0;
            margin: 2%;
            display: flex;
            align-items: center;
            color: black;
            font-weight: bold;
            font-size: var(--font-size-subtitle)
          }

          .login-icon {
            margin-right: 5px;
          }

          .menu i {

          display: none;

          }

          @media (max-width: 1024px) {

          .menu i {

              display: block;
              position: absolute;
              top: 0;
              right: 0;
              margin: 4%;
              width: auto;
              height: auto;
              font-size: var(--font-size-subtitle);

          }

          .menu i:hover {

            font-size: var(--font-size-title);
            font-weight: bold;

          }

          .container {

            position: absolute;
            top: 0;
            right: 0;
            let: 0;
            width: 100%;
            height: 30vh;
            background-color: white;
            display: none;
            flex-direction: column;
            align-items: center;
            justify-content: center;

          }

          .login {

            display: none;

          }

          ul {

            flex-direction: column;
            gap: 8px;

          }

          }

          
        </style>










        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        
        <nav>
          <div class="menu">

          <div class = "container">

            <ul>
              <li><a href="#" class="active">Inicio</a></li>
              <li><a href="#">Validación</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Preguntas Frecuentes</a></li>
              <li><a href="#">Contáctenos</a></li>
            </ul>

            <div class="login">
              <span class="login-icon">👤</span>
              <span class="ingreso">Ingreso estudiantes</span>
            </div>

          </div>


          <i class='bx bx-menu'></i>

          </div>
          
        </nav>
      `;







      // FUNCIONALIDAD DEL BOTON DEL MENU

      let menuButton = this.shadowRoot.querySelector(".menu i")
      menuButton.addEventListener('click', () => {

        let container = this.shadowRoot.querySelector('.container')

        if( container.style.display != "flex" ) {
          container.style.display = "flex"
        } else {
          container.style.display = "none"
        }

      })

      // FUNCIONALIDAD DE EL HEADER

      let links = this.shadowRoot.querySelectorAll('a')
      links.forEach(val => {
        
        val.addEventListener('click', () => {

          links.forEach(val2 => {
            if(val2.className == "active"){
              val2.classList.remove("active")
            }})
          
          val.className = "active"

        })

      })


    }

    
}
  
  customElements.define("my-header", Header);