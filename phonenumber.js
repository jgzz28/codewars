function createPhoneNumber(numbers){

  //Check array length
  if((numbers.length<= 0) && (numbers.length >=10)){
    console.log("Please enter a valid number.");
  }

  //Convert to string
  var phoneNumber = numbers.toString();

  //Remove symbols
  var clean = ('' + phoneNumber).replace(/\D/g, '');

  //Matching regex code
  var match = clean.match(/^(\d{3})(\d{3})(\d{4})$/);

  //Makes phone number format
  if(match){
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
}

/* 
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!
*/
