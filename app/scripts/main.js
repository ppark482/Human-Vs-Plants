var userName = prompt('What is your name?');

var Humans = function () {
  name: userName,
};

var julius = new Humans () { // Creates Balanced Character Julius
  this.health: 150,
  this.attack: 10,
  this.defense: 10
};

var george = new Humans () { // Creates Offensive Character George
  this.health: 200,
  this.attack: 15,
  this.defense: 5
};

var barbie = new Humans () { // Creates Defensive Character Barbie
  this.health: 100,
  this.attack: 5,
  this.defense: 15
};
