let camelCase = function(input) {
  let str = input.trim().split(" ");   
  if (str.length === 1){
    return input;
  }
  else{
    for (let i = 1; i < str.length; i++){
      let firstChar = str[i].charAt(0).toUpperCase();
      str[i] = firstChar + str[i].slice(1);      
    }
  }
  return str.join('');
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));