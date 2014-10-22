// var Humans = {
//   name: userName,
// };
//
// var julius = new Humans () { // Creates Balanced Character Julius
//   this.health: 150,
//   this.attack: 10,
//   this.defense: 10
// };
//
// var george = new Humans () { // Creates Offensive Character George
//   this.health: 200,
//   this.attack: 15,
//   this.defense: 5
// };
//
// var barbie = new Humans () { // Creates Defensive Character Barbie
//   this.health: 100,
//   this.attack: 5,
//   this.defense: 15
// };

/* Game Start Up */
var introTemplate = $("#intro").html(),
    introRender = _.template(introTemplate);

$('#startButton').on('click', function() {
  // Start button on click displays intro message
  $('.viewPort').html(introRender);
});
