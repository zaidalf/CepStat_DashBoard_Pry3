// Descripción: Función que devuelve un array con los indicadores GEI de la Cepal - Fuente: Cepal
// ...
function getListaIndicadores(seleccion) {
  const indicadoresArray = [
  {id: '3158',
     name: 'Emisiones de dióxido de carbono (CO2), total excluyendo cambio de uso de suelo y deforestación',
    urlBase: 'http://api-cepalstat.cepal.org/cepalstat/api/v1/indicator/3158/data?',
    urlDim1: ',85390,29160,29161,29162,29163,29164,29165,29166,29167,29168,29169,29170,29171,29172,29173,29174,29175,29176,29177,29178,29179,29180,29181,29182,29183,29184,29185,29186,29187,29188,29189',
    urlSufj: '&lang=es&format=json&in=1&app=dashboard'},
  {id: '3159',
    name: 'Proporción de las emisiones de dióxido de carbono (CO2) con respecto al total global',
    urlBase: 'http://api-cepalstat.cepal.org/cepalstat/api/v1/indicator/3159/data?',
    urlDim1: ',85390,29160,29161,29162,29163,29164,29165,29166,29167,29168,29169,29170,29171,29172,29173,29174,29175,29176,29177,29178,29179,29180,29181,29182,29183,29184,29185,29186,29187,29188,29189',
    urlSufj: '&lang=es&format=json&in=1&app=dashboard'},
  {id: '3351',
    name: 'Emisiones de Gases de Efecto Invernadero (GEI) por sector',
    urlBase: 'http://api-cepalstat.cepal.org/cepalstat/api/v1/indicator/3351/data?',
    urlDim1: ',63672,29160,29161,29162,29163,29164,29165,29166,29167,29168,29169,29170,29171,29172,29173,29174,29175,29176,29177,29178,29179,29180,29181,29182,29183,29184,29185,29186,29187,29188,29189',
    urlSufj: '&lang=es&format=json&in=1&app=dashboard'},
  {id: '3387',
    name: 'Proporción de las emisiones de gases de efecto invernadero (GEI) con respecto al total global',
    urlBase: 'http://api-cepalstat.cepal.org/cepalstat/api/v1/indicator/3387/data?',
    urlDim1: ',29160,29161,29162,29163,29164,29165,29166,29167,29168,29169,29170,29171,29172,29173,29174,29175,29176,29177,29178,29179,29180,29181,29182,29183,29184,29185,29186,29187,29188,29189',
    urlSufj: '&lang=es&format=json&in=1&app=dashboard'},
  {id: '2027',
    name: 'Emisiones de dióxido de carbono (CO2) (Total, por habitante y por producto interno bruto)',
    urlBase: 'http://api-cepalstat.cepal.org/cepalstat/api/v1/indicator/2027/data?',
    urlDim1: ',85390,29160,29161,29162,29163,29164,29165,29166,29167,29168,29169,29170,29171,29172,29173,29174,29175,29176,29177,29178,29179,29180,29181,29182,29183,29184,29185,29186,29187,29188,29189',
    urlSufj: '&lang=es&format=json&in=1&app=dashboard'},
  {id: '4461',
    name: 'Emisiones de gases de efecto invernadero (GEI) por habitante',
    urlBase: 'http://api-cepalstat.cepal.org/cepalstat/api/v1/indicator/4461/data?',
    urlDim1: ',29160,29161,29162,29163,29164,29165,29166,29167,29168,29169,29170,29171,29172,29173,29174,29175,29176,29177,29178,29179,29180,29181,29182,29183,29184,29185,29186,29187,29188,29189',
    urlSufj: '&lang=es&format=json&in=1&app=dashboard'},
  {id: '4462',
    name: 'Emisiones de Gases de Efecto Invernadero (GEI) del sector energético',
    urlBase: 'http://api-cepalstat.cepal.org/cepalstat/api/v1/indicator/4462/data?',
    urlDim1: ',29160,29161,29162,29163,29164,29165,29166,29167,29168,29169,29170,29171,29172,29173,29174,29175,29176,29177,29178,29179,29180,29181,29182,29183,29184,29185,29186,29187,29188,84309',
    urlSufj: '&lang=es&format=json&in=1&app=dashboard'},
  {id: '4463',
    name: 'Emisiones de Gases de Efecto Invernadero (GEI) por PIB',
    urlBase: 'http://api-cepalstat.cepal.org/cepalstat/api/v1/indicator/4463/data?',
    urlDim1: ',29160,29161,29162,29163,29164,29165,29166,29167,29168,29169,29170,29171,29172,29173,29174,29175,29176,29177,29178,29179,29180,29181,29182,29183,29184,29185,29186,29187,29188,29189,84313',
    urlSufj: '&lang=es&format=json&in=1&app=dashboard'}
  ];
  if (seleccion === 'todos') {
      let indicadores = indicadoresArray;
      return indicadores;
  } else {
      let indicadores = indicadoresArray.filter(indicador => indicador.id === seleccion);
      return indicadores;
  }
}
export {getListaIndicadores};
