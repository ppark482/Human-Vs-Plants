/* Creating Characters */
var Humans = function(name, health, attack, defense) {
  this.name = name;
  this.health = health;
  this.attack = attack;
  this.defense = defense;
};
var julius = new Humans('Julius', 150, 10, 10); // Creates Balanced Character Julius
var abe = new Humans('Abe', 200, 15, 5); // Creates Offensive Character Abe
var barbie = new Humans('Barbie', 100, 5, 15); // Creates Defensive Character Barbie


/* Game Start Up */
var introTemplate = $('#intro').html(),
    introRender = _.template(introTemplate);


$('#startButton').on('click', function() { // Start Button

  // Start button on click displays intro message
  $('.viewPort').html(introTemplate);

  // If any key is pressed, the animation of intro message is stopped
  $(window).keypress(function(k) {
    if (k.keyCode > 0) {
      $('.viewPort p').css('animation', '0');
    };
  });
});

/* After intro text, character picker */
var charTemplate = $('#charPicker').html(),
    charRender = _.template(charTemplate);

$('')
