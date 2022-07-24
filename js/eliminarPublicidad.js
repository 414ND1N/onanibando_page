(function(){

	setTimeout(eliminarPublicidad, 3500);

	function eliminarPublicidad(){
		a_publicidad = document.getElementsByTagName('img')
		for (var i = 0; i < a_publicidad .length; i++) {
			var publicidad = a_publicidad[i]
			if(publicidad.getAttribute('alt') == "www.000webhost.com"){
				
				publicidad.parentNode.parentNode.style.opacity = 0
			}

		}
	}
		
}())