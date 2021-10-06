const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {
      
      let arreglo={};
      for (let i = 0; i < param.length; i++) {
        if (param[i] in arreglo) {
            arreglo[param[i]]++;
        }
        else{
            arreglo[param[i]]=1;
        }
    }
    return arreglo;
}

  console.log(repeatCounter(counterWords));