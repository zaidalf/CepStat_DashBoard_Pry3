// Modulo principal CepStat - Fuente: Cepal
import {getListaIndicadores} from './funciones/getListaIndicadores.js';
import {getListaPaises} from './funciones/getListaPaises.js';
import {getCepalStatData, arrayPeriodos, arrayValores} from './funciones/getCepalStatData.js';
console.log('CepalStat Paso1');
const paisArray = getListaPaises('todos');
// console.log(`Lista de Paises: ${paisArray}`);
// Para armar lista desplegable de paise en el HTML
// ...
const indicadorObj = getListaIndicadores('3159'); // Proporción de las emisiones de dióxido de carbono (CO2) con respecto al total global
const paisObj = getListaPaises('224'); // Chile
let url = indicadorObj[0].urlBase;
url += paisObj[0].id;
url += indicadorObj[0].urlDim1;
url += indicadorObj[0].urlSufj;
console.log(`URL: ${url}`);
//...
async function chartCepalStat() {
  await getCepalStatData(url);
  console.log(`Periodos: ${arrayPeriodos}`);
  console.log(`Valores: ${arrayValores}`);
  const ctx = document.getElementById('geiChart');
  const myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: arrayPeriodos,
          datasets: [{
              label: 'Evolución de las emisiones de dióxido de carbono (CO2) con respecto al total global',
              data: arrayValores,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
          }]
      },
  })
}
chartCepalStat();
// ...

