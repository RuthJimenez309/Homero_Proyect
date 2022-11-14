//JSONS
//Mostrar LogosCards 
var empresas=[ 
    //card Logo 
    { 
      nombreEmpresa:   ' Little Seasar ',  
      urlImage:  '../Frontend/img/Food/1.res.png', 
      calicacion:'3', 
 
    }, 
    //card logo 
    {   
        nombreEmpresa:   ' KFC',  
        urlImage:  '../Frontend/img/Food/2.res.png', 
        calicacion:'4', 
    }, 
    //card Logo 
    {    
        nombreEmpresa:   ' Burger King',  
        urlImage:  '../Frontend/img/Food/3.res.png', 
        calicacion:'5', 
    }, 
 
     //card Logo 
     {   
        nombreEmpresa:   ' Taco Bell',  
        urlImage:  '../Frontend/img/Food/4.res.png', 
        calicacion:'4', 
    }, 
 
    
]; 
//JSON PRODUCTOS
var productos=[ 
    //card Logo 
    { 
      nombreProductos:   ' Whopper ',  
      urlImage:  '../Frontend/img/Food/1.res.png', 
      calicacion:'3', 
 
    }, 
    //card logo 
    {   
        nombreProductos:   ' Sundae',  
        urlImage:  '../Frontend/img/Food/2.res.png', 
        calicacion:'4', 
    }, 
    //card Logo 
    {    
        nombreProductos:   ' Whopper jr',  
        urlImage:  '../Frontend/img/Food/3.res.png', 
        calicacion:'5', 
    }, 
 
     //card Logo 
     {   
        nombreProductos:   ' Burger',  
        urlImage:  '../Frontend/img/Food/4.res.png', 
        calicacion:'4', 
    }, 
 
    
]; 

//Funcion contenidos 
const opcionNav = 1 ; //opcion para ver el contenido despues del inico de sesión
const opcionLanding = 2; 
const opcionModalIni= 3;
const opcionModalReg = 4;
const opcionEmpresas = 5;
const opcionProductos = 6;


function selecionContenido(opcion){
    switch (opcion){
        case opcionNav:
            
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "none";
            document.getElementById('contenido-6').style.display = "none";
            break;
        case opcionLanding:
            document.getElementById('contenido-1').style.display = "none";
            document.getElementById('contenido-2').style.display = "block";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "none";
            document.getElementById('contenido-6').style.display = "none";
            break;
        case opcionModalIni:
            document.getElementById('contenido-1').style.display = "none";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "block";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "none";
            document.getElementById('contenido-6').style.display = "none";
            break;
        case opcionModalReg:
            document.getElementById('contenido-1').style.display = "none";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "block";
            document.getElementById('contenido-5').style.display = "none";
            document.getElementById('contenido-6').style.display = "none";
            break;
        case opcionEmpresas:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "block";
            document.getElementById('contenido-6').style.display = "none";
            break;
        case opcionProductos:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "none";
            document.getElementById('contenido-6').style.display = "block";
            break;
    }
}
/******************************************************************************************** */
//Función para contenido de submenus izq
const opcionNoti = 1;
const opcion2 = 2;
const opcion3 = 3;

function opcionesSubmenu (opcion){
    switch (opcion) {
        case opcionNoti:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-all-principal').style.display = "none";
            document.getElementById('sub-notificacion').style.display = "block";
            document.getElementById('sub-opcion2').style.display = "none";
            break;
        case opcion2:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-all-principal').style.display = "none";
            document.getElementById('sub-notificacion').style.display = "none";
            document.getElementById('sub-opcion2').style.display = "block";
            break;
    
        default:
            break;
    }
}
//Ventana modal formulario inicio sesión
function modalInicio () {
        document.getElementById ('modalInicio').innerHTML += `
        <div class="modal-container ">
    <form id="formularioInicio" class="modal-form" onsubmit="noRecargo(event)">
    <h5>Inicio de sesión</h5>
    <input id="mail" class="mt-2" type="text">
    <input type="password" id="pass" class="mt-2" type="text">
    <button class="btn-modal" onclick="selecionContenido(1),selecionContenido(5), generarEmpresa()">Iniciar sesión</button>
    </form>
  </div> `
}
function modalRegistro () {
    document.getElementById ('modalRegistro').innerHTML += `
    <div class="modal-container ">
<form id="formularioRegistro"  class="modal-form" onsubmit="noRecargo(event)">
<h5>Registro</h5>
<input id="mail" class="mt-2" type="text">
<input type="password" id="pass" class="mt-2" type="text">
<button class="btn-modal" onclick="selecionContenido(1),selecionContenido(5), generarEmpresa()">Iniciar sesión</button>
</form>
</div>
     `
}
//Función para evitar el recargo por defecto del navegador al enviar formulario
function noRecargo(event){
    event.preventDefault();
}
//Genera las categorías 
function generarEmpresa() { 
    document.getElementById('empresa').innerHTML = ''; 
    empresas.forEach(function (emp) { 
        document.getElementById('empresa').innerHTML += `
    <div class="card card-Emp" style="width: 18rem;" onclick="generarProductos(),selecionContenido(6)">
        <h6>${emp.nombreEmpresa}</h6>
        <img src="${emp.urlImage}" class="card-img-top" alt="...">
        <div class="card-body">
         <p class="card-text">Descripción</p>
        </div>
    </div>
           
            `;
    }) 
} 
//Genera los productos de cada empresa
function generarProductos() { 
    document.getElementById('prod').innerHTML = ''; 
    productos.forEach(function (producto) { 
        document.getElementById('prod').innerHTML += `
    <div class="card card-Emp" style="width: 18rem;">
        <h6>${producto.nombreProductos}</h6>
        <img src="${producto.urlImage}" class="card-img-top" alt="...">
        <div class="card-body">
         <p class="card-text">Descripción Productos</p>
        </div>
    </div>
           
            `;
    }) 
} 
//Genera contenido de notificaciones
function GeneraNotificaciones() {
    document.getElementById('sub-notificacion').innerHTML += `
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, sequi.</p>
    
    `; 
}