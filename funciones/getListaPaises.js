// Descripción: Función que devuelve un array con los países de la región de América Latina y el Caribe - Fuente: Cepal
// ...
function getListaPaises(seleccion) {
  const paisesArray = [
    {id: '214', name: 'Antigua y Barbuda', indc: 'ATG'},
    {id: '216', name: 'Argentina', indc: 'ARG'},
    {id: '218', name: 'Bahamas', indc: 'BHS'},
    {id: '219', name: 'Barbados', indc: 'BRB'},
    {id: '220', name: 'Belice', indc: 'BLZ'},
    {id: '221', name: 'Bolivia', indc: 'BOL'},
    {id: '222', name: 'Brasil', indc: 'BRA'},
    {id: '224', name: 'Chile', indc: 'CHL'},
    {id: '225', name: 'Colombia', indc: 'COL'},
    {id: '226', name: 'Costa Rica', indc: 'CRI'},
    {id: '249', name: 'Cuba', indc: 'CUB'},
    {id: '228', name: 'Dominica', indc: 'DMA'},
    {id: '229', name: 'Ecuador', indc: 'ECU'},
    {id: '230', name: 'El Salvador', indc: 'SLV'},
    {id: '234', name: 'Granada', indc: 'GRD'},
    {id: '235', name: 'Guatemala', indc: 'GTM'},
    {id: '237', name: 'Guyana', indc: 'GUY'},
    {id: '238', name: 'Haití', indc: 'HTI'},
    {id: '239', name: 'Honduras', indc: 'HND'},
    {id: '246', name: 'Jamaica', indc: 'JAM'},
    {id: '233', name: 'México', indc: 'MEX'},
    {id: '240', name: 'Nicaragua', indc: 'NIC'},
    {id: '241', name: 'Panamá', indc: 'PAN'},
    {id: '242', name: 'Paraguay', indc: 'PRY'},
    {id: '243', name: 'Perú', indc: 'PER'},
    {id: '264', name: 'República Dominicana', indc: 'DOM'},
    {id: '258', name: 'Uruguay', indc: 'URY'},
    {id: '259', name: 'Venezuela', indc: 'VEN'},
  ];
  if (seleccion === 'todos') {
      let paises = paisesArray;
      return paises;
  } else {
      let paises = paisesArray.filter((pais) => pais.id === seleccion);
      return paises;
  }
} 
export {getListaPaises};