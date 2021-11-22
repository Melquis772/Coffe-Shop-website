/* Slider de imagenes */

const imagenes = [
    'imagenes/home-img1.jpeg',
    'imagenes/home-img2.jpg',
    'imagenes/home-img3.jpg',
    'imagenes/home-img4.jpg',
    'imagenes/home-img5.jpg',
];

const imagen = document.querySelector(".home__imagen");
let contador = 1;

setInterval(function(){
    imagen.src = imagenes[contador++ % imagenes.length]
}, 4000);


/* MOSTRAR Y OCULTAR EL MENU DE NAVEGACION */
const botonMenu = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu_nav");
let abierto = false;

function mostrarMenu(){
    menu.classList.toggle('menu_navShow');
    menu.style.transition = "transform .4s ease-in-out";
}

botonMenu.addEventListener('click', ()=>{
    mostrarMenu();
    if(document.querySelector('.menu_nav.menu_navShow')){
        abierto = true;
    }else{
        abierto = false;
    }
});

window.addEventListener('click', (e)=>{
    if(abierto){
        if(e.target !== menu && e.target !== botonMenu){
            mostrarMenu();
            abierto = false;
        }
    }
})


/* MOSTRAR Y  OCULTAR CART ITEMS */
const carrito = document.querySelector(".fa-shopping-cart");
const cartItems = document.querySelector(".cart__items");
const cartItemUnit = document.querySelector(".cart__item");
let open = false;

carrito.addEventListener('click', function(){
    cartItems.classList.toggle('cart__itemShow');

    if(document.querySelector(".cart__items.cart__itemShow")){
         open = true;
    }else{
        open = false;
    }
});


window.addEventListener('click', function(event){
    if(open == true){
        if(event.target !== cartItems && event.target !== carrito && event.target !== cartItemUnit){
            cartItems.classList.toggle('cart__itemShow');
            open = false;
        }
    }
});


/* MOSTRAR Y OCULTAR SEARCHBAR */
const searchIcon = document.querySelector(".search-main");
const searchBar =  document.querySelector(".searchbar__inputbox");
const searchBarInput =  document.querySelector(".searchbar__inputbox__input");
let apertura = false;

searchIcon.addEventListener('click', function(){
    searchBar.classList.toggle('searchbar__inputboxShow');

if(document.querySelector(".searchbar__inputbox.searchbar__inputboxShow")){
    apertura = true;
}else{
    apertura = false;
}
});

window.addEventListener('click', function(event){
    if(apertura == true){
        if(event.target !== (searchBar, searchIcon) && event.target !== searchBarInput){
            searchBar.classList.toggle('searchbar__inputboxShow');
            apertura = false;
        }
    }
})

