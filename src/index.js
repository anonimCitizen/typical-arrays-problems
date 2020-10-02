
exports.min = function min (array) {
if (array == null || array.length == 0)
  return 0;
else
  return Math.min.apply(Math, array);
  
}

exports.max = function max (array) {
  if (array == null || array.length == 0)
  return 0;
  else
  return Math.max.apply(Math, array);
}

exports.avg = function avg (array) {
  let sum = 0;
  if (array == null || array.length == 0)
  return 0;

  for (let i = 0; i < array.length; i++){
    sum = sum + array[i];
  }
  return sum/array.length;
}


