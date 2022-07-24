(function(){

	const toggle = document.getElementById('input_toggle');
	const body = document.querySelector('body');
	const menu_bar_pc = document.getElementById('menu_bar_pc')
	const menu_bar_movil = document.getElementById('menu_bar_movil')
	const container_contacto = document.getElementById('container_contacto')
	const fondo_parallax = document.getElementById('contacto_datos')

	var modo_oscuro = false;

	toggle.addEventListener('click', () => {
		
		menu_bar_pc.classList.toggle('darkmode')
		menu_bar_movil.classList.toggle('darkmode')
		container_contacto.style.color = 'black'
		fondo_parallax.classList.toggle('darkmode')

		if(modo_oscuro){
			/*MODO CLARO*/ 
			body.style.backgroundColor = 'white'
			body.style.color = '#303133'

			modo_oscuro = false
		}else{
			/*MODO OSCURO*/ 

			body.style.backgroundColor = '#28292c'
			body.style.color = 'white'

			modo_oscuro = true
		}
			
	});

}())

