// Descripción: Función que devuelve un array con los países de la región de América Latina y el Caribe - Fuente: Cepal
// ...

async function getListaPaises(seleccion) {
  const paisesArray = [
    {id: '216', name: 'Argentina', indc: 'ARG', bgColor: 'rgba(152, 0, 77)', bdColor: 'rgba(255, 128, 191)'},
    {id: '221', name: 'Bolivia', indc: 'BOL', bgColor: 'rgba(102,77, 0)', bdColor: 'rgba(204, 153, 0)'},
    {id: '222', name: 'Brasil', indc: 'BRA', bgColor: 'rgba(0, 255, 0)', bdColor: 'rgba(0, 102, 0)'},
    {id: '224', name: 'Chile', indc: 'CHL', bgColor: 'rgba(0, 0, 179)', bdColor: 'rgba(75, 192, 192)'},
    {id: '225', name: 'Colombia', indc: 'COL', bgColor: 'rgba(255, 153, 0)', bdColor: 'rgba(128, 77, 0)'},
    {id: '229', name: 'Ecuador', indc: 'ECU', bgColor: 'rgba(153, 102, 255)', bdColor: 'rgba(51, 0, 153)'},
    {id: '233', name: 'México', indc: 'MEX', bgColor: 'rgba(102, 255, 153)', bdColor: 'rgba(0, 128, 43)'},
    {id: '242', name: 'Paraguay', indc: 'PRY', bgColor: 'rgba(255, 255, 0)', bdColor: 'rgba(204, 204, 0)'},
    {id: '243', name: 'Perú', indc: 'PER', bgColor: 'rgba(255, 204, 102)', bdColor: 'rgba(153, 102, 0)'},
    {id: '258', name: 'Uruguay', indc: 'URY', bgColor: 'rgba(102, 153, 153)', bdColor: 'rgba(61, 92, 92)'},
    {id: '259', name: 'Venezuela', indc: 'VEN', bgColor: 'rgba(255, 51, 0)', bdColor: 'rgba(128, 26, 0)'},
  ];
  const filterPaises = paisesArray.filter(pais => pais.id === seleccion)
  console.log(`Func_getListaPaises: ${filterPaises[0]}`);
  return filterPaises[0];
};
export {getListaPaises};