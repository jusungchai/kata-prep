let sumLargestNumbers = function(data) {
  if (data.length === 0) {
    return "No Data";
  } else if (data.length === 1) {
    return data[0];
  } else if (data.length === 2) {
    return data[0] + data[1];
  } else {
    data.sort(function(a, b) {
      return a - b;
    });
    return data[data.length - 1] + data[data.length - 2];
  }
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));