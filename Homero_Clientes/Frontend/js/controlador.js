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
        precio:'150.00', 
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
const Mispedidos = 2;
const Cupones= 3;
const Pago= 4;
const Cuenta= 5;
const Seguridad= 6;
const Ayuda= 7;
const Home= 8;
const Cerrarseccion= 9;



function opcionesSubmenu (opcion){
    switch (opcion) {
        case opcionNoti:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-all-principal').style.display = "none";
            document.getElementById('sub-notificacion').style.display = "block";
            document.getElementById('Mispedidos').style.display = "none";
            document.getElementById('Cupones').style.display = "none";
            document.getElementById('Pago').style.display = "none";
            document.getElementById('Cuenta').style.display = "none";
            document.getElementById('Seguridad').style.display = "none";
            document.getElementById('Ayuda').style.display = "none";
            document.getElementById('Home').style.display = "none";
            document.getElementById('Cerrarseccion').style.display = "none";
            break;


        case Mispedidos:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-all-principal').style.display = "none";
            document.getElementById('sub-notificacion').style.display = "none";
            document.getElementById('Mispedidos').style.display = "block";
            document.getElementById('Cupones').style.display = "none";
            document.getElementById('Pago').style.display = "none";
            document.getElementById('Cuenta').style.display = "none";
            document.getElementById('Seguridad').style.display = "none";
            document.getElementById('Ayuda').style.display = "none";
            document.getElementById('Home').style.display = "none";
            document.getElementById('Cerrarseccion').style.display = "none";
            break;
    
            case Cupones:
                document.getElementById('contenido-1').style.display = "block";
                document.getElementById('contenido-all-principal').style.display = "none";
                document.getElementById('sub-notificacion').style.display = "none";
                document.getElementById('Mispedidos').style.display = "block";
                document.getElementById('Cupones').style.display = "none";
                document.getElementById('Pago').style.display = "none";
                document.getElementById('Cuenta').style.display = "none";
                document.getElementById('Seguridad').style.display = "none";
                break;

                case Pago:
                document.getElementById('contenido-1').style.display = "block";
                document.getElementById('contenido-all-principal').style.display = "none";
                document.getElementById('sub-notificacion').style.display = "none";
                document.getElementById('Mispedidos').style.display = "block";
                document.getElementById('Cupones').style.display = "none";
                document.getElementById('Pago').style.display = "none";
                document.getElementById('Cuenta').style.display = "none";
                document.getElementById('Seguridad').style.display = "none";
                document.getElementById('Ayuda').style.display = "none";
                 document.getElementById('Home').style.display = "none";
                 document.getElementById('Cerrarseccion').style.display = "none";
                break;

                case Cuenta:
                    document.getElementById('contenido-1').style.display = "block";
                    document.getElementById('contenido-all-principal').style.display = "none";
                    document.getElementById('sub-notificacion').style.display = "none";
                    document.getElementById('Mispedidos').style.display = "block";
                    document.getElementById('Cupones').style.display = "none";
                    document.getElementById('Pago').style.display = "none";
                    document.getElementById('Cuenta').style.display = "none";
                    document.getElementById('Seguridad').style.display = "none";
                    document.getElementById('Ayuda').style.display = "none";
                    document.getElementById('Home').style.display = "none";
                    document.getElementById('Cerrarseccion').style.display = "none";
                            break;

                    case Seguridad:
                        document.getElementById('contenido-1').style.display = "block";
                        document.getElementById('contenido-all-principal').style.display = "none";
                        document.getElementById('sub-notificacion').style.display = "none";
                        document.getElementById('Mispedidos').style.display = "block";
                        document.getElementById('Cupones').style.display = "none";
                        document.getElementById('Pago').style.display = "none";
                        document.getElementById('Cuenta').style.display = "none";
                        document.getElementById('Seguridad').style.display = "none";
                        document.getElementById('Ayuda').style.display = "none";
                        document.getElementById('Home').style.display = "none";
                        document.getElementById('Cerrarseccion').style.display = "none";
                        break;

                        case Ayuda:
                            document.getElementById('contenido-1').style.display = "block";
                            document.getElementById('contenido-all-principal').style.display = "none";
                            document.getElementById('sub-notificacion').style.display = "none";
                            document.getElementById('Mispedidos').style.display = "block";
                            document.getElementById('Cupones').style.display = "none";
                            document.getElementById('Pago').style.display = "none";
                            document.getElementById('Cuenta').style.display = "none";
                            document.getElementById('Seguridad').style.display = "none";
                            document.getElementById('Ayuda').style.display = "none";
                            document.getElementById('Home').style.display = "none";
                            document.getElementById('Cerrarseccion').style.display = "none";
                                            break;

                            case Home:
                            document.getElementById('contenido-1').style.display = "block";
                            document.getElementById('contenido-all-principal').style.display = "none";
                            document.getElementById('sub-notificacion').style.display = "none";
                            document.getElementById('Mispedidos').style.display = "block";
                            document.getElementById('Cupones').style.display = "none";
                            document.getElementById('Pago').style.display = "none";
                            document.getElementById('Cuenta').style.display = "none";
                            document.getElementById('Seguridad').style.display = "none";
                            document.getElementById('Ayuda').style.display = "none";
                            document.getElementById('Home').style.display = "none";
                            document.getElementById('Cerrarseccion').style.display = "none";
                                break;

                            case Cerrarseccion:
                            document.getElementById('contenido-1').style.display = "block";
                            document.getElementById('contenido-all-principal').style.display = "none";
                            document.getElementById('sub-notificacion').style.display = "none";
                            document.getElementById('Mispedidos').style.display = "block";
                            document.getElementById('Cupones').style.display = "none";
                            document.getElementById('Pago').style.display = "none";
                            document.getElementById('Cuenta').style.display = "none";
                            document.getElementById('Seguridad').style.display = "none";
                            document.getElementById('Ayuda').style.display = "none";
                            document.getElementById('Home').style.display = "none";
                            document.getElementById('Cerrarseccion').style.display = "none";
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


//Genera los PRODUCTOS
function generarProductos() { 
    document.getElementById('prod').innerHTML = ''; 
    productos.forEach(function (producto) { 
        document.getElementById('prod').innerHTML += `
    <div class="card card-Emp" style="width: 2rem;">
        <h6 class="cardP" >${producto.nombreProductos}</h6>
        <div class="celdaprod">
         <p >Descripción Productos</p>
         </div>
        <input class="control  botonInicio" type="button" value="Ordenar">
        <div class="card-body">

        </div>
    </div>
           
            `;
    })
} 







//Genera los Pago
function generarPago() { 
    document.getElementById('credicard').innerHTML = ''; 
    Pago.forEach(function (pago) { 
        document.getElementById('credicard').innerHTML += `
    <div class="card card-Emp" style="width: 2rem;">
        <div class="celdaPago">
        <div class="text-imagen" style="text-align:center;">
        <h6 class="text-tarjeta"> Agregar Tarjeta</h6>
        <img src="../Homero_Clientes/Frontend/img/productos/2.card.png">
        </div>
      <div class="card m-3  " id="empresa-1" onclick="seleccionEmpresa()">
      <div class="card-content">
      <div class="contenedor" id="ocultar">
          <section class="logo-tarjeta">
            <div class=""> 
            <form action="" id="formulario-tarjeta" class="formulario-tarjeta">
              <div class="grupo">
                <h4 class="text-pago">Pago</h4>
                <br>
                <!--numero tarjeta -->
                <label for="inputNumero"  class="numero-tarjeta">Número Tarjeta</label>
                <input type="text" id="inputNumero" maxlength="19" autocomplete="off">
                </div>
                <br>
                <!--ccv -->
                <div class="grupo ccv">
                    <label for="inputCCV"  class="btn-ccv">CCV</label>
                    <input type="text" id="inputCCV" maxlength="3">
                  </div>
                </div>
                <br>
                <button type="submit" class="btn-enviar">Finalizar Orden</button>
            </form> 
        </section>

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