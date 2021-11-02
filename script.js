// console.log("Hello! I am an alert box!!");

$('#submit').on("click", function() {
	
	$('#taskList').html("Has hecho click!");


   // function nombreDeLaFuncion(parametro1) {
        // ...
      //  return resultado;
    //}


    function decirHola() {
        console.log("Hola!");
    }
    
    // "cuando alguien haga click en el elemento con la clase tarjeta,
    // tenemos que llamar a la función decirHola"
   // $('.tarjeta').on("click", decirHola);


// "cuando alguien haga click en el elemento con la clase tarjeta,
// tenemos que llamar a la función anónima que escribimos aquí"
$('.tarjeta').on("click", function() {
	console.log("Hola!");
});

         

               

})


