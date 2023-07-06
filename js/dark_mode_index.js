(function(){

	const toggle = document.getElementById('input_toggle');
	const body = document.querySelector('body');
	const menu_bar_pc = document.getElementById('menu_bar_pc')
	const menu_bar_movil = document.getElementById('menu_bar_movil')
	const section_contacto = document.getElementById('contacto')
	const section_panaserver = document.getElementById('panaserver')
	const separadores = document.querySelectorAll('.shape-fill')

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
			separadores.forEach(element => {
				element.setAttribute('class', 'shape-fill darkmode')
				console.log('cambiando color del fill')
			});
			body.style.backgroundColor = '#28292c'
			body.style.color = 'white'
			menu_bar_pc.className = 'menu-bar-pc darkmode'
			menu_bar_movil.className = 'menu-bar-movil darkmode'
			section_contacto.className = 'contacto darkmode'
			section_panaserver.className = 'panaserver darkmode'
		}else{
			separadores.forEach(element => {
				element.setAttribute('class', 'shape-fill')
			});
			body.style.backgroundColor = 'white'
			body.style.color = '#303133'
			menu_bar_pc.className = 'menu-bar-pc'
			menu_bar_movil.className = 'menu-bar-movil'
			section_contacto.className = 'contacto'
			section_panaserver.className = 'panaserver'
		}
	}


}())

