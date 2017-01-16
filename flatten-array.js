function flatten (arrays) {

  let output = [];

  function innerFunction(array) {
    array.forEach((element) => {
      if(!Array.isArray(element)){
        output.push(element);
      }
      else{
        innerFunction(element);
      }
    });
  }

  innerFunction(arrays);
  return output;
}
