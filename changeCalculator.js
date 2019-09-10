let calculateChange = function(total, cash) { 
  let twenty = 0, ten = 0, five = 0, two = 0, one = 0, twentyCent = 0, tenCent = 0, fiveCent = 0, oneCent = 0;   
  let delta = cash - total;

  while (delta >= 2000){
    delta -= 2000;
    twenty++;
  }
  while (delta >= 1000){
    delta -= 1000;
    ten++;
  }
  while (delta >= 500){
    delta -= 500;
    five++;
  }
  while (delta >= 200){
    delta -= 200;
    two++;
  }
  while (delta >= 100){
    delta -= 100;
    one++;
  }
  while (delta >= 25){
    delta -= 25;
    twentyCent++;
  }
  while (delta >= 10){
    delta -= 10;
    tenCent++;
  }
  while (delta >= 5){
    delta -= 5;
    fiveCent++;
  }
  oneCent = delta;
  
  const change = {
    ...(twenty > 0 && {twentyDollar: twenty}),
    ...(ten > 0 && {tenDollar: ten}),    
    ...(five > 0 && {fiveDollar: five}),
    ...(two > 0 && {twoDollar: two}),
    ...(one > 0 && {oneDollar: one}),
    ...(twentyCent > 0 && {quarter: twentyCent}),
    ...(tenCent > 0 && {dime: tenCent}),
    ...(fiveCent > 0 && {nickel: fiveCent}),
    ...(oneCent > 0 && {penny: oneCent})    
  };
  return (change);
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));