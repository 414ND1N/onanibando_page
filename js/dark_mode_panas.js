(function(){

	const toggle = document.getElementById('input_toggle');
	const body = document.querySelector('body');
	const menu_bar_pc = document.getElementById('menu_bar_pc')
	const menu_bar_movil = document.getElementById('menu_bar_movil')
	const section_container_tarjetas = document.getElementById('tarjetas_panas')

	validarInput()


	toggle.addEventListener('click', () => {
		validarInput()
	});

	function validarInput(){
		if(document.getElementById('input_toggle').checked){
			menu_bar_pc.className = 'menu-bar-pc darkmode'
			menu_bar_movil.className = 'menu-bar-movil darkmode'
			section_container_tarjetas.className = 'tarjetas_panas darkmode'
			
			body.style.backgroundColor = '#28292c'
			body.style.color = 'white'
		}else{
			menu_bar_pc.className = 'menu-bar-pc'
			menu_bar_movil.className = 'menu-bar-movil'
			section_container_tarjetas.className = 'tarjetas_panas'

			body.style.backgroundColor = 'white'
			body.style.color = '#303133'
		}
	}

	

}())