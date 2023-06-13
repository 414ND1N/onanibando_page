//Constantes
const contenidoMenu = document.getElementById('contenido_menu');
const encabezadoMenu = document.getElementById('encabezado_menu');

// Agregado contenido servidor
const ipJava = '51.222.8.121:40612';
const ipBedrock = '51.222.8.121'
const portBedrock = '40612'
const versionJava = '1.20'
const versionBedrock = '1.20'

//Funciones

function EncabezadoMenu(textContent, href) {
  const nuevoLi = document.createElement('li');
  const nuevoEnlace = document.createElement('a');
  nuevoEnlace.href = href;
  nuevoEnlace.textContent = textContent;
  nuevoLi.appendChild(nuevoEnlace);

  let primerHijo = encabezadoMenu.firstElementChild;
  encabezadoMenu.insertBefore(nuevoLi, primerHijo);
}

function CoontainerMenuMinecraft(ipJava, ipBedrock, portBedrock, versionJava, versionBedrock) {

  let divMinecraft = document.createElement('div');
  divMinecraft.id = 'minecraft';

  let divItemJava = document.createElement('div');
  divItemJava.classList.add('item');

  let divItemJavaLeft = document.createElement('div');
  let divItemJavaRight = document.createElement('div');

  //div izquierda
  divItemJavaLeft.classList.add('col', 'izq');
  const h3_java_tittle = document.createElement('h3');
  h3_java_tittle.textContent = 'JAVA';
  divItemJavaLeft.appendChild(h3_java_tittle);
  const p_version_java = document.createElement('p');
  p_version_java.textContent = `Version minecraft ${versionJava}`;
  divItemJavaLeft.appendChild(p_version_java);

  //div derecha
  divItemJavaRight.classList.add('col', 'der');
  const p_ip_java = document.createElement('p');
  p_ip_java.classList.add('ip_server')
  p_ip_java.textContent = `IP: ${ipJava}`;
  divItemJavaRight.appendChild(p_ip_java);


  divItemJava.appendChild(divItemJavaLeft);
  divItemJava.appendChild(divItemJavaRight);


  let divItemBedrock = document.createElement('div');
  divItemBedrock.classList.add('item');

  let divItemBedrockLeft = document.createElement('div');
  let divItemBedrockRight = document.createElement('div');

  //div izquierda
  divItemBedrockLeft.classList.add('col', 'izq');
  const h3_java_bedrock = document.createElement('h3');
  h3_java_bedrock.textContent = 'BEDROCK';
  divItemBedrockLeft.appendChild(h3_java_bedrock);
  const p_version_bedrock = document.createElement('p');
  p_version_bedrock.textContent = `Version minecraft ${versionBedrock}`;
  divItemBedrockLeft.appendChild(p_version_bedrock);

  //div derecha
  divItemBedrockRight.classList.add('col', 'der');
  const p_ip_bedrock = document.createElement('p');
  p_ip_bedrock.classList.add('ip_server')
  p_ip_bedrock.textContent = `IP: ${ipBedrock}`;
  p_ip_bedrock.insertAdjacentHTML('beforeend', `<br>Port: ${portBedrock}`);
  divItemBedrockRight.appendChild(p_ip_bedrock);

  divItemBedrock.appendChild(divItemBedrockLeft);
  divItemBedrock.appendChild(divItemBedrockRight);

  divMinecraft.appendChild(divItemJava);
  divMinecraft.appendChild(divItemBedrock);

  //Boton de apoyo

  const divApoyo = document.createElement('div');
  divApoyo.classList.add('boton_apoyo');
  const aApoyo = document.createElement('a');
  aApoyo.href = 'https://server.pro/server/20458930';
  aApoyo.target = '_blank';
  aApoyo.type = 'button';
  aApoyo.style = '--clr:#ed2121'

  const spanApoyo = document.createElement('span');
  spanApoyo.textContent = 'Apoya al server 😊';

  aApoyo.appendChild(spanApoyo);

  divApoyo.appendChild(aApoyo);
  divMinecraft.appendChild(divApoyo);

  let primerHijo = contenidoMenu.firstElementChild;
  contenidoMenu.insertBefore(divMinecraft, primerHijo);
}

function ContainerVacio(servidor) {
  let divMinecraft = document.createElement('div');
  divMinecraft.id = servidor;

  let divItem = document.createElement('div');
  divItem.classList.add('item');

  let divItemLeft = document.createElement('div');
  let divItemRight = document.createElement('div');

  //div izquierda
  divItemLeft.classList.add('col', 'izq');
  const h3_java_tittle = document.createElement('h3');
  h3_java_tittle.textContent = 'PROXIMAMENTE';
  divItemLeft.appendChild(h3_java_tittle);

  //div derecha
  divItemRight.classList.add('col', 'der');
  const p_ip = document.createElement('p');
  p_ip.classList.add('ip_server')
  divItemRight.appendChild(p_ip);

  divItem.appendChild(divItemLeft);
  divItem.appendChild(divItemRight);

  divMinecraft.appendChild(divItem);
  let primerHijo = contenidoMenu.firstElementChild;
  contenidoMenu.insertBefore(divMinecraft, primerHijo);
}

function MenuPanaServer() {

  //Agregado menu otros
  EncabezadoMenu('Otros', '#otros')
  ContainerVacio('otros')


  //Agregado menu minecraft
  EncabezadoMenu('Minecraft', '#minecraft') //Agregado encabezado al inicio

  CoontainerMenuMinecraft(ipJava, ipBedrock, portBedrock, versionJava, versionBedrock)

  // Realiza la solicitud a la API utilizando Fetch
  fetch('https://api.mcsrvstat.us/2/PANA-SERVER.serv.nu')
  .then(function(response) {
    if (response.ok) {
      return response.json(); // Obtener los datos en formato JSON
    } else {
      throw new Error('Error en la solicitud: ' + response.status);
    }
  })
  .then(function(data) {
    if(!data.online) {
      
      console.log("PANASERVER está offline")

      //Reinicio del div principal
      contenidoMenu.innerHTML = '';
      encabezadoMenu.innerHTML = '';

      //Agregado menu otros
      EncabezadoMenu('Otros', '#otros')
      ContainerVacio('otros')

      const primer_encabezado = document.getElementById('encabezado_menu').firstElementChild
		  const primer_contenido = document.getElementById('contenido_menu').firstElementChild

      primer_encabezado.className = 'active'
			primer_contenido.className = 'active'

    }else{
      console.log("PANASERVER está online")
    }
  })
  .catch(function(error) {
    console.error(error);
  });
}


(function () {
  
  MenuPanaServer();

}())