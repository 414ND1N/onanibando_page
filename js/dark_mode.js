(function(){

	const toggle = document.getElementById('input_toggle');

	const separadores = document.querySelectorAll('.shape-fill')
	const body = document.querySelector('body')

	// Verificar el estado almacenado en localStorage al cargar la página
    toggle.checked = localStorage.getItem('darkModeEnabled') === 'true';
    validarInput(toggle.checked);

	toggle.addEventListener('click', () => {
        validarInput(toggle.checked);

        // Guardar el estado en localStorage
        localStorage.setItem('darkModeEnabled', toggle.checked);
	});

	function validarInput(darkModeEnabled){
		// Dark mode
		if(darkModeEnabled){
			separadores.forEach(element => {
				element.setAttribute('class', 'shape-fill darkmode')
			});
			body.style.backgroundColor = '#0c0c0c'
			body.style.color = 'white'
			return
		}

		//Light mode
		separadores.forEach(element => {
			element.setAttribute('class', 'shape-fill')
		});
			
		body.style.backgroundColor = '#fbfdfe'
		body.style.color = '#040b10'
	}
}())