// Array para almacenar los productos del carrito
let carrito = [];

// Cargar carrito desde localStorage al iniciar
function cargarCarritoGuardado() {
    const carritoGuardado = localStorage.getItem('carritoAthletic');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    }
}

// Guardar carrito en localStorage
function guardarCarrito() {
    localStorage.setItem('carritoAthletic', JSON.stringify(carrito));
}

// Datos de productos
const productos = [
    {
        id: 1,
        nombre: "Bolso de Tenis Wilson Clash V3 Super Tour 3PK",
        precio: "$532.990 COP",
        imagen: "/img/b1.png",
        descripcion: "Descubre el compañero perfecto para los apasionados del tenis que buscan estilo y funcionalidad en un solo accesorio. "
    },
    {
        id: 2,
        nombre: "Raqueta De Tenis Wilson Ultra 100L V5",
        precio: "$1.266.990 COP",
        imagen: "/img/r1.jpg",
        descripcion: "Descubre la nueva Ultra 100L V5, la raqueta que redefine el juego y se convierte en la opción ideal para los jugadores que buscan un equilibrio perfecto entre jugabilidad y potencia."
    },
    {
        id: 3,
        nombre: "Raqueta de Tenis Wilson Tour Slam Lite",
        precio: "$219.000 COP",
        imagen: "/img/r2.jpg", 
        descripcion: "La Raqueta de Tenis Wilson Tour Slam Lite es una excelente opción diseñada para jugadores recreativos y principiantes que buscan una raqueta ligera, fácil de manejar y que ofrezca buena potencia."
    },
    {
        id: 4,
        nombre: "Raqueta de Tenis Wilson Matchpoint XL Sin CVR",
        precio: "$319.990 COP",
        imagen: "/img/r3.jpg",
        descripcion: "La Wilson Matchpoint XL es una raqueta ideal para jugadores principiantes y recreativos que buscan maximizar la potencia y la facilidad de golpeo"
    },
    {
        id: 5,
        nombre: "Raqueta de Tenis Wilson Hyper Hammer Legacy Mid",
        precio: "$627.990 ",
        imagen: "/img/r5.jpg",
        descripcion: "La Wilson Hyper Hammer Legacy Mid es una raqueta de tenis que combina potencia explosiva y excelente maniobrabilidad, ideal para jugadores de nivel intermedio a avanzado que buscan un rendimiento equilibrado en la cancha."
    },
    {
        id: 6,
        nombre: "Raqueta de Tenis Wilson Clash 100L V3.0",
        precio: "$1.332.990 COP",
        imagen: "/img/r6.png",
        descripcion: "Diseñada para aquellos que buscan una experiencia de juego inigualable. Esta raqueta combina tecnología avanzada con un diseño elegante, ofreciendo comodidad y rendimiento en cada golpe."
    },
    {
        id: 7,
        nombre: "Raqueta de Tenis Wilson Clash 100UL V3.0",
        precio: "$1.277.990 COP",
        imagen: "/img/r7.jpg",
        descripcion: "Descubre la Raqueta de Tenis Wilson Clash 100UL V3.0, la elección perfecta para jugadores jóvenes en desarrollo y aquellos con antecedentes de lesiones en el brazo o el hombro."
    },
    {
        id: 8,
        nombre: "Guantes de Boxeo",
        precio: "$39.99",
        imagen: "https://images.unsplash.com/photo-1605639743852-71e10ed4b0ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        descripcion: "Guantes de boxeo profesionales con excelente protección."
    },
    {
        id: 20,
        nombre: "papitas",
        precio: "$39.99999 COP",
        imagen: "/img/nomrbe",
        descripcion: "Gsadasdads."

    }
];


