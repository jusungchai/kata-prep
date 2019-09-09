const multiplicationTable = function(maxValue) {
  if (maxValue <= 0){
    return "N/A";    
  }
  else{
    let str = "";
    for (let i = 1; i <= maxValue; i++){
      for (let j = 1; j <= maxValue; j++){
        str += (i*j);
        if (j + 1 <= maxValue){
          str += " ";
        }  
      }
      str += "\n";
    }
    return str;
  }
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));