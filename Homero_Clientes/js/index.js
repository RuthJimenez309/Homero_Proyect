//Ocultar  las  Cards por medio del ID que se  añadio en  html , tenemos 7 
//
document.getElementById("inicio").style.display = "none";
document.getElementById("head").style.display = "none";
document.getElementById("lendingPage").style.display = "none";
document.getElementById("menu").style.display = "none";
document.getElementById("productos").style.display = "none";
document.getElementById("detalle-comida").style.display = "none";
document.getElementById("detalleProducto").style.display = "none";
document.getElementById("credicard").style.display = "none";


//pagina 4,Mostrar usaurio solo muestra un usuario que es Pan
var usuarios=[
    //user
    {
      
        nombreUsuario:   ' Pan', 
        email:   ' pan@yahoo.com', 
        urlImage:  '../Frontend/img/usuarios/pan.png ',
        password:'sksksps',
  
      },

      //user por medio de macht y los validos y devuelve la imagen con la seccion  con crud
      //post enviar el formulario y comparar 
     //
    {
      
        nombreUsuario:   ' Lisa', 
        email:   ' lisa23@gmail.com ', 
        urlImage:  '../Frontend/img/usuarios/1.user.jpeg  ',
        password:' jsjssjs',
  
      },


]

//Mostrar Login

var inicio =[



]







//Mostrar LogosCards
var productos=[
    //card Logo
    {
      
      nombreProducto:   ' product 1 ', 
      Empresa:   ' Little Seasar ', 
      urlImage:  '../Frontend/img/Food/1.res.png',
      calicacion:'3',

    },
    //card logo
    {   nombreProducto:   ' product 2 ', 
        Empresa:   ' KFC', 
        urlImage:  '../Frontend/img/Food/2.res.png',
        calicacion:'4',
    },
    //card Logo
    {   
        nombreProducto:   ' product 3 ', 
        Empresa:   ' Burger King', 
        urlImage:  '../Frontend/img/Food/3.res.png',
        calicacion:'5',
    },

     //card Logo
     {  
        nombreProducto:   ' product 4', 
        Empresa:   ' Taco Bell', 
        urlImage:  '../Frontend/img/Food/4.res.png',
        calicacion:'4',
    },

   
];

//Generar Estrallas
function generarEstrellas(Calificacion){
   let divStrella='';
    
   for (let i = 0; i <Calificacion; i++) {
     divStrella+= `<i class="fas fa-star CalificacionFood "></i>`;
   }
   for (let i = 0; i < 5-Calificacion; i++) {
     divStrella+= `<i class="fa-regular fa-star CalificacionFood"></i>`;
   }
    return divStrella;
}
  
//Funcion para visualizar  la card de logo 
function generarProductos() {
   productos.forEach(function(product){
    document.getElementById('productos').innerHTML += 
         `<div class=" col.12  cardFood">
            <div class="row  ">
            <h5 class="card-text  textoEmpresa">${product.Empresa}</h5>
            <img src="${product.urlImage}" class="card-img  imgFood" alt="">
            <div>
            ${ generarEstrellas(product.calicacion)}
            </div>
            </div>
            </div>
            `;
   });
}

generarProductos();
 function validarCampo(id){
    let campo = document.getElementById(id);
    

 }

//mostrar la pagina 4
function generarMenu(){
let usaurio; 
document.getElementById('menu').innerHTML =+ 
      `<div class="row" >
        <section>
            <nav class=" navegacion">
            <div class="  menu-nav ">
                <div class="">
                    <button type="button" class="fa-solid fa-bars btn-style" 
                    data-bs-toggle="dropdown" aria-expanded="false"></button>
                    <ul class="dropdown-menu menu"><li><a class="dropdown-item "
                      href="#"><i class="fa-regular fa-bell"></i>  1 Notificaciones</a></li>
                    <li><a class="dropdown-item" 
                      href="#"><i class="fa-solid fa-bag-shopping"></i> 2 Mis pedidos</a></li>
                    <li><a class="dropdown-item" 
                      href="#"><i class="fa-solid fa-ticket"></i> 3 Cupones</a></li>
                    <li><a class="dropdown-item" 
                      href="#"><i class="fa-solid fa-credit-card"></i> 4 Pagos online</a></li>
                      <li><a class="dropdown-item "
                      href="#"><i class="fa-regular fa-bell"></i>  5 Seguridad</a></li>
                      <li><a class="dropdown-item "
                        href="#"><i class="fa-solid fa-shield"></i>  6 Ayuda</a></li>
                      <li><a class="dropdown-item "
                        href="#"><i class="list-group-item"></i>  7 Cancel</a></li>
                        <li><a class="dropdown-item " href="#"><i class="fa-regular fa-bell"></i>  8 ayuda</a></li>
                        <br>
                    <li><a class="dropdown-item" href="index.html">
                      <i class="fa-solid fa-arrow-right-from-bracket icon"></i> 9 Cerrar sesión</a></li>
                  </ul>
                  </div> 
              </div>
          </nav>
        </section>
      </div>
      `;
  }
  
  generarMenu();
  function validarCampo(id){
     let campo = document.getElementById(id);
     
 
  }
  

  
  //mostrar la pagina 5
function generarDetalleProducto(){
document.getElementById('detalle-producto').innerHTML =+ 
      `

      `;
  }

