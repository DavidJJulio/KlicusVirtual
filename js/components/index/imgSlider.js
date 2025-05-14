class Slider extends HTMLElement {
    
    constructor() {
      super();
      this.attachShadow({ mode: "open" });







      // HTML && CSS DEL WEBCOMPONENT
  
      this.shadowRoot.innerHTML = /*html*/ `








        <style>


            :host {
                display: block;
                width: 100%;
                height: 40%;
                font-family: Arial, sans-serif;
            }

            .slider {
            height: 100%;
            width: 100%;
            overflow: hidden;
            }

            .slides {
            display: flex;
            transition: transform 0.5s ease-in-out;
            width: 100%;
            height: 100%;
            }

            .slides img {
            width: 100%;
            flex-shrink: 0;
            }

            .nav-buttons {
                position: absolute;
                top: 50%;
                width: 100%;
                display: flex;
                justify-content: space-between;
                transform: translateY(-50%);
                padding: 0 10px;
                }

                .nav-buttons button {
                background: transparent;
                color: white;
                border: none;
                padding: 10px;
                cursor: pointer;
                border-radius: 50%;
                font-size: 18px;
                transition: background 0.3s;
                }

                .nav-buttons button:hover {
                background: rgba(0, 0, 0, 0.8);
                }

          
        </style>










        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        

        <div class="slider">
            <div class="slides" id="slideContainer">
            <img src="https://picsum.photos/id/1018/800/400" alt="Imagen 1">
            <img src="https://picsum.photos/id/1015/800/400" alt="Imagen 2">
            <img src="https://picsum.photos/id/1016/800/400" alt="Imagen 3">
            </div>
        
            <div class="nav-buttons">
                <button id="prev">❮</button>
                <button id="next">❯</button>
            </div>
        
        </div>
      `;







      // FUNCIONALIDAD DEL BOTON DEL MENU

        const slideContainer = this.shadowRoot.getElementById('slideContainer');
        const totalSlides = slideContainer.children.length;
        let currentIndex = 0;

        function showSlide(index) {
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        slideContainer.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
        }

        function nextSlide() {
        showSlide(currentIndex + 1);
        }

        function prevSlide() {
        showSlide(currentIndex - 1);
        }

        const prev = this.shadowRoot.getElementById("prev")
        const next = this.shadowRoot.getElementById("next")

        prev.addEventListener('click', () => {

            prevSlide()

        })

        next.addEventListener('click', () => {

            nextSlide()

        })

    }

    
}
  
  customElements.define("my-img_slider", Slider);