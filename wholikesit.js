function likes(names) {

  //Number of people
  var people = names.length;
  //Like statement sentence
  var statement = "";
  console.log(people);
 
  switch(people)
  {
    case 0: statement = "no one likes this";  break;
    case 1: statement =  names[0] + " likes this"; break;
    case 2: statement = names[0] + " and " + names[1] + " like this"; break;
    case 3: statement = names[0] + ", " + names[1] + " and "+ names[2] + " like this"; break;
    default: 
      var newLength = people - 2;
      statement = names[0] + ", " + names[1] + " and "+ newLength +" others like this";
  }

  return statement;
}
