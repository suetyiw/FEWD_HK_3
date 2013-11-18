document.getElementById("celsius").onclick = convert;

function convert (){
	var celsius = document.getElementById("celsius").value
	farhenheit = convertCelsiusToFarhenheit(Pcelsius);
	if (farhenhit > 100){
		document.getElementById("farhenheit").value = "hot!!";
	} else {
		document.getElementById("farhenheit").value = farhenheit;

	}
}

function convertCelsiusToFarhenheit (celsius){
	var farhenheit = 9/5 * celsius + 32;
	return farhenheit;
