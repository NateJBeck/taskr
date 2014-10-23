var select = function(list, filterFunction) {
  var result = [];
  for (var i = 0; i < list.length; i++) {
    if (filterFunction(list[i])) {
      result.push(list[i]);
     };
  }

  return result;
};

var list = [-1,0,1,2,3,4,5,6,7];

var greaterThanTwo = function(element) {
  return element > 2;
};

var divisibleByThree = function(element) {
  return (element % 3 === 0);
};
