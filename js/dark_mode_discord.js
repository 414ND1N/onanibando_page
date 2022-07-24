(function(){

	const toggle = document.getElementById('input_toggle');
	const body = document.querySelector('body');
	const menu_bar_pc = document.getElementById('menu_bar_pc')
	const menu_bar_movil = document.getElementById('menu_bar_movil')

	var modo_oscuro = false;

	toggle.addEventListener('click', () => {
		
		menu_bar_pc.classList.toggle('darkmode')
		menu_bar_movil.classList.toggle('darkmode')

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