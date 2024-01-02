//Constantes
const contenidoMenu = document.getElementById('contenido_menu')
const encabezadoMenu = document.getElementById('encabezado_menu')

// Busqueda api
const IP_SERVIDOR = 'PANA-SERVER.serv.nu'

// Agregado contenido servidor
let ipJava = '51.222.82.23:40361'
let ipBedrock = '51.222.82.23'
let portBedrock = '40361'
let versionJava = '1.20'
let versionBedrock = '1.20'

//Funciones

function EncabezadoMenu(texto, referencia) {
	const nuevoLi = document.createElement('li')
	const nuevoEnlace = document.createElement('a')
	nuevoEnlace.href = referencia
	nuevoEnlace.textContent = texto
	nuevoLi.appendChild(nuevoEnlace)

	const primerHijo = encabezadoMenu.firstElementChild
	encabezadoMenu.insertBefore(nuevoLi, primerHijo)
}

function ContainerVacio(divContenido) {

	let divItem = document.createElement('div')
	divItem.classList.add('item')

	let divItemLeft = document.createElement('div')
	let divItemRight = document.createElement('div')

	//div izquierda
	divItemLeft.classList.add('col', 'izq')
	const h3_java_tittle = document.createElement('h3')
	h3_java_tittle.textContent = 'PROXIMAMENTE'
	divItemLeft.appendChild(h3_java_tittle)

	//div derecha
	divItemRight.classList.add('col', 'der')
	const p_ip = document.createElement('p')
	p_ip.classList.add('ip_server')
	divItemRight.appendChild(p_ip)

	divItem.appendChild(divItemLeft)
	divItem.appendChild(divItemRight)

	divContenido.appendChild(divItem)
}

function CoontainerMenuMinecraft(divMinecraft, ipJava, ipBedrock, portBedrock, versionJava, versionBedrock, playersOnline, playersMax) {
	
	//Creacion div de JAVA
	let divItemJava = document.createElement('div')
	divItemJava.classList.add('item')
  
	let divItemJavaLeft = document.createElement('div')
	let divItemJavaRight = document.createElement('div')
  
	//div izquierda
	divItemJavaLeft.classList.add('col', 'izq')
	const h3_java_tittle = document.createElement('h3')
	h3_java_tittle.textContent = 'JAVA'
	divItemJavaLeft.appendChild(h3_java_tittle)
	const p_version_java = document.createElement('p')
	p_version_java.textContent = `Version minecraft ${versionJava}`
	divItemJavaLeft.appendChild(p_version_java)
  
	//div derecha
	divItemJavaRight.classList.add('col', 'der')
	const p_ip_java = document.createElement('p')
	p_ip_java.classList.add('ip_server')
	p_ip_java.textContent = `IP: ${ipJava}`
	divItemJavaRight.appendChild(p_ip_java)
  
	//Agregando ambos div
	divItemJava.appendChild(divItemJavaLeft)
	divItemJava.appendChild(divItemJavaRight)
  
	//Creacion div de BEDROCK
	let divItemBedrock = document.createElement('div')
	divItemBedrock.classList.add('item')
  
	let divItemBedrockLeft = document.createElement('div')
	let divItemBedrockRight = document.createElement('div')
  
	//div izquierda
	divItemBedrockLeft.classList.add('col', 'izq')
	const h3_bedrock_tittle = document.createElement('h3')
	h3_bedrock_tittle.textContent = 'BEDROCK'
	divItemBedrockLeft.appendChild(h3_bedrock_tittle)
	const p_version_bedrock = document.createElement('p')
	p_version_bedrock.textContent = `Version minecraft ${versionBedrock}`
	divItemBedrockLeft.appendChild(p_version_bedrock)
  
	//div derecha
	divItemBedrockRight.classList.add('col', 'der')
	const p_ip_bedrock = document.createElement('p')
	p_ip_bedrock.classList.add('ip_server')
	p_ip_bedrock.textContent = `IP: ${ipBedrock}`
	p_ip_bedrock.insertAdjacentHTML('beforeend', `<br>Port: ${portBedrock}`)
	divItemBedrockRight.appendChild(p_ip_bedrock)
  
	//Agregando ambos div
	divItemBedrock.appendChild(divItemBedrockLeft)
	divItemBedrock.appendChild(divItemBedrockRight)
	

	//Creacion div de JUGADORES
	let divPlayers = document.createElement('div')
	divPlayers.classList.add('item')
  
	let divItemPlayerLeft = document.createElement('div')
	let divItemPlayerRight = document.createElement('div')
  
	//div izquierda
	divItemPlayerLeft.classList.add('col', 'izq')
	const p_sub_players = document.createElement('p')
	p_sub_players.textContent = `JUGADORES EN LÍNEA`
	divItemPlayerLeft.appendChild(p_sub_players)
  
	//div derecha
	divItemPlayerRight.classList.add('col', 'der')
	const p_players_info = document.createElement('p')
	p_players_info.classList.add('ip_server')
	p_players_info.textContent = `${playersOnline} / ${playersMax}`
	divItemPlayerRight.appendChild(p_players_info)
  
	//Agregando ambos div
	divPlayers.appendChild(divItemPlayerLeft)
	divPlayers.appendChild(divItemPlayerRight)


	//Agregando divs JAVA y BEDROCK al contenedor
	divMinecraft.appendChild(divItemJava)
	divMinecraft.appendChild(divItemBedrock)
	divMinecraft.appendChild(divPlayers)
  
	//Boton de apoyo
  
	const divApoyo = document.createElement('div')
	divApoyo.classList.add('boton_apoyo')
	const aApoyo = document.createElement('a')
	aApoyo.href = 'https://server.pro/server/20458930'
	aApoyo.target = '_blank'
	aApoyo.type = 'button'
	aApoyo.style = '--clr:#ed2121'
  
	const spanApoyo = document.createElement('span')
	spanApoyo.textContent = 'Apoya al server 😊'
  
	aApoyo.appendChild(spanApoyo)
  
	divApoyo.appendChild(aApoyo)
	divMinecraft.appendChild(divApoyo)
  
	const iEfecto = document.createElement('i')
	aApoyo.appendChild(iEfecto)

}

function ActualizacionEstadoSeridor() {

	// Realiza la solicitud a la API utilizando Fetch
	fetch(`https://api.mcsrvstat.us/2/${IP_SERVIDOR}`)
		.then(function (response) {
			if (response.ok) {
				return response.json() // Obtener los datos en formato JSON
			} else {
				throw new Error('Error en la solicitud: ' + response.status)
			}
		})
		.then(function (data) {

			//Div del servidor de minecraft
			const divMinecraft = contenidoMenu.querySelector('#minecraft_panaland')


			if (data.online) {
				console.log("PANASERVER está online")

				//Reinicio del div minecraft
				divMinecraft.innerHTML = ''

				//Datos del servidor de minecraft obtenidos de la API
				let ipJava = IP_SERVIDOR
				let ipBedrock = data.ip
				let portBedrock = data.port
				let versionJava = data.version
				let versionBedrock = data.version

				CoontainerMenuMinecraft(divMinecraft, ipJava, ipBedrock, portBedrock, versionJava, versionBedrock, data.players.online, data.players.max)
				
			}else{
				console.log("PANASERVER está offline")

				//Reinicio del div minecraft
				divMinecraft.innerHTML = ''

				//Agregado menu vacio
				ContainerVacio(divMinecraft)
			}
		})
		.catch(function (error) {
			console.error(error)
		})

}

ActualizacionEstadoSeridor()
