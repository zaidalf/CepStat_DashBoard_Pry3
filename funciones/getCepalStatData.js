// Description: Función que obtiene los datos de la API de la CepStat
//...
let arrayPeriodos = [], arrayValores = [];
async function getCepalStatData(getUrl) {
  try{
          const response = await fetch(getUrl);
          const data = await response.json();
          const valores = data.body.data.map((item) => item.value);
          const periodos = data.body.dimensions[1].members.map((item) => item.order);
  } catch(error){
          console.log(`Se ha producido un error: ${error}`);
  }
  arrayValores  = valores;
  arrayPeriodos = periodos;
}
export {getCepalStatData, arrayPeriodos, arrayValores};