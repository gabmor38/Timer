// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

const alarm = process.argv;  // declare time passed via Node.

const timer= () => { // create a function that will iterate through all of the alarms 
  for (let i = 0; i < alarm.length; i++) {
    if (alarm[i] >= 0 && alarm[i] !== NaN) {  //use If statement to rule out the negative #s and the strings.
      // setTimeout beeps for a second 
      setTimeout (() => {
        process.stdout.write("."); 
      }, 1000 * alarm[i])
    }
    
  }
};

timer(alarm);

