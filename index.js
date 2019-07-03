//OPTION 1
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  function randomNum() {
      let number = getRandomInt(0, 10);
      if(number < 5 && number !==0){
        console.log(`${number} less than five!`)
    }
    if(number > 5 && number !==0){
        console.log(`${number} greater than five!`)
    }
  }

//OPTION 2
  function randomIntGenerator() {
    let randomInt = Math.floor(Math.random() * ( 10 - 1) + 1;
    let intTest = (randomInt >=5) ? "greater than or equal to 5" : "less than five"
  }

  //OPTION 3
  function fiveComparison() {
    number = Math.random()*10;
    if (number < 5) console.log("Less than five!");
    if (number > 5) console.log("Greater than five!");
    return;
 }

 //#2
  function areaOfCircle(r) {
    return Math.PI*r*r;
 }
 
 //3
 //OPTION 1
 function areaOfCircleWithPrompt() {
    let r = prompt("Enter a radius:");
    console.log(Math.PI*r*r);
    return;
 }

 //OPTION 2
 function circlePrompt() {
   let input = prompt("pick a radius");
   areaOfCircle(input);
 }

 circlePrompt();

 //4
 //OPTION 1
 function alarmTime() {
  let currentTime = parseInt(prompt("What time is it?"));
  let alarmLength = parseInt(prompt("How long to wait for alarm?"));
  console.log((currentTime + alarmLength)%24);
  return;
}
//OPTION 2
function alarmTime() {
  let hour = parseInt(new Date().getHours());
  let alarm = parseInt(prompt"how many hours to wait?);
  let alarmTime = (hour + alarm) % 24 ;
  let standardTime = (alarmTime > 12) ? "pm" : "am";
  console.log ( (alarmTime % 12) , standardTime);
}
alarmTime();

//5
//OPTION1
function isEven(i) {
  return !(i%2);
}
//OPTION 2
function isEven(n) {
  let remainder = n % 2;
  let answer = (remainder == 0) ? true : false;
  console.log(answer);
}
isEven(3);
//OPTION 3
function isEven(n) {
  let remainder = n % 2;
  let answer = true;

  if (remainder == 1 ) {
    answer = false;
  }
  console.log(answer);
}
isEven(3);

//6
//OPTION 1
function totalArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
      total += arr[i];
  }
  return total;
}
//OPTION 2
let numbers = [3,4,5,6,7];

function sum(array) {
  return array.reduce(function(a,b) {
    return a + b ;
  });
}

console.log(sum(numbers);)

//7
function reverseString(s) {
  let reversed = "";
  for (let i = s.length-1; i >= 0; i--) {
      reversed += s[i];
  }
return reversed;
}

//8
//OPTION 1
function countWords(s) {
  let words = 1;
  for (let i = 0; i < s.length; i++) {
      if (s[i] == " ") words++;
  }
  return words;
}
//OPTION 2
function arrayPlay(str]ing) {
  return [...string].reverse().join('');
}
console.log(arrayPlay("cats"));

//9
function lastDigitMatches(a, b, c) {
  if (a%10 != b%10) return false;
  return (a%10 == c%10);
}