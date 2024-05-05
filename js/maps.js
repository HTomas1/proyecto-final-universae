mapboxgl.accessToken = 'pk.eyJ1IjoidG9tYXNoNiIsImEiOiJjbHZkOXR4Y3IwMTdhMmpxYXdvc290N3ExIn0.6cixRu1M73cN-sa1drMerQ'

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/dark-v11',
	center: [-1.13004, 37.98704],
	zoom: 9
});

const places = {
	// Este GeoJSON contiene características que incluyen una propiedad
	// "icono". El valor de la propiedad "icono" corresponde
	// a una imagen del estilo Mapbox.
	'type': 'geojson',
	'data': {
		'type': 'FeatureCollection',
		'features': [
			{
				'type': 'Feature',
				'properties': {
					'title': 'Pumptrack El Palmeral',
					'description':
						'<strong>Pumptrack El Palmeral</strong><p>Horario de apertura: Siempre abierto</p><p>Dificultad: ⭐⭐⭐⭐</p>',
					'icon': 'embassy',
					'iconsize': 2,
					'filter': 'Pumptrack'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [-0.5116226,38.3250086],
				}
			},
			{
				'type': 'Feature',
				'properties': {
					'title': 'Pumptrack Calpe',
					'description':
						'<strong>Pumptrack Calpe</strong><p>Horario de apertura: Siempre abierto</p><p>Dificultad: ⭐⭐</p>',
					'icon': 'embassy',
					'iconsize': 2,
					'filter': 'Pumptrack'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [0.0517951,38.6473191],
				}
			},
			{
				'type': 'Feature',
				'properties': {
					'title': 'Pumptrack Relleu',
					'description':
						'<strong>Pumptrack Relleu</strong><p>Horario de apertura: Siempre abierto</p><p>Dificultad: ⭐⭐⭐</p>',
					'icon': 'embassy',
					'iconsize': 2,
					'filter': 'Pumptrack'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [-0.307701,38.589564],
				}
			},
			{
				'type': 'Feature',
				'properties': {
					'title': 'Pumptrack Sax',
					'description':
						'<strong>Pumptrack Sax</strong><p>Horario de apertura: Siempre abierto</p><p>Dificultad: ⭐⭐⭐</p>',
					'icon': 'embassy',
					'iconsize': 2,
					'filter': 'Pumptrack'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [-0.8265682,38.5305493],
				}
			},
			{
				'type': 'Feature',
				'properties': {
					'title': 'Pumptrack Busot',
					'description':
						'<strong>Pumptrack Busot</strong><p>Horario de apertura: Siempre abierto</p><p>Dificultad: ⭐⭐⭐⭐</p>',
					'icon': 'embassy',
					'iconsize': 2,
					'filter': 'Pumptrack'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [-0.4260476,38.4753306],
				}
			},
			{
				'type': 'Feature',
				'properties': {
					'title': 'Pumptrack Algueña',
					'description':
						'<strong>Pumptrack Algueña</strong><p>Horario de apertura: Siempre abierto</p><p>Dificultad: ⭐⭐⭐</p>',
					'icon': 'embassy',
					'iconsize': 2,
					'filter': 'Pumptrack'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [-1.0097779,38.3352611],
				}
			},
			{
				'type': 'Feature',
				'properties': {
					'title': 'Pumptrack Novelda',
					'description':
						'<strong>Pumptrack Novelda</strong><p>Horario de apertura: Siempre abierto</p><p>Dificultad: ⭐⭐⭐⭐</p>',
					'icon': 'embassy',
					'iconsize': 2,
					'filter': 'Pumptrack'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [-0.7599349,38.3843292],
				}
			},
			{
				'type': 'Feature',
				'properties': {
					'title': 'Pumptrack Daya Vieja',
					'description':
						'<strong>Pumptrack Daya Vieja</strong><p>Horario de apertura: Siempre abierto</p><p>Dificultad: ⭐⭐⭐</p>',
					'icon': 'embassy',
					'iconsize': 2,
					'filter': 'Pumptrack'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [-0.7408006,38.1083259],
				}
			},
			{
				'type': 'Feature',
				'properties': {
					'title': 'Pumptrack La Romana',
					'description':
						'<strong>Pumptrack La Romana</strong><p>Horario de apertura: Siempre abierto</p><p>Dificultad: ⭐⭐⭐⭐</p>',
					'icon': 'embassy',
					'iconsize': 2,
					'filter': 'Pumptrack'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [-0.8979405,38.3683276],
				}
			},
			{
				'type': 'Feature',
				'properties': {
					'title': 'Pumptrack Sant Joan dAlacant',
					'description':
						'<strong>Pumptrack Sant Joan dAlacant</strong><p>Horario de apertura: Siempre abierto</p><p>Dificultad: ⭐⭐⭐</p>',
					'icon': 'embassy',
					'iconsize': 2,
					'filter': 'Pumptrack'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [-0.4404208,38.3964249],
				}
			},
			{
				'type': 'Feature',
				'properties': {
					'title': 'Pumptrack Mutxamel',
					'description':
						'<strong>Pumptrack Mutxamel</strong><p>Horario de apertura: Siempre abierto</p><p>Dificultad: ⭐⭐⭐⭐⭐</p>',
					'icon': 'embassy',
					'iconsize': 2,
					'filter': 'Pumptrack'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [-0.4505675,38.4126975],
				}
			},
			{
				'type': 'Feature',
				'properties': {
					'title': 'Pumptrack Cañada',
					'description':
						'<strong>Pumptrack Cañada</strong><p>Horario de apertura: Siempre abierto</p><p>Dificultad: ⭐⭐⭐</p>',
					'icon': 'embassy',
					'iconsize': 2,
					'filter': 'Pumptrack'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [-0.8182658,38.6714962],
				}
			},
			{
				'type': 'Feature',
				'properties': {
					'title': 'Pumptrack Agost',
					'description':
						'<strong>Pumptrack Agost</strong><p>Horario de apertura: Siempre abierto</p><p>Dificultad: ⭐⭐⭐</p>',
					'icon': 'embassy',
					'iconsize': 2,
					'filter': 'Pumptrack'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [-0.6438559,38.4370262],
				}
			},
			{
				'type': 'Feature',
				'properties': {
					'title': 'Pumptrack Castalla',
					'description':
						'<strong>Pumptrack Castalla</strong><p>Horario de apertura: Siempre abierto</p><p>Dificultad: ⭐⭐⭐</p>',
					'icon': 'embassy',
					'iconsize': 2,
					'filter': 'Pumptrack'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [-0.6805573,38.586179],
				}
			},
			{
				'type': 'Feature',
				'properties': {
					'title': 'Pumptrack Finestrat',
					'description':
						'<strong>Pumptrack Finestrat</strong><p>Horario de apertura: Siempre abierto</p><p>Dificultad: ⭐⭐</p>',
					'icon': 'embassy',
					'iconsize': 2,
					'filter': 'Pumptrack'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [-0.2133695,38.5635425],
				}
			},
			{
				'type': 'Feature',
				'properties': {
					'title': 'Pumptrack Els Poblets',
					'description':
						'<strong>Pumptrack Els Poblets</strong><p>Horario de apertura: Siempre abierto</p><p>Dificultad: ⭐⭐⭐</p>',
					'icon': 'embassy',
					'iconsize': 2,
					'filter': 'Pumptrack'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [0.0210657,38.8511959],
				}
			},
			{
				'type': 'Feature',
				'properties': {
					'title': 'Pumptrack Benijofar',
					'description':
						'<strong>Pumptrack Benijofar</strong><p>Horario de apertura: Siempre abierto</p><p>Dificultad: ⭐⭐⭐</p>',
					'icon': 'embassy',
					'iconsize': 2,
					'filter': 'Pumptrack'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [-0.7446097,38.0787211],
				}
			},
			{
				'type': 'Feature',
				'properties': {
					'title': 'Pumptrack El Campello',
					'description':
						'<strong>Pumptrack El Campello</strong><p>Horario de apertura: Siempre abierto</p><p>Dificultad: ⭐⭐⭐⭐</p>',
					'icon': 'embassy',
					'iconsize': 2,
					'filter': 'Pumptrack'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [-0.7283235,38.4666631],
				}
			},
			{
				'type': 'Feature',
				'properties': {
					'title': 'Pumptrack Molina de Segura',
					'description':
						'<strong>Pumptrack Molina de Segura</strong><p>Horario de apertura: Siempre abierto</p><p>Dificultad: ⭐⭐</p>',
					'icon': 'embassy',
					'iconsize': 2,
					'filter': 'Pumptrack'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [-1.2042914,38.0638442],
				}
			},
			{
				'type': 'Feature',
				'properties': {
					'title': 'Pumptrack La Alcayna',
					'description':
						'<strong>Pumptrack La Alcayna</strong><p>Horario de apertura: Siempre abierto</p><p>Dificultad: ⭐⭐</p>',
					'icon': 'embassy',
					'iconsize': 2,
					'filter': 'Pumptrack'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [-1.1641832,38.0958848],
				}
			},
			{
				'type': 'Feature',
				'properties': {
					'title': 'Pumptrack Alcantarilla',
					'description':
						'<strong>Pumptrack Alcantarilla</strong><p><p>Horario de apertura: Siempre abierto</p><p>Dificultad: ⭐⭐⭐</p>',
					'icon': 'embassy',
					'iconsize': 2,
					'filter': 'Pumptrack'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [-1.2033497,37.9724733],
				}
			},
			{
				'type': 'Feature',
				'properties': {
					'title': 'Pumptrack Fuente Álamo',
					'description':
						'<strong>Pumptrack Fuente Álamo</strong><p><p>Horario de apertura: Siempre abierto</p><p>Dificultad: ⭐⭐⭐</p>',
					'icon': 'embassy',
					'iconsize': 2,
					'filter': 'Pumptrack'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [-1.1781952,37.6701283],
				}
			},
			{
				'type': 'Feature',
				'properties': {
					'title': 'Pumptrack Santiago de la Ribera',
					'description':
						'<strong>Pumptrack Santiago de la Ribera</strong><p>Horario de apertura: Siempre abierto</p><p>Dificultad: ⭐⭐⭐</p>',
					'icon': 'embassy',
					'iconsize': 2,
					'filter': 'Pumptrack'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [-0.8113961,37.7972721],
				}
			},
			{
				'type': 'Feature',
				'properties': {
					'title': 'Pista Vidal - Molina de Segura',
					'description':
						'<strong>Aparcamiento Vidal</strong><p>Horario de apertura: Siempre abierto</p><p>Dificultad: ⭐</p>',
					'icon': 'dot-11',
					'iconsize': 2,
					'filter': 'Pista'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [-1.2033431,38.0680625],
				}
			},
			
			{
				'type': 'Feature',
				'properties': {
					'title': 'Pista Cañada de las Eras - Molina de Segura',
					'description':
						'<strong>Aparcamiento Cañada de las Eras</strong><p>Horario de apertura: Siempre abierto</p><p>Dificultad: ⭐</p>',
					'icon': 'dot-11',
					'iconsize': 2,
					'filter': 'Pista'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [-1.2020618,38.0588341],
				}
			},
			
			{
				'type': 'Feature',
				'properties': {
					'title': 'Pista patinaje - Murcia',
					'description':
						'<strong>Pista patinaje - Murcia</strong><p>Horario de apertura: Siempre abierto</p><p>Dificultad: ⭐</p>',
					'icon': 'dot-11',
					'iconsize': 2,
					'filter': 'Pista'
				},
				'geometry': {
					'type': 'Point',
					'coordinates': [-1.1335124,38.0061011],
				}
			},

		]
	}

}

