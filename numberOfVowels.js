let numberOfVowels = function(data) {
  const vowelList = "aeiou";
  let count = 0;

  for (let i = 0; i < data.length; i++){
    if (vowelList.indexOf(data[i]) !== -1){
      count++;
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));