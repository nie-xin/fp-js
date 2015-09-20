function splat(fun) {
  return function(array) {
    return fun.apply(null, array);
  };
}

// test
var addArrayElements = splat(function(x, y) { return x + y });
console.log(addArrayElements([1, 2]));
