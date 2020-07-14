function oddOrEven(array) {
  
  //If input array is empty, consider it as [0] array with a zero
   if(array.length < 1 || array == undefined ){
     return "even";
   }
  
  //Sum of array
  var sum = array.reduce((a, b)=> a + b, 0);
  
  if (sum % 2 == 0){
    return "even";
  }
  
  else{
    return "odd";
  }
}
