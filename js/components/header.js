class Header extends HTMLElement {
    
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
  
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
            font-size: 1.2rem;
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
          }

          .login-icon {
            margin-right: 5px;
          }
        </style>


        
        <nav>
          <ul>
            <li><a href="#" class="active">Inicio</a></li>
            <li><a href="#">Validación</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Preguntas Frecuentes</a></li>
            <li><a href="#">Contáctenos</a></li>
          </ul>
          <div class="login">
            <span class="login-icon">👤</span>
            <span>Ingreso estudiantes</span>
          </div>
        </nav>
      `;

    }
}
  
  customElements.define("my-header", Header);