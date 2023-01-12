// Modulo principal CepStat - Fuente: Cepal
import {getListaIndicadores} from './funciones/getListaIndicadores.js';
import {getListaPaises} from './funciones/getListaPaises.js';
import {getCepalStatData, arrayPeriodos, arrayValores} from './funciones/getCepalStatData.js';
// ...
// Captura de datos desde html - Diana
//const $select = document.getElementById('htmlPais');
//const opcionPais = () => {
//  console.log("cambio");
//};

//$select.addEventListener("change", opcionCambiada);

//const agregar = () => {
//  const option = document.createElement('option');
//  const valor = new Date ().myChart();
//  option.value = valor;
//  option.text = valor; 
//  $select.appendChild('option');
//};
// . Se debe obtener la variable htmlPais con el nombre del pais
// . Se debe obtener el periodo del gráfico en un rango de fechas entre 1990 y 2019 
// . Variables periodoInicio y periodoFinal
// ...
let htmlPais = 'Argentina'; // Pais
let htmlIndicador = '3159'; // Proporción de las emisiones de dióxido de carbono (CO2) con respecto al total global
let htmlPeriodoInicio = '2005'; // Periodo Inicio
let htmlPeriodoFinal = '2019'; // Periodo Final
const indicadorObj = getListaIndicadores(htmlIndicador);
console.log(`Indicador: ${indicadorObj[0].name}`);
const paisObj = getListaPaises(htmlPais);
console.log(`Pais: ${paisObj[0].name} - ${paisObj[0].id}`);
let url = indicadorObj[0].urlBase;
url += `members= ${paisObj[0].id}`;
url += indicadorObj[0].urlDim1;
url += indicadorObj[0].urlSufj;
console.log(`URL: ${url}`);
// ...
async function chartCepalStat() {
  await getCepalStatData(url, htmlPeriodoInicio, htmlPeriodoFinal);
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
              suggestedMax: 1.0,
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

