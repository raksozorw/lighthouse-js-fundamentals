const whichSchool  = function (age) {
  if (age < 13) {
    return "Elementary School";
  } else if (age >= 13 && age < 18) {
    return "Secondary School";
  } else {
    return "Lighthouse Labs";
  }
}
// never needed to adjust age or put in values.... confusing. 
// Ifs are used before the returns in functions.
