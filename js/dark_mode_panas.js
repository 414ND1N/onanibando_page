(function(){

	const toggle = document.getElementById('input_toggle');
	const section_container_tarjetas = document.getElementsByClassName('tarjetas')

	const elements = [
		document.getElementById('menu_bar_pc'),
		document.getElementById('menu_bar_movil')
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
			section_container_tarjetas[0].classList.add('darkmode')
			section_container_tarjetas[1].classList.add('darkmode')
			return
		}

		//Light mode
		elements.forEach(element => {
			if (element != null) {
				element.classList.remove('darkmode')
			}
		});
		section_container_tarjetas[0].classList.remove('darkmode')
		section_container_tarjetas[1].classList.remove('darkmode')
	}
}())