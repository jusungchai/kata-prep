const urlDecode = function (text) {
  let pairsArray = text.replace(/%20/g, " ").split("&");
  var resultArray = [];
  var objectArray;
  pairsArray.forEach(function (pair) {
    objectArray = pair.split("=");
    resultArray.push(objectArray);
  });  
  var returnObject = {};
  resultArray.forEach(function (elm) {
    returnObject[elm[0]] = elm[1];
  });
  return returnObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);