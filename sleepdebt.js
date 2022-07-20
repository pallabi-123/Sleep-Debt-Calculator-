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

/*6) To get the ideal sleep hours that you prefer, create a function named getIdealsleepHours with no parameters.
Inside the function, declare a variable named idealHours and set its value to your ideal hours per night. Then return the idealHours multiplied by 7.
You’ll want to multiply by 7 to get the total hours you prefer per week.*/

Const getIdealsleepHours = () => {
    Const idealHours = 8;
   Return idealHours * 7;
};

/* 7) Test your two new functions by calling them and printing the results to the console. You can remove the tests when you know your functions works.*/
console.log(getIdealsleepHours());

/* 8) Now that you can get the actual sleep hours and the ideal sleep hours. It’s time to calculate sleep debt. Create a function named calculateSleepDebt with no
parameters. Inside of its block, create a variable named actualSleepHours set equal to the getActualSleepHours() function call. Then, create another variable named
idealSleepHours, set equal to the getIdealSleepHours() function call.  */

const calculateSleepDebt = () => {
   const actualSleepHours = getActualSleepHours();
    const idealSleepHours =  getIdealSleepHours();
  
/* 9) Now that you have actualSleepHours and idealSleepHours, You can write a few if/else statements to output the result to the console. The function should fulfil 
this logic:
•	If actual sleep equals ideal sleep, log to the console that the user got the perfect amount of sleep.
•	If the actual sleep is greater than the ideal sleep, log to the console that the user got more sleep than needed.
•	If the actual sleep is less than the ideal sleep, log to the console that the user should get some rest.*/
  
  If (actualSleepHours === idealSleepHours) {
    console.log(‘You got perfect amount of sleep’);
  } else if (actualSleepHours > idealSleepHours) {
   console.log(‘You got more sleep than needed’);
  } else {
   Console.log(‘You should get some rest’)
  }
} 








