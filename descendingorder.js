function descendingOrder(n){
  //Just for me to check
  console.log(n);
  
  //Convert to string
  var str = n.toString();
  console.log(str);
  
  //Make new string for end result
  var reverseString = "";
  
  //Reversed string
  for(var i = str.length - 1; i >= 0; i--)
  {
    reverseString += str[i];
  }
  
  //Convert back to int
  var result = parseInt(reverseString, 10);
  
  return result;
}

/* Test statements
Test.assertEquals(descendingOrder(0), 0)
Test.assertEquals(descendingOrder(1), 1)
Test.assertEquals(descendingOrder(123456789), 987654321)
*/

/* Instructions */
/* 
Your task is to make a function that can take any non-negative integer as a argument 
and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 21445 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/
