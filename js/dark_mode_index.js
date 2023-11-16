(function(){

	const toggle = document.getElementById('input_toggle');
	const elements = [
		document.getElementById('menu_bar_pc'),
		document.getElementById('menu_bar_movil'),
		document.getElementById('nosotros'),
		document.getElementById('contacto'),
		document.getElementById('panaserver')
	]

	// Verificar el estado almacenado en localStorage al cargar la página
    toggle.checked = localStorage.getItem('darkModeEnabled') === 'true';
    validarInput(toggle.checked);

	toggle.addEventListener('click', () => {
        validarInput(toggle.checked);

        // Guardar el estado en localStorage
        localStorage.setItem('darkModeEnabled', toggle.checked);
	});

	// Funcion para validar el estado del input
	function validarInput(darkModeEnabled){
		// Dark mode
		if(darkModeEnabled){
			elements.forEach(element => {
				if (element != null) {
					element.classList.add('darkmode')
				}
			});
			return
		}

		//Light mode
		elements.forEach(element => {
			if (element != null) {
				element.classList.remove('darkmode')
			}
		});
	}
}())

