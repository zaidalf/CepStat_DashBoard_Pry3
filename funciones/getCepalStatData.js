// Description: Función que obtiene los datos de la API de la CepStat
// ...
let arrayPeriodos = [], arrayValores = [];
// ...
async function getCepalStatData(getUrl) {
  const response = await fetch(getUrl);
  const data = await response.json();

  const valores = data.body.data.map((item) => item.value);
  const periodos = data.body.dimensions[1].members.map((item) => item.order);
  
  arrayValores  = valores;
  for (let i = 0; i < arrayValores.length; i++) {
    arrayValores[i] = parseFloat(arrayValores[i]);
    console.log(`Indice: ${i} Valor: ${arrayValores[i]}`)
  }
  arrayPeriodos = periodos;

}
export {getCepalStatData, arrayPeriodos, arrayValores};