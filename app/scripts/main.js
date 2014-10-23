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
var introTemplate = $('#intro').html();
    // introRender = _.template(introTemplate);


$('#startButton').on('click', function() { // Start Button

  // Start button on click displays intro message
  $('.viewPort').html(introTemplate);

  // If any key is pressed, the animation of intro message is stopped
  $(window).keypress(function(k) {
    if (k.keyCode > 0) {
      $('.viewPort p').css('animation', '0');
    }
  });
});

/* After intro text, character picker */
var charTemplate = $('#charPicker').html(),
    charRender = _.template(charTemplate);

$(window).keypress(function(k) {
  if (k.keyCode === 13) {
    $('.viewPort').html(charTemplate);
  }
});
/* On click of character */
$('body').on('click', '.caesar', function() { // User picks caesar
  $('.abe').css('display', 'none');
  $('.barbie').css('display', 'none');
  $(this).css('transform', 'scale(1.2)').css('margin-left', '100px');
});

$('body').on('click', '.abe', function() { // User picks abe
  $('.caesar').css('display', 'none');
  $('.barbie').css('display', 'none');
  $(this).css('transform', 'scale(1.2)').css('margin-left', '100px');
});

$('body').on('click', '.barbie', function() { // user picks barbie
  $('.abe').css('display', 'none');
  $('.caesar').css('display', 'none');
  $(this).css('transform', 'scale(1.2)').css('margin-left', '100px');
});