// Productos favoritos para el carrusel
const productosFavoritos = [
    {
        id: 80,
        nombre: "Bolso de Tenis Wilson Clash V3 Super Tour 6PK",
        precio: "$636.990 COP",
        imagen: "/img/a1.jpg",
        descripcion: "Descubre al compañero perfecto para los apasionados del tenis que buscan estilo y funcionalidad."
    },
    {
        id: 81,
        nombre: "Bolso de Tenis Wilson Blade V9 Super Tour 9PK",
        precio: "$799.990 COP",
        imagen: "/img/a2.jpg",
        descripcion: "Descubre la combinación perfecta de estilo y funcionalidad con este bolso."
    },
    {
        id: 82,
        nombre: "Bolso de Tenis Wilson Shift Super Tour 9PK",
        precio: "$799.990 COP",
        imagen: "/img/a3.jpg",
        descripcion: "Diseñado especialmente para el tenista de alto nivel que busca rendimiento y estilo en cada partido."
    },
    {
        id: 83,
        nombre: "Morral de Tenis Wilson Roland Garros Paris Team 2PK",
        precio: "$345.990 COP",
        imagen: "/img/a4.jpg",
        descripcion: "Descubre la combinación perfecta de elegancia y funcionalidad para los amantes del tenis."
    },
    {
        id: 84,
        nombre: "Morral de Tenis Wilson Team 2PK",
        precio: "$389.990 COP",
        imagen: "/img/a5.jpg",
        descripcion: "Descubre la comodidad y funcionalidad de este morral, diseñado especialmente para los apasionados del tenis."
    },
    {
        id: 85,
        nombre: "Morral de Tenis Wilson Shift V1 Super Tour 2PK",
        precio: "$533.990 COP",
        imagen: "/img/a6.jpg",
        descripcion: "Descubre la mochila perfecta para los amantes del tenis que buscan estilo y funcionalidad."
    },
 
];


// Función para crear template de tarjeta de producto
function crearTemplateProducto(producto) {
    return `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="card h-100 shadow-sm">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text flex-grow-1">${producto.descripcion}</p>
                    <div class="mt-auto">
                        <p class="card-price mb-2"><strong>${producto.precio}</strong></p>
                        <button class="btn hckBtn btn-outline-secondary w-100">Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}


// Función para crear template de tarjeta favorita
function crearTemplateFavorito(producto) {
    return `
        <div class="col-md-4 mb-4">
            <div class="card favorito-card h-100 shadow">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text flex-grow-1">${producto.descripcion}</p>
                    <div class="mt-auto">
                        <p class="card-price mb-2"><strong>${producto.precio}</strong></p>
                        <button class="btn hckBtn btn-outline-secondary w-100">Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}


// Función para renderizar productos principales
function renderizarProductos() {
    const container = document.querySelector('#productos-section .row');
    let productosHTML = '';
   
    productos.forEach(producto => {
        productosHTML += crearTemplateProducto(producto);
    });
   
    container.innerHTML = productosHTML;
}


// Función para renderizar carrusel de favoritos
function renderizarFavoritos() {
    const carouselInner = document.querySelector('#favoritosCarousel .carousel-inner');
    let slidesHTML = '';
   
    // Dividir productos favoritos en grupos de 3 para cada slide
    for (let i = 0; i < productosFavoritos.length; i += 3) {
        const isActive = i === 0 ? 'active' : '';
        const grupo = productosFavoritos.slice(i, i + 3);
       
        slidesHTML += `
            <div class="carousel-item ${isActive}">
                <div class="container">
                    <div class="row">
                        ${grupo.map(producto => crearTemplateFavorito(producto)).join('')}
                    </div>
                </div>
            </div>
        `;
    }
   
    carouselInner.innerHTML = slidesHTML;
}


// Función para abrir/cerrar el carrito
function hckCarrito() {
    const div = document.getElementById("hckAside");
    if (!div) return;


    const display = window.getComputedStyle(div).display;
    if (display === "none") {
        div.style.display = "block";
        mostrarCarrito();
    } else {
        div.style.display = "none";
    }
}


// Función para agregar producto al carrito
function agregarAlCarrito(event) {
    // Prevenir el comportamiento por defecto del botón
    event.preventDefault();
   
    // Obtener la tarjeta del producto (elemento padre)
    const tarjeta = event.target.closest('.card');
   
    // Extraer información del producto
    const imagen = tarjeta.querySelector('.card-img-top').src;
    const nombre = tarjeta.querySelector('.card-title').textContent;
    const precio = tarjeta.querySelector('.card-price strong').textContent;
   
    // Crear objeto producto
    const producto = {
        id: Date.now(), // ID único basado en timestamp
        imagen: imagen,
        nombre: nombre,
        precio: precio
    };
   
    // Agregar al carrito
    carrito.push(producto);
    guardarCarrito();
   
    // Abrir la barra lateral del carrito
    const aside = document.getElementById("hckAside");
    aside.style.display = "block";
   
    // Mostrar productos en el carrito
    mostrarCarrito();
}


