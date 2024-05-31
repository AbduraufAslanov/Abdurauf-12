//1
function printNos(n)
{
    if(n > 0)
    {
        printNos(n - 1);
        console.log(n + " ");
    }
    return;
}

var n = 10;
printNos(n);
//2
let myNums = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < myNums.length; i++ ) {
  sum += myNums[i];
}
console.log(sum) 
//3
function isEven(a) {
  return (a % 2 == 0);
}

let a = 101;

isEven(a) ? console.log("Even") : console.log("Odd");
//4
function getFee(isMember) {
  return isMember ? '$2.00' : '$10.00';
}

console.log(getFee(true));

console.log(getFee(false));

console.log(getFee(null));
//5
const str = "ey melek kelem ye";
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr);
//6
const date = new Date();

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDayOfWeek = daysOfWeek[date.getDay()];

const currentTime = date.toLocaleTimeString();

console.log(`Today is ${currentDayOfWeek} and the time is ${currentTime}`);
//7
/*index.html-da*/
//8
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);
