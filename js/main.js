import "./components/general/header.js"
import "./components/index/imgSlider.js"

console.log("Hola");

const llamada_accion = document.querySelector('main .section_llamada_accion')
const Header = document.querySelector('header')
Header.innerHTML = `<my-header></my-header>`
llamada_accion.innerHTML = `<my-img_slider></my-img_slider>`