// Función para mostrar productos en el carrito
function mostrarCarrito() {
    const aside = document.getElementById("hckAside");
   
    if (carrito.length === 0) {
        aside.innerHTML = `
            <div class="carrito-vacio">
                <h4>Tu Carrito</h4>
                <p>No hay productos en el carrito</p>
                <button onclick="hckCarrito()" class="btn btn-secondary">Cerrar</button>
            </div>
        `;
        return;
    }
   
    // Crear HTML del carrito
    let carritoHTML = `
        <div class="carrito-header">
            <h4>Tu Carrito (${carrito.length})</h4>
            <button onclick="hckCarrito()" class="btn-cerrar">×</button>
        </div>
        <div class="carrito-productos">
    `;
   
    // Agregar cada producto del carrito
    carrito.forEach((producto, index) => {
        carritoHTML += `
            <div class="carrito-item">
                <div class="carrito-producto">
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="carrito-img">
                    <div class="carrito-info">
                        <h6 class="carrito-nombre">${producto.nombre}</h6>
                        <p class="carrito-precio">${producto.precio}</p>
                    </div>
                </div>
                <button onclick="eliminarDelCarrito(${index})" class="btn btn-danger btn-sm w-100 mt-2">Eliminar</button>
            </div>
        `;
    });
   
    carritoHTML += `
        </div>
        <div class="carrito-footer">
            <button onclick="vaciarCarrito()" class="btn btn-outline-danger btn-sm">Vaciar Carrito</button>
            <button class="btn btn-sm">Proceder al Pago</button>
        </div>
    `;
   
    aside.innerHTML = carritoHTML;
}


// Función para eliminar producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    guardarCarrito();
    mostrarCarrito();
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    guardarCarrito();
    mostrarCarrito();
}


// Agregar event listeners cuando la página carga
document.addEventListener('DOMContentLoaded', function() {
    // Cargar carrito guardado
    cargarCarritoGuardado();
    
    // Renderizar productos y favoritos
    renderizarProductos();
    renderizarFavoritos();
    
    // Mostrar productos del carrito si hay alguno
    if (carrito.length > 0) {
        mostrarCarrito();
    }
   
    // Usar delegación de eventos para los botones de agregar al carrito
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('hckBtn') &&
            event.target.textContent.includes('Agregar al Carrito')) {
            agregarAlCarrito(event);
        }
    });
});

let productosMostrados = 0;
const productosPorPagina = 4;

function renderizarProductosVerMas() {
    const contenedor = document.querySelector('#productos-section .row');
    contenedor.innerHTML = '';
    for (let i = 0; i < productosMostrados; i++) {
        if (productos[i]) {
            const prod = productos[i];
            const col = document.createElement('div');
            col.className = 'col-lg-3 col-md-6 mb-4';
            col.innerHTML = `
                <div class="card h-100 shadow-sm">
                    <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${prod.nombre}</h5>
                        <p class="card-text flex-grow-1">${prod.descripcion}</p>
                        <div class="mt-auto">
                            <p class="card-price mb-2"><strong>${prod.precio}</strong></p>
                            <button class="btn btn-primary w-100">Agregar al Carrito</button>
                        </div>
                    </div>
                </div>
            `;
            contenedor.appendChild(col);
        }
    }
    mostrarBotonVerMas();
}

function mostrarBotonVerMas() {
    let btn = document.getElementById('btnVerMas');
    if (!btn) {
        btn = document.createElement('button');
        btn.id = 'btnVerMas';
        btn.className = 'btn btn-secondary d-block mx-auto mt-4';
        btn.textContent = 'Ver más';
        btn.onclick = verMasProductos;
        document.querySelector('#productos-section .container').appendChild(btn);
    }
    if (productosMostrados >= productos.length) {
        btn.style.display = 'none';
    } else {
        btn.style.display = 'block';
    }
}

function verMasProductos() {
    productosMostrados += productosPorPagina;
    if (productosMostrados > productos.length) productosMostrados = productos.length;
    renderizarProductos();
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    productosMostrados = Math.min(productosPorPagina, productos.length);
    renderizarProductosVerMas();
});