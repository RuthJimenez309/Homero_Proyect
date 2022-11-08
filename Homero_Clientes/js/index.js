

//Mostrar usaurio solo muestra un usuario que es Pan
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

//Ocultar  las  Cards por medio del ID que se  añadio en  html por ejemplo Producto
//
document.getElementById("productos").style.display = "none";
document.getElementById("formulario").style.display = "none";
    
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

//Esto es de la card

//ocultar Usuarios
function cargarPerfil () {

    for (var i = 0; i < users.length; i++) {
        console.log(users[i]);
        document.getElementById("lista-Perfil").innerHTML +=
            `<div class="Perfil" onclick="PerfilActual(${Perfil[i].id})">
                        <img src="src/img/${Perfil[i].imagenPerfil}">
                        <div class="etiqueta">${Perfil[i].nombre}</div>
                    </div>`;
    }
}
//ocultar Usuarios


