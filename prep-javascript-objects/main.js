
const person = {
  firstName: 'Jack',
  lastName: 'Daniels',
  hobby: 'drinking'
};

console.log(person);
const fullName = `${person.firstName} ${person.lastName}`;
console.log('The person\'s name is: ' + fullName);

person.job = 'coder';
console.log(person.job);

person.previousJob = 'fireman';
console.log(person.previousJob);

console.log(person);
