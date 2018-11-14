const plantNeedsWater = function(day){
  if(day === 'Wednesday'){
  return true;
} else {
  return false;
}
}
plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));

// I learned you can use the function keyword inside an expression and this is called a function expression
