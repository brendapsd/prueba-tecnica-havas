window.location.href = '/#/3soles';

// Definir un objeto para manejar las rutas y contenido asociado
const routes = {
	'/3soles': { id: 3, mb1: 50, num1: 515, mb2: 200, num2: 1015 },
	'/5soles': { id: 5, mb1: 100, num1: 1015, mb2: 400, num2: 2015 },
	'/7soles': { id: 7, mb1: 150, num1: 2015, mb2: 600, num2: 3015 },
	'/10soles': { id: 10, mb1: 200, num1: 3015, mb2: 800, num2: 4015 },
	'/15soles': { id: 15, mb1: 250, num1: 4015, mb2: 1000, num2: 5015 }
};

const htmlContent = (objDato) => {

  const divContent = document.getElementById('content');

  divContent.innerHTML = `
	<div class="content__item">
		<div class="text">
			<span>Recarga</span>
			<h2>Por S/ ${objDato.id}</h2>
			<p>Recibe por 1 día</p>
			<hr />
			<h1>${objDato.mb1} MB</h1>
			<h4>Llamadas Ilimitadas</h4>
			<h1>${objDato.num1}</h1>
			<h4>SMS</h4>
		</div>
		<div class="redes">
			<img class="redes__logo" src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="facebook" />
			<img class="redes__logo" src="https://cdn-icons-png.flaticon.com/512/889/889101.png" alt="messenger" />
			<img class="redes__logo" src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="whatsapp" />
			<p>Redes Ilimitadas</p>
		</div>
	</div>
	<div class="content__item">
		<div class="text">
			<span>Crece tu recarga</span>
			<h2>Bono mejorado</h2>
			<p>Recibe por 2 días</p>
			<hr />
			<h1>${objDato.mb2} MB</h1>
			<h4>Llamadas Ilimitadas</h4>
			<h1>${objDato.num2}</h1>
			<h4>SMS</h4>
		</div>
		<div class="redes">
			<img class="redes__logo" src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="facebook" />
			<img class="redes__logo" src="https://cdn-icons-png.flaticon.com/512/889/889101.png" alt="messenger" />
			<img class="redes__logo" src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="whatsapp" />
			<p>Redes Ilimitadas</p>
		</div>
	</div>
  `;
  return divContent;
}

// Función para cambiar de pestaña
const changeTab = () => {
	const path = window.location.hash.slice(1); // Obtiene la ruta después del #
	const content = routes[path];
	const arrMenu = document.querySelectorAll('.menu__item')

const activarElemento = (array) => {
	 array.forEach(item => {
		item.addEventListener('click', () => {
			 array.forEach(item => {
				 item.classList.remove('active');
			 });
			 item.classList.add('active');
		 })
	 });
 }
 activarElemento(arrMenu)

	if (content){
			htmlContent(content)
	} else {
			htmlContent(routes['/3soles'])
	}
}

// Maneja los cambios en la URL
window.addEventListener('hashchange', changeTab);
// Carga el contenido inicial
changeTab();