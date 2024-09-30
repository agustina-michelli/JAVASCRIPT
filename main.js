
//primero: quiero que el usuario ingrese su nombre y su documento 
//segundo: que lo envie a una pagina donde pueda ver los servicios con sus precios
// tercero: que clickee los servicios y haga una suma de ellos 


function saveUserData(name, document) {
    localStorage.setItem('name', name);
    localStorage.setItem('document', document);
}

function loadUserData() {
    const name = localStorage.getItem('name');
    const document = localStorage.getItem('document');
}

const servicios = [
    {
        nombre: "manicuria semipermanente",
        precio:  10000 ,
        id: "manicuria semipermanente"
    },
    {   nombre: "gelificadas",
        precio: 15000 ,
        id: "gelificadas"
    },
    {   nombre: "manicuria",
        precio: 15000 ,
        id: "soft gel"
    },
    {   nombre: "belleza de pies",
        precio: 10000 ,
        id: "belleza de pies",
    },
    {   nombre: "tratamientos faciales",
        precio: 20000 ,
        id: "tratamiento faciales"
    },
    {   nombre: "laminado de cejas",
        precio: 10000 ,
        id: "laminado de cejas"
    },
    {   nombre: "perfilado de cejas",
        precio: 8000 ,
        id: "perfilado de cejas"
    }
];

const listaDePrecios = document.getElementById("lista-de-precios");
servicios.forEach(servicio => {
    let contenedor = document.createElement("div");
    contenedor.className = "card"; 

    contenedor.innerHTML = `
        <h3>${servicio.nombre}</h3>
        <p>Precio: $${servicio.precio}</p>
        <button class="agregar-servicio" data-id="${servicio.id}">Agregar servicio</button>
    `;

    
    listaDePrecios.appendChild(contenedor);
});

window.onload = function() {
        inicializarBotones();
};

function inicializarBotones() {
    const botonesAgregar = document.querySelectorAll('.agregarservicio');
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarServicio);
    });
}

function agregarServicio(event) {
    const servicioElement = event.target.closest('.servicios');
    const id = servicioElement.getAttribute('data-id');
    const nombre = servicioElement.getAttribute('data-name');
    const precio = parseFloat(servicioElement.getAttribute('data-precio'));


    const servicioExistente = carrito.find(servicio => servicio.id === id);

    if (!servicioExistente) {
        
        carrito.push({ id, nombre, precio });
        actualizarTotal();
        mostrarCarrito();
    }
}
function actualizarTotal() {
    let total = 0;

    carrito.forEach(servicio => {
        total += servicio.precio;
    });

    document.getElementById('totaldeServicios').textContent = total;
}


function eliminarServicio(id) {
    carrito = carrito.filter(servicio => servicio.id !== id);
    mostrarCarrito();
}