map.on('load', () => {
	map.addSource('places', places);



	// Añade una capa mostrando lugares.
	map.addLayer({
		'id': 'places',
		'type': 'symbol',
		'source': 'places',
		'layout': {
			'icon-image': ['get', 'icon'],
			'icon-allow-overlap': true,
			'icon-size': ['get', 'iconsize'],
		}
	});

	// Cuando un evento clic ocurre en los marcadores, abre un pop up en la 
	// ubicación del marcador,con una descripción HTML procedente de sus propiedades.
	map.on('click', 'places', (e) => {
		// Copy coordinates array.
		const coordinates = e.features[0].geometry.coordinates.slice();
		const description = e.features[0].properties.description;

		// Asegúrese que si el mapa se aleja de tal manera que
		// varias copias de la característica son visibles, la ventana emergente
		// sobre la copia que se está señalando.
		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}

		new mapboxgl.Popup()
			.setLngLat(coordinates)
			.setHTML(description)
			.addTo(map);
	});

	// Cambia el cursor a un "pointer" cuando se posa sobre la capa "places".
	map.on('mouseenter', 'places', () => {
		map.getCanvas().style.cursor = 'pointer';
	});

	// Change it back to a pointer when it leaves.
	map.on('mouseleave', 'places', () => {
		map.getCanvas().style.cursor = '';
	});

	// Esta función se ejecutará cada vez que se active una casilla de verificación.
	const updateLayerFilter = () => {
		// Obtener una matriz de nombres de iconos que corresponden a las casillas de verificación actualmente marcadas.
		const checkedSymbols = [...document.getElementsByTagName('input')]
			.filter((el) => el.checked)
			.map((el) => el.id);

		// Utilizar una expresión "in" para filtrar la capa
		map.setFilter('places', ['in', 'icon', ...checkedSymbols]);
	};

	// Obtener un array de todas las propiedades `icon` únicas
	const symbols = [];

	for (const feature of places.data.features) {
		const symbol = feature.properties.icon;
		const filter = feature.properties.filter;
		// Verificar si el símbolo ya está en la lista de símbolos
		const existingSymbol = symbols.find(item => item.symbol === symbol);
		// Si el símbolo no está en la lista, agregarlo con su filtro correspondiente
		if (!existingSymbol) {
			symbols.push({ symbol, filter });
		}
	}

	const filterGroup = document.getElementById('filter-group');
	filterGroup.classList.add("filter-js");

	// Para cada valor de `icon`, crear una casilla de verificación y una etiqueta
	for (const symbol of symbols) {
		const input = document.createElement('input');
		input.type = 'checkbox';
		input.id = symbol.symbol;
		input.checked = true;
		filterGroup.appendChild(input);

		const label = document.createElement('label');
		label.setAttribute('for', symbol.symbol);
		label.textContent = symbol.filter;
		filterGroup.appendChild(label);

		// Cuando cambie alguna casilla, actualice el filtro.
		input.addEventListener('change', updateLayerFilter);
	}


});

