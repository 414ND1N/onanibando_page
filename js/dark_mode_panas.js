(function(){

	const toggle = document.getElementById('input_toggle');
	const body = document.querySelector('body');
	const menu_bar_pc = document.getElementById('menu_bar_pc')
	const menu_bar_movil = document.getElementById('menu_bar_movil')
	const section_container_tarjetas = document.getElementById('tarjetas_panas')

	// Verificar el estado almacenado en localStorage al cargar la página
    const darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
    toggle.checked = darkModeEnabled;
    validarInput(darkModeEnabled);

	toggle.addEventListener('click', () => {
		const darkModeEnabled = toggle.checked;
        validarInput(darkModeEnabled);

        // Guardar el estado en localStorage
        localStorage.setItem('darkModeEnabled', darkModeEnabled);
	});

	function validarInput(darkModeEnabled){
		if(darkModeEnabled){
			menu_bar_pc.className = 'menu-bar-pc darkmode'
			menu_bar_movil.className = 'menu-bar-movil darkmode'
			section_container_tarjetas.className = 'tarjetas darkmode'
			
			body.style.backgroundColor = '#28292c'
			body.style.color = 'white'
		}else{
			menu_bar_pc.className = 'menu-bar-pc'
			menu_bar_movil.className = 'menu-bar-movil'
			section_container_tarjetas.className = 'tarjetas'

			body.style.backgroundColor = 'white'
			body.style.color = '#303133'
		}
	}

}())