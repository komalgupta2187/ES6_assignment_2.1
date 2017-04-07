/* 
Create Object destructuring for user where user has: 1. First Name, 2. Last Name, 3. Date of Birth, then assign this object in other object like:

let obj = { first: 'Avnesh', last: 'Shakya' };
let {first: f, last: l} = obj;

Then use this object in other function to display full name with date of birth.

*/

let user = {first: 'Komal', last: 'Arya', dob:'21/08/1987'};
let {first: f, last: l, dob: d} = user;

function displayName(){
  return `First Name: ${f} \nLast Name: ${l} \nDate of Birth: ${d}`;
}

console.log(displayName());