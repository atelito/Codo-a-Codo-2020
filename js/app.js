var http = require('http'); //para poder ejecutar acciones de http
var fs = require("fs"); //para tener acceso al sistema de archivos
fs.readdirSync("./files" , (error , items ) => { 
    console.log( items)
}) //para leer carpetas

fs.writeFile(".files/archivo.txt", "datos enviados desde node.js", (error)=>{
    if (error){
        console.log("error al escribir archivo")
    }else{
        console.log("el archivo se modifico exitosamente")
    }
})
var contenido = fs.readFileSync("./files/archivo.txt", "UTF-8"); //bloquea la ejecucion del codigo
/* var contenido = fs.readFile('./files/archivo.txt', "UTF-8", (error, datos)=>{ //no bloque ell codigp, es asincronica
    console.log(datos);
}); */
console.log(contenido);



var servidor = http.createServer( function(peticion, respuesta){
    respuesta.writeHead( 200 , {"Content-type": "text/html"})
    respuesta.write("Respuesta que indica a que direccion se accede: " + peticion.url)
    console.log("peticion web");
}
    )
servidor.listen(3000);

console.log("Ejecutando servidor NodeJS");

//var moment = require("moment");


//const btnBoton = document.querySelector('.boton');

/* btnBoton.addEventListener("click", function() {
    alert("Correo enviado");
    })
     */