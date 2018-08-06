/* Write a JavaScript program to display the current day and time in the
following format.  Go to the editor
Sample Output : Today is : Tuesday. Current time is : 10 PM : 30 : 38
The value returned by getDay() is an integer corresponding to the day of the
week: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.*/

var date = new Date();
var day = date.getDay();
var month = date.getMonth() +1;
var year = date.getFullYear();
var hour = date.getHours();
var minutes = date.getMinutes();

var prepand = (hour >= 12)? " PM ":" AM ";
var todayIs = "Today is " + day + "/" + month + "/" + year
var todayTime = "The time is " + hour + ":" + minutes +  prepand;

document.getElementById('today').innerHTML = todayIs;
document.getElementById('time').innerHTML = todayTime;

console.log("Today is " + day + "/" + month + "/" + year);
console.log("The time is " + hour + ":" + minutes +  prepand )

// ------------------------------------------------------------------------

// Write a JavaScript function to print the contents of the current window.
function print_current_page() {
  window.print();
}

// ------------------------------------------------------------------------

/* Write a JavaScript program to find the area of a triangle where lengths
of the three of its sides are 5, 6, 7 */
var side1 = 5;
var side2 = 6;
var side3 = 7;
var perimeter = (side1 + side2 + side3) / 2;
console.log(perimeter);

var area = Math.sqrt(perimeter * (perimeter - side1)* (perimeter - side2)  * (perimeter - side3));
console.log(area);

/*Write a JavaScript program to rotate the string 'w3resource' in right
direction by periodically removing one letter from the end of the string
and attaching it to the front.*/
function animate_string(id) {
    const element = document.getElementById(id);
    const textNode = element.childNodes[0]; // assuming no other children
    let text = textNode.data;

  setInterval(() => {
   text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;
  }, 300);
}

// ------------------------------------------------------------------------
/* Write a JavaScript program to determine whether a given year is a leap
year in the Gregorian calendar. */

console.log("----------------------------------")
// year = window.prompt("Type in a year: ");
// // Is year divisible by 100, 400, and 4 = not leap year?
// x = (year % 100 === 0)? (year % 400 === 0) : (year % 4 === 0);
// console.log(x);
console.log("----------------------------------")

// ------------------------------------------------------------------------
/* Write a JavaScript program to find 1st January is being a Sunday between
2014 and 2050.  In JavaScript Date objects are based on a time value that is
the number of milliseconds since 1 January, 1970 UTC. */
console.log("----------------------------------")
function sunday() {
  for (var year = 2014; year <= 2050; year++) {
    var d = new Date(year, 0, 1);
      if(d.getDay() === 0)
      console.log("January 1st is a Sunday in the year of " + year);
  }
}
sunday();

// ------------------------------------------------------------------------
/* Write a JavaScript program where the program takes a random integer
between 1 to 10, the user is then prompted to input a guess number. If the
user input matches with guess number, the program will display a message
"Good Work" otherwise display a message "Not matched". */

function GuessTheNumber() {
  // guess = prompt("Pick a number between 1 to 10");
  var randomNumber = Math.floor((Math.random() * 10) + 1);

  if (randomNumber === guess) {
    alert("Good Work!");
  } else {
    alert("Not Matched");
  }
  console.log(randomNumber);
}

GuessTheNumber();

// ------------------------------------------------------------------------
/* Write a JavaScript program to calculate days left until next Christmas. */
function christmas() {
  var t = new Date();
  var christmas = new Date(t.getFullYear(), 11, 25);

  if (t.getMonth() === 11 && t.getDate() > 25) {
    christmas.setFullYear(christmas.getFullYear() + 1);
  }

  var one_day = 1000 * 60 * 60 * 24;
  console.log(Math.ceil((christmas.getTime() - t.getTime()) / (one_day)) + " days left until Christmas!");
}

christmas();

// ------------------------------------------------------------------------
/* Write a JavaScript program to calculate multiplication and division of
two numbers (input from user) */
