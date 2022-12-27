// Modulo principal CepStat - Fuente: Cepal
console.log('CepalStat Paso0');
import {getListaIndicadores} from './funciones/getListaIndicadores.js';
import {getListaPaises} from './funciones/getListaPaises.js';
import {getCepalStatData, arrayPeriodos, arrayValores} from './funciones/getCepalStatData.js';
console.log('CepalStat Paso1');
// ...
const paisArray = getListaPaises('todos');
console.log(`Lista de Paises: ${paisArray}`);
// Para armar lista desplegable de paise en el HTML
// ...
let htmlPais = '216'; // Pais
let htmlIndicador = '3159'; // Proporción de las emisiones de dióxido de carbono (CO2) con respecto al total global
const indicadorObj = getListaIndicadores(htmlIndicador); // Proporción de las emisiones de dióxido de carbono (CO2) con respecto al total global
const paisObj = getListaPaises(htmlPais); // Chile
let url = indicadorObj[0].urlBase;
url += `members= ${paisObj[0].id}`;
url += indicadorObj[0].urlDim1;
url += indicadorObj[0].urlSufj;
console.log(`URL: ${url}`);
// ...
async function chartCepalStat() {
  await getCepalStatData(url);
  const ctx = document.getElementById('geiChart');
  const myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: arrayPeriodos,
          datasets: [{
            label: `${indicadorObj[0].name} - ${paisObj[0].name}`,
            data: arrayValores,
            backgroundColor: paisObj[0].bgColor,
            borderColor: paisObj[0].bdColor,
          }],
      },
      options: {
          scales: {
            y: {
              suggestedMin: 0.0,
              suggestedMax: 2.0,
            }
            
              // yAxes: [{
              //     display: true,
              //     ticks: {
              //         beginAtZero: true,
              //         min: 0,
              //         max: 2,
              //         stepSize: 0.1,
              //     },
              //     scaleLabel: {
              //       display: true,
              //       labelString: 'Porcentaje',
              //     },
              // }],
              // xAxes: [{
              //   scaleLabel: {},
              // }],
          },
      }
  });
}
chartCepalStat();
// ...

