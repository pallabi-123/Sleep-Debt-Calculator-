/* 1)	The first problem to solve is determining how many hours of sleep you got each night of the week.
You can create a function that returns any given night’s number of hours rest. Instead of writing seven different functions (one for each day of the week). Let’s write one function with a parameter for the day.
Create a function named getSleepHours with a single parameter named day.
*/
const   getSleepHours = day => {
  /* 2) The function should accept a day as an argument and return the number of hours you slept that night.
For instance, if you got 8 hours of sleep on Monday night, calling getSleepHours(‘monday’) should return 8. 
Use an if/else or switch statement to implement this.*/
  day.toLowercase();
  Switch (day) {
    case ‘monday’:
     return 8;
    case ‘tuesday’:
     return 6;
    case ‘wednasday’:
     return 7;
    case ‘thursday’:
      return 9;
    case ‘friday’:
      return 5;
    case ‘saturday’:
       return 10;
    case ‘sunday’:
       return 11;
}
};
/*3)Test the function by calling it multiple times and printing the results to the console.You can remove the tests when you know your function works.*/
Console.log(getSleepHours(‘wednasday’));

/*4) Now that you’ve written a function to get the sleep hours for each night, we need to do three things:
•	Get the total sleep hours that you actually slept.
•	Get the ideal sleep hours that you prefer.
•	Calculate the sleep debt, if any.
To get the total sleep hours that you actually slept, create a new function named getActualSleepHours that takes no parameter.*/

const getActualSleepHours = () => {
} 

/*5) Inside the getActualSleepHours() function, call the getSleepHours() function for each day of the week. Add the results together and return the sum using an 
implicit return. */
const getActualSleepHours = () => getSleepHours(‘monday’) + getSleepHours(‘tuesday’) + getSleepHours(‘wednasday’) + getSleepHours(‘thursday’) + 
      getSleepHours(‘friday’) + getSleepHours(‘saturday’) + getSleepHours(‘sunday’);







