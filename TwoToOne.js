function longest(s1, s2) {

  //Match expression
  var regExp = /^[a-z]+$/;
  
  //If both don't match
  if(s1.match(!regExp) && s2.match(!regExp)){
    console.log("Error! Both aren't valid expressions");
  }
  
  //If one doesn't match
  else if(s1.match(!regExp) || s2.match(!regExp)){
    console.log("Error! One of the expressions are not valid");
  }
  
  //Main test cases
  else if(s1.match(regExp) && s2.match(regExp)){
  
    var combinedStr= s1 + s2;
    console.log(combinedStr);
    
    var uniqueStr = combinedStr.replace(/(.)(?=.*\1)/g, "");
    console.log(uniqueStr);
    
    var sortedStr = uniqueStr.split('').sort().join('');
    console.log(sortedStr);
  }
  
  //For anything else
  else{
    console.log("Error!");
  }
  
  //Result
  return sortedStr;
}

