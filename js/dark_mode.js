(function(){

	const toggle = document.getElementById('input_toggle');
	const body = document.querySelector('body');
	const menu_bar_pc = document.getElementById('menu_bar_pc')
	const menu_bar_movil = document.getElementById('menu_bar_movil')
	const section_contacto = document.getElementById('contacto')
	const section_panaserver = document.getElementById('panaserver')

	validarInput()


	toggle.addEventListener('click', () => {
		validarInput()
	});

	function validarInput(){
		if(document.getElementById('input_toggle').checked){
			body.style.backgroundColor = '#28292c'
			body.style.color = 'white'
			menu_bar_pc.className = 'menu-bar-pc darkmode'
			menu_bar_movil.className = 'menu-bar-movil darkmode'
			section_contacto.className = 'contacto darkmode'
			section_panaserver.className = 'panaserver darkmode'
		}else{
			body.style.backgroundColor = 'white'
			body.style.color = '#303133'
			menu_bar_pc.className = 'menu-bar-pc'
			menu_bar_movil.className = 'menu-bar-movil'
			section_contacto.className = 'contacto'
			section_panaserver.className = 'panaserver'
		}
	}


}())

