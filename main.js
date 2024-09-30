
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
        id: "manicuria semipermanente",
        precio: 10000
    },
    {
        id: "gelificadas",
        precio: 15000
    },
    {
        id: "soft gel",
        precio: 15000
    },
    {
        id: "belleza de pies",
        precio: 10000
    },
    {
        id: "tratamiento faciales",
        precio: 20000
    },
    {
        id: "laminado de cejas",
        precio: 10000
    },
    {
        id: "perfilado de cejas",
        precio: 8000
    }
];

servicios.forEach((element)=>console.log(element));

fuction actualizarCarrito(){
    const servicioDiv = document.createElement('div')
    servicioDiv.innerHTML = `
        <h2>${servicio.manicuriasermipermanete}</h2>
        <p>precio: $$ {servicio.10000}</p>
        <button class= "agregar-servicio" data-id"${servicio.manicuriasermipermanete}>Agregar servicio</button>
        `;

}

