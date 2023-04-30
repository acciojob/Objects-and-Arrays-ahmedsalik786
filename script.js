const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
const cap1=players;
let team=players;
let team1={
  name: "John Doe",
  age: 80,
};

Let cap1 = Object.assign({},person);
console.log()
window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
