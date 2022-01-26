elementArray=[0,1,2,3,4,5]

  function result(myArray) {
    let sumaKwadratow = 0;

  for(let i=0; i<elementArray.length; i++) {
    sumaKwadratow = sumaKwadratow + Math.pow(elementArray[i], 2);
  }

  return sumaKwadratow;

  }

console.log(result(elementArray));