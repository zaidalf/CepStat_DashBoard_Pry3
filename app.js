// Modulo principal CepStat - Fuente: Cepal
console.log("CepStat - Fuente: Cepal");
import {getListaIndicadores} from './funciones/getListaIndicadores.js';
import {getListaPaises} from './funciones/getListaPaises.js';
import {getCepalStatData, arrayPeriodos, arrayValores} from './funciones/getCepalStatData.js';
// ...
// Inicio de la aplicación
console.log("Inicio de la aplicación");
var myChart;
const htmlIndicador = '3159';
let htmlPais = '216';
const htmlPeriodoInicio = '1990';
const htmlPeriodoFinal = '2019';  
const htmlTypeChart = 'line';
const indicadorObj = getListaIndicadores(htmlIndicador);
console.log(indicadorObj);
let paisObj = await getListaPaises(htmlPais);
console.log(paisObj);
let url = indicadorObj.urlBase;
    url += `members= ${paisObj.id}`;
    url += indicadorObj.urlDim1;
    url += indicadorObj.urlSufj;
console.log(`URL: ${url}`);
await getCepalStatData(url, htmlPeriodoInicio, htmlPeriodoFinal);
  console.log(`Array Periodos: ${arrayPeriodos}`);
  console.log(`Array Valores: ${arrayValores}`);
chartCepalStat();
// ...
// Captura evento desde HTML
let _htmlPais = document.getElementById('htmlPais');
_htmlPais.addEventListener('change', async() => {
  let htmlPaisValue = document.getElementById('htmlPais').value;
  paisObj = await getListaPaises(htmlPaisValue);
  console.log(paisObj);
  let url = indicadorObj.urlBase;
    url += `members= ${paisObj.id}`;
    url += indicadorObj.urlDim1;
    url += indicadorObj.urlSufj;
  console.log(`URL desde HTML: ${url}`);
  myChart.destroy();
  await getCepalStatData(url, htmlPeriodoInicio, htmlPeriodoFinal);
  console.log(`Array Periodos: ${arrayPeriodos}`);
  console.log(`Array Valores: ${arrayValores}`);
  chartCepalStat();
});
// ...
// Funcion para obtener los datos del indicador & Graficar
async function getCepalStat() {
  await getCepalStatData(url, htmlPeriodoInicio, htmlPeriodoFinal);
  console.log(`Array Periodos: ${arrayPeriodos}`);
  console.log(`Array Valores: ${arrayValores}`);
}
async function chartCepalStat() {
  const ctx = document.getElementById('geiChart');
  myChart = new Chart(ctx, {
      type: htmlTypeChart,
      data: {
          labels: arrayPeriodos,
          datasets: [{
            label: `${indicadorObj.name} - ${paisObj.name}`,
            data: arrayValores,
            backgroundColor: paisObj.bgColor,
            borderColor: paisObj.bdColor,
          }],
      },
      options: {
          scales: {
            y: {
              suggestedMin: 0.0,
              suggestedMax: 1.0,
            }
          },
      }
  });
}
// ...

