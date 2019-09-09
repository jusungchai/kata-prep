let talkingCalendar = function(date) {
  let dateArray = date.split("/");
  let year = dateArray[0];
  let month = dateArray[1];
  let day = dateArray[2];
  let str = "";
  console.log(dateArray);

  const mapping = {
    "01": ["January", "1st, "],
    "02": ["February", "2nd, "],
    "03": ["March", "3rd, "],
    "04": ["April", "4th, "],
    "05": ["May", "5th, "],
    "06": ["June", "6th, "],
    "07": ["July", "7th, "],
    "08": ["August", "8th, "],
    "09": ["September", "9th, "],
    "10": ["October", null],
    "11": ["November", null],
    "12": ["December", null]    
  };

  str += mapping[month][0] + " " + (day < 10 ? mapping[day][1] : day + "th, ") + year;  
  return str;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));