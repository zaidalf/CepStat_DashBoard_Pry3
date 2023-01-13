// Description: Función que obtiene los datos de la API de la CepStat
// ...
let arrayPeriodos = [], arrayValores = [];
// ...
async function getCepalStatData(getUrl, periodoInicio, periodoFinal) {
  const response = await fetch(getUrl);
  const data = await response.json();

  const valores = data.body.data.map((item) => item.value);
  const periodos = data.body.dimensions[1].members.map((item) => item.order);
  
  let j = 0;
  for (let i = 0; i < periodos.length; i++) {
    if (periodos[i] >= periodoInicio && periodos[i] <= periodoFinal)
    {
      arrayPeriodos[j] = periodos[i];
      arrayValores[j] = parseFloat(valores[i]);
      j = j + 1;
    }
  }
}

export {getCepalStatData, arrayPeriodos, arrayValores};