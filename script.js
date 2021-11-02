$('#submit').on("click", function() {
	let newTask = $('#newTask').val();
	
	tasks.push(newTask);

	console.log(`Tenemos las siguientes tareas en la lista: ${tasks}`);
	
})




