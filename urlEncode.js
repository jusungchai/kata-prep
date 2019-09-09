const urlEncode = function(text) {
  let encodedURL = "";
  const temp = text.trim();
  for (let i = 0; i < temp.length; i++){
    if (temp.charAt(i) == ' '){
      encodedURL += "%20";
    }
    else{
      encodedURL += temp.charAt(i);
    }
  }
  return encodedURL;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));