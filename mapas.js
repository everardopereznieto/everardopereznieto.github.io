// document.addEventListener("DOMContentLoaded", function() {
//     // Code to be executed when the DOM is ready
// $( "#hrefMapa" ).on( "click", function() {
//     flightPath.setMap(null);
//   mensaje('-101.286396,19.999624 -101.2849898,19.9891797 -101.284708,19.989681 -101.286099,19.990171 -101.286396,19.989624');
// } );
//     //document.getElementById("hrefMapa").addEventListener("click", mensaje('-101.286396,19.999624 -101.2849898,19.9891797 -101.284708,19.989681 -101.286099,19.990171 -101.286396,19.989624'));
//     $( "#hrefMapa1" ).on( "click", function() {
//   mensaje('-101.286396,19.999624 -101.2849898,19.9881797 -101.284708,19.989681 -101.286099,19.990171 -101.286396,19.989624');
// } );
// }); 
// function mensaje(coordenadas) {
//     // body...

//         // Creamos la instacia bounds
//         var bounds = new google.maps.LatLngBounds();

//         // Extraemos las coordenadas
//         var coords = coordenadas
//             .split(' ') // Separamos por espacio
//             .map(function(data) {
//                 var info = data.split(','), // Separamos por coma
//                     coord = { // Creamos el obj de coordenada
//                         lat: parseFloat(info[1]),
//                         lng: parseFloat(info[0])
//                     };
//                 // Agregamos la coordenada al bounds
//                 bounds.extend(coord);
//                 return coord;
//             });


//         // Creamos el poligono
//         var area = new google.maps.Polygon({
//             paths: coords,
//             strokeColor: '#FF0000',
//             strokeOpacity: 0.8,
//             strokeWeight: 3,
//             fillColor: '#FF0000',
//             fillOpacity: 0.35
//         });

//         // Creamos el mapa
//         var map = new google.maps.Map(document.getElementById('divMapa'), {
//             zoom: 16,
//             center: bounds.getCenter(), // Centramos el mapa al area
//             mapTypeId: 'satellite'
//         });
//         const marker= new google.maps.Marker({
//             position:{lat:19.9891797, lng:-101.2849898},
//             map:map,
//             title:"Predio #321",
//             draggable: false,
//             animation: google.maps.Animation.DROP,
//             icon:"map.png"
//         });
//         const infoWindow = new google.maps.InfoWindow({
//             content:"<p>CECYTEM</p><p>Municipio Huandacas</p><p>Mayo 2007</p>"
//         });

//         // Agregamos el area al mapa
//         area.setMap(map);
//         infoWindow.open(map,marker);

// }

/*function myMap() {
        // Creamos la instacia bounds
        var bounds = new google.maps.LatLngBounds();

        // Extraemos las coordenadas
        var coords = '-101.286396,19.989624 -101.2849898,19.9891797 -101.284708,19.989681 -101.286099,19.990171 -101.286396,19.989624'
            .split(' ') // Separamos por espacio
            .map(function(data) {
                var info = data.split(','), // Separamos por coma
                    coord = { // Creamos el obj de coordenada
                        lat: parseFloat(info[1]),
                        lng: parseFloat(info[0])
                    };
                // Agregamos la coordenada al bounds
                bounds.extend(coord);
                return coord;
            });


        // Creamos el poligono
        var area = new google.maps.Polygon({
            paths: coords,
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: '#FF0000',
            fillOpacity: 0.35
        });

        // Creamos el mapa
        var map = new google.maps.Map(document.getElementById('mapa'), {
            zoom: 16,
            center: bounds.getCenter(), // Centramos el mapa al area
            mapTypeId: 'satellite'
        });
        const marker= new google.maps.Marker({
            position:{lat:19.9891797, lng:-101.2849898},
            map:map,
            title:"Predio #321",
            draggable: false,
            animation: google.maps.Animation.DROP,
            icon:"map.png"
        });
        const infoWindow = new google.maps.InfoWindow({
            content:"<p>CECYTEM</p><p>Municipio Huandacareo</p><p>Mayo 2007</p>"
        });

        // Agregamos el area al mapa
        area.setMap(map);
        infoWindow.open(map,marker);
    }*/




var flightPath; // Variable global para el polígono

document.addEventListener("DOMContentLoaded", function() {
    $("#hrefMapa").on("click", function() {
        // Eliminar el polígono anterior si existe
        if (flightPath) {
            flightPath.setMap(null);
        }

        //calcularCentroide('-101.205233294205,19.6953890220808 -101.20451466408,19.6953393540553 -101.203532173276,19.6952912966953 -101.203292166118,19.6952585842128 -101.203179011665,19.6952474747789 -101.203095593868,19.6952392848243 -101.202888318626,19.695074439871 -101.202822321014,19.6950351088334 -101.202792396789,19.6950172780873 -101.202852607934,19.6949178118791 -101.2028718572,19.6948889549675 -101.203035553918,19.6946435541324 -101.203185985375,19.6943110102395 -101.203253307354,19.6938934381947 -101.203435944518,19.6924595325075 -101.203603931111,19.6910901569063 -101.203790997522,19.6911694113136 -101.204101926937,19.6912277759022 -101.204581186924,19.6912782268872 -101.205072297889,19.6913439580581 -101.20573023341,19.6914359085274 -101.205565176803,19.6927484400983 -101.205466501761,19.6934519530133 -101.205398887129,19.6940284054501 -101.205287207608,19.6948574639681 -101.205233294205,19.6953890220808');
        dibujaMapa('-101.205233294205,19.6953890220808 -101.20451466408,19.6953393540553 -101.203532173276,19.6952912966953 -101.203292166118,19.6952585842128 -101.203179011665,19.6952474747789 -101.203095593868,19.6952392848243 -101.202888318626,19.695074439871 -101.202822321014,19.6950351088334 -101.202792396789,19.6950172780873 -101.202852607934,19.6949178118791 -101.2028718572,19.6948889549675 -101.203035553918,19.6946435541324 -101.203185985375,19.6943110102395 -101.203253307354,19.6938934381947 -101.203435944518,19.6924595325075 -101.203603931111,19.6910901569063 -101.203790997522,19.6911694113136 -101.204101926937,19.6912277759022 -101.204581186924,19.6912782268872 -101.205072297889,19.6913439580581 -101.20573023341,19.6914359085274 -101.205565176803,19.6927484400983 -101.205466501761,19.6934519530133 -101.205398887129,19.6940284054501 -101.205287207608,19.6948574639681 -101.205233294205,19.6953890220808');
    });

    $("#hrefMapa1").on("click", function() {
        // Eliminar el polígono anterior si existe
        if (flightPath) {
            flightPath.setMap(null);
        }
        dibujaMapa('-101.286396,19.989624 -101.2849898,19.9891797 -101.284708,19.989681 -101.286099,19.990171 -101.286396,19.989624');
    });

});


// Función para calcular el centroide de un polígono irregular
function calcularCentro(coordenadas) {
    let sumLatitud = 0;
    let sumLongitud = 0;


    let coords = coordenadas
        .split(' ')
        .map(function(data) {
            var info = data.split(','),
                coord = {
                    lat: parseFloat(info[1]),
                    lng: parseFloat(info[0])
                };
            sumLatitud += parseFloat(info[1]);
            sumLongitud += parseFloat(info[0]);
            return coord;
        });

    let latitudPromedio = sumLatitud / coords.length;
    let longitudPromedio = sumLongitud / coords.length;

    return { lat: parseFloat(latitudPromedio), lng: parseFloat(longitudPromedio) };
}


function calcularAreaPoligono(coordenadas) {
  // Asegúrate de que las coordenadas estén en el orden correcto (horario o antihorario).
  // Si no lo están, puedes modificar el orden.
  
  // Inicializamos la suma del área en 0.
  let area = 0;
   let coords = coordenadas
        .split(' ')
        .map(function(data) {
            var info = data.split(','),
                coord = {
                    lat: parseFloat(info[1]),
                    lng: parseFloat(info[0])
                };
            return coord;
        });

  // Itera a través de las coordenadas.
    console.log(coords[0].lat);
  for (let i = 0; i < coords.length - 1; i++) {
    const lat1 = coords[i].lat;
    const lon1 = coords[i].lng;
    const lat2 = coords[i + 1].lat;
    const lon2 = coords[i + 1].lng;

    area += (lon1 * lat2 - lon2 * lat1);
  }

  // Último punto conectado con el primero.
  const lat1 = coords[coords.length - 1].lat;
  const lon1 = coords[coords.length - 1].lng;
  const lat2 = coords[0].lat;
  const lon2 = coords[0].lng;

  area += (lon1 * lat2 - lon2 * lat1);

  // Tomamos el valor absoluto del área.
  area = Math.abs(area) / 2;

  return area;
}
function convertirGradosCuadradosAMetrosCuadrados(areaGradosCuadrados, latitud) {
  // Radio de la Tierra en metros (aproximadamente).
  let radioTierra = 6371000;

  // Convertir la latitud a radianes.
  let latitudRadianes = latitud * (Math.PI / 180);

  // Calcular la longitud de un grado de latitud a esta latitud.
  let longitudUnGrado = 111412.84 - 93.5 * Math.cos(2 * latitudRadianes) + 0.118 * Math.cos(4 * latitudRadianes);

  // Convertir grados cuadrados a metros cuadrados.
  let areaMetrosCuadrados = areaGradosCuadrados * (longitudUnGrado ** 2);

  return areaMetrosCuadrados;
}


function dibujaMapa(coordenadas) {
    var bounds = new google.maps.LatLngBounds();

    var coords = coordenadas
        .split(' ')
        .map(function(data) {
            var info = data.split(','),
                coord = {
                    lat: parseFloat(info[1]),
                    lng: parseFloat(info[0])
                };
            bounds.extend(coord);
            return coord;
        });

    var area = new google.maps.Polygon({
        paths: coords,
        strokeColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
        strokeOpacity: 0.8,
        strokeWeight: 3,
        fillColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
        fillOpacity: 0.35
    });

    //calcular el area
     let areaCalculada = calcularAreaPoligono(coordenadas);
     console.log(areaCalculada);

    var map = new google.maps.Map(document.getElementById('divMapa'), {
        zoom: 15,
        center: bounds.getCenter(),
        mapTypeId: 'satellite'
    });

    flightPath = area; // Asignamos el polígono a la variable global

    //calcular centro para el ping colocado
    let centro = calcularCentro(coordenadas);
    const marker = new google.maps.Marker({
        position: centro,
        map: map,
        title: "Predio #321",
        draggable: false,
        animation: google.maps.Animation.DROP,
        icon: "pin.png"
    });

    const infoWindow = new google.maps.InfoWindow({
        content: "<a href='https://www.openstreetmap.org/edit?editor=id#map=17/19.98893/-101.28319' target='_blank'>OpenTopography</a><p>Informacion del predio</p><p>Mayo 2007</p>"
    });

    area.setMap(map);
    infoWindow.open(map, marker);


    // NOTE: This uses cross-domain XHR, and may not work on older browsers.
    //map.data.loadGeoJson(    "/dataMaps/SECCION.json"  );
}