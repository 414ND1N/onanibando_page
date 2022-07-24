(function(){
	var propMenu = {
		buerger_menu: document.getElementById('burger_menu'),
		slideMenu: document.getElementById('slideMenu'),
		menu_activo: false,
		elem_menu: document.querySelectorAll('#slideMenu .menu-principal a'),

	}

	var metMenu = {
		inicio: function(){
		propMenu.buerger_menu.addEventListener('click', metMenu.toggleMenu);
		for (var i = 0; i < propMenu.elem_menu.length; i++) {
			propMenu.elem_menu[i].addEventListener('click', metMenu.ocultarMenu);
		}
		
		},
		toggleMenu: function(){
			if(propMenu.menu_activo){
				propMenu.menu_activo = false
				propMenu.slideMenu.className = 'slideMenu'
			}else{
				propMenu.menu_activo = true
				propMenu.slideMenu.className +=' active'
			}
		},
		ocultarMenu: function(){
			propMenu.menu_activo = false
			propMenu.slideMenu.className = 'slideMenu'
		}
	}

	metMenu.inicio()
}())