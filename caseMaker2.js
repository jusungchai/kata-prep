const makeCase = function (input, inCase) {
  let vowel = "aeiou";
  let convertedString = "";

  if (typeof (inCase) == "string") {
    var str;
    switch (inCase) {
      case "camel":
        str = input.trim().split(" ");
        if (str.length === 1) {
          convertedString;
        }
        else {
          for (let i = 1; i < str.length; i++) {
            let firstChar = str[i].charAt(0).toUpperCase();
            str[i] = firstChar + str[i].slice(1);
          }
        }
        convertedString = str.join('');
        break;
      case "pascal":
        str = input.trim().split(" ");
        for (let i = 0; i < str.length; i++) {
          let firstChar = str[i].charAt(0).toUpperCase();
          str[i] = firstChar + str[i].slice(1);
        }
        convertedString = str.join('');
        break;
      case "snake":
        str = input.trim().split(" ");
        convertedString = str.join('_');
        break;
      case "kebab":
        str = input.trim().split(" ");
        convertedString = str.join('-');
        break;
      case "title":
        str = input.trim().split(" ");
        for (let i = 0; i < str.length; i++) {
          let firstChar = str[i].charAt(0).toUpperCase();
          str[i] = firstChar + str[i].slice(1);
        }
        convertedString = str.join(' ');
        break;
      case "vowel":
        str = input;
        for (let i = 0; i < input.length; i++) {
          if ("aeiou".indexOf(input[i]) != -1) {
            let vowel = input[i].toUpperCase();
            str = str.substring(0, i) + vowel + str.substring(i + 1, input.length);
          }
        }
        convertedString = str;
        break;
      case "consonant":
        str = input;
        for (let i = 0; i < input.length; i++) {
          if ("aeiou".indexOf(input[i]) == -1) {
            let vowel = input[i].toUpperCase();
            str = str.substring(0, i) + vowel + str.substring(i + 1, input.length);
          }
        }
        convertedString = str;
        break;
      case "upper":
        convertedString = input.toUpperCase();
        break;
      case "lower":
        convertedString = input.toLowerCase();
        break;
    }
  }
  else {
    let priorities = {
      "camel": 1,
      "pascal": 2,
      "snake": 3,
      "kebab": 4,
      "title": 5,
      "vowel": 6,
      "consonant": 7,
      "upper": 8,
      "lower": 9
    };

    inCase.sort(function (p1, p2) {
      return priorities[p1] - priorities[p2];
    });    
    for (let i = 1; i < inCase.length; i++) {
      const convertFirst = makeCase(input, inCase[i - 1]);
      convertedString = makeCase(convertFirst, inCase[i]);
    }
  }
  return convertedString;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));