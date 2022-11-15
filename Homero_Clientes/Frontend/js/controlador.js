//JSONS


//Mostrar LogosCards 
var empresas=[ 
    //card Logo 
    { 
      nombreEmpresa:   ' Little Seasar ',  
      urlImage:  '../Homero_Clientes/Frontend/img/empresas/1.res.png', 
      calicacion:'3', 
 
    }, 
    //card logo 
    {   
        nombreEmpresa:   ' KFC',  
        urlImage:  '../Homero_Clientes/Frontend/img/empresas/2.res.png', 
        calicacion:'4', 
    }, 
    

     //card Logo 
     {   
        nombreEmpresa:   ' Taco Bell',  
        urlImage:  '../Homero_Clientes/Frontend/img/empresas/4.res.png', 
        calicacion:'4', 
    }, 

    //card Logo 
    {    
        nombreEmpresa:   ' Burger King',  
        urlImage:  '../Homero_Clientes/Frontend/img/empresas/3.res.png', 
        calicacion:'5', 
    }, 
 
    
]; 
//JSON PRODUCTOS
var productos=[ 
    //card productos
    { 
      nombreProductos:   ' Pizza de Jamon ',  
      urlImage:  '../Homero_Clientes/Frontend/img/productos/3.food.png', 
      precio:'', 
 
    }, 
    //card productos 
    {   
        nombreProductos:   ' Sundae',  
        urlImage:  '../Homero_Clientes/Frontend/img/productos/2.sundae.png', 
        precio:'', 
        descricion:'Helado de crema .', 
    }, 
    //card productos 
    {    
        nombreProductos:   ' Whopper jr',  
        urlImage:  '../Homero_Clientes/Frontend/img/productos/1.king.png', 
        precio:'', 
    }, 
 
     //card productos
     {   
        nombreProductos:   ' Wopper',  
        detalle:  '../Homero_Clientes/Frontend/img/productos/3.whopper.png', 
        precio:'', 
    }, 
 
    
]; 

var detallesproductos=[ 
    //card detallesproductos
    { 
      nombreProductos:   ' Pizza de Jamon ',  
     detalle:  ' Pizza gigante de jamon y queso', 
      precio:'120.oo', 
 
    }, 
    //card detallesproductos
    {   
        nombreProductos:   ' Sundae',  
        detalle:  'Helado de crema con salsa de fresa', 
        precio:'60.00', 
    
    }, 
    //card detallesproductos
    {    
        nombreProductos:   ' Whopper jr',  
        urlImage:  '', 
        precio:'180.00', 
    }, 
 
     //card detallesproductos
     {   
        nombreProductos:   ' Wopper',  
        detalle:  '', 
        precio:'', 
    }, 
 
    
]; 

//Funcion contenidos 
const opcionNav = 1 ; //opcion para ver el contenido despues del inico de sesión
const opcionLanding = 2;  //Landing
const opcionModalIni= 3;//Modal inicio
const opcionModalReg = 4;//Modal Registro
const opcionEmpresas = 5;//Empresa
const opcionProductos = 6; //Productos
const opcionDetalleProducto = 7; // Detalle producto
const opcionPagos = 8; // Pago


function selecionContenido(opcion){
    switch (opcion){
        case opcionNav:
            
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "none";
            document.getElementById('contenido-6').style.display = "none";
            document.getElementById('contenido-7').style.display = "none";
            document.getElementById('contenido-8').style.display = "none";
            break;
        case opcionLanding:
            document.getElementById('contenido-1').style.display = "none";
            document.getElementById('contenido-2').style.display = "block";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "none";
            document.getElementById('contenido-6').style.display = "none";
            document.getElementById('contenido-7').style.display = "none";
            document.getElementById('contenido-8').style.display = "none";
            break;
        case opcionModalIni:
            document.getElementById('contenido-1').style.display = "none";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "block";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "none";
            document.getElementById('contenido-6').style.display = "none";
            document.getElementById('contenido-7').style.display = "none";
            document.getElementById('contenido-8').style.display = "none";
            break;
        case opcionModalReg:
            document.getElementById('contenido-1').style.display = "none";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "block";
            document.getElementById('contenido-5').style.display = "none";
            document.getElementById('contenido-6').style.display = "none";
            document.getElementById('contenido-7').style.display = "none";
            document.getElementById('contenido-8').style.display = "none";
            break;
        case opcionEmpresas:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "block";
            document.getElementById('contenido-6').style.display = "none";
            document.getElementById('contenido-7').style.display = "none";
            break;
        case opcionProductos:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "none";
            document.getElementById('contenido-6').style.display = "block";
            document.getElementById('contenido-7').style.display = "none";
            document.getElementById('contenido-8').style.display = "none";
            break;


            case opcionDetalleProducto:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "none";
            document.getElementById('contenido-6').style.display = "none";
            document.getElementById('contenido-7').style.display = "block";
            document.getElementById('contenido-8').style.display = "none";
            break;


            case opcionPagos:
                document.getElementById('contenido-1').style.display = "block";
                document.getElementById('contenido-2').style.display = "none";
                document.getElementById('contenido-3').style.display = "none";
                document.getElementById('contenido-4').style.display = "none";
                document.getElementById('contenido-5').style.display = "none";
                document.getElementById('contenido-6').style.display = "none";
                document.getElementById('contenido-7').style.display = "none";
                document.getElementById('contenido-8').style.display = "block";
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
//la accion cominesa aca 
function modalInicio () {
        document.getElementById ('modalInicio').innerHTML += `
        <div class="modal-container ">
    <form id="formularioInicio" class="modal-form" onsubmit="noRecargo(event)">
    <div class="log">
    <h5 class="login">Login</h5></div>
    <h2 class="cc">Email</h2>
    <input id="mail" class="mt-2  email" type="text">
    <h2 class="cc">Contraseña</h2>
    <input type="password" id="pass" class="mt-2 password" type="text">
    <button class="btn-modal" onclick="selecionContenido(1),selecionContenido(5), generarEmpresa()">Iniciar sesión</button>
    </form>
  </div> `
}


//Función para Registro
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

   

//Genera las categorías Empresa
function generarEmpresa() { 
    document.getElementById('empresa').innerHTML = ''; 
    empresas.forEach(function (emp) { 
        document.getElementById('empresa').innerHTML += `
    <div class="card card-Emp" style="width: 15rem;" onclick="generarProductos(),selecionContenido(6)">
    <div class="celdaEmpresa">
        <h6>${emp.nombreEmpresa}</h6>
        </div>
        <img src="${emp.urlImage}" class="card-img-empresa" alt="...">
        <div>
        </div>
        <div class="card-body"> 

        </div>
    </div>
           
            `;
    }) 
} 



//Genera los PRODUCTOS de cada Detalle producto
function generarDetalleProductos() { 
    document.getElementById('detalleproducto').innerHTML = ''; 
    detallesproductos.forEach(function (detallesproductos) { 
        document.getElementById('prod').innerHTML += `
    <div class="card card-Emp" style="width: 2rem;">
        <h6 class="cardP" >${detallesproductos.nombreProductos}</h6>
        <div class="celdaprod">
         <p ${detallesproductos.detalle}>Descripción Productos</p>
         </div>
        <input class="control  botonInicio" type="button" value="Ordenar">
        <div class="card-body">

        </div>
    </div>
           
            `;
    }) 
} 


//Genera los pago
function generarPago() { 
    document.getElementById('credicard').innerHTML = ''; 
    pago.forEach(function (pago) { 
        document.getElementById('prod').innerHTML += `

        
           
            `;
    }) 
} 






//Ventana modal formulario  pago 


//Genera contenido de notificaciones
function GeneraNotificaciones() {
    document.getElementById('sub-notificacion').innerHTML += `
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, sequi.</p>
    
    `; 
}