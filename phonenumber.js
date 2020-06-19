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
