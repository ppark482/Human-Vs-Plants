/* Creating Characters ---------------------------------------------------------------------------------------------------*/
var Human = function(options) {
  this.name = options.name;
  this.health = options.health;
  this.attack = options.attack;
  this.defense = options.defense;
};
var julius = new Human({ // Creates Balanced Character Julius
  name: 'Julius',
  health: 150,
  attack: 10,
  defense: 10
});
var abe = new Human({ // Creates Offensive Character Abe
  name: 'Abe',
  health: 200,
  attack: 15,
  defense: 5
});
var barbie = new Human({ // Creates Defensive Character Barbie
  name: 'Barbie',
  health: 100,
  attack: 5,
  defense: 15
});


/* Game Start Up ---------------------------------------------------------------------------------------------------*/
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

/* After intro text, character picker ---------------------------------------------------------------------------------------------------*/
var charTemplate = $('#charPicker').html(),
    charRender = _.template(charTemplate);

$(window).keypress(function(k) {
  if (k.keyCode === 13) {
    $('.viewPort').html(charTemplate);
  }
});
/* On click of character
---------------------------------------------------------------------------------------------------*/
$('body').on('click', '.caesar', function(event) { // User picks caesar
  event.preventDefault();
  $('.abe').css('display', 'none');
  $('.barbie').css('display', 'none');
  $('.caesar img').removeClass('profilePic').addClass('profilePicClicked');
  $('h4').text('Pick ' + julius.name).addClass('ready');
});

$('body').on('click', '.abe', function(event) { // User picks abe
  event.preventDefault();
  $('.caesar').css('display', 'none');
  $('.barbie').css('display', 'none');
  $('.abe img').removeClass('profilePic').addClass('profilePicClicked');
  $('h4').text('Pick ' + abe.name);
});

$('body').on('click', '.barbie', function(event) { // user picks barbie
  event.preventDefault();
  $('.abe').css('display', 'none');
  $('.caesar').css('display', 'none');
  $('.barbie img').removeClass('profilePic').addClass('profilePicClicked');
  $('h4').text('Pick ' + barbie.name);
});

/* User Picks a Character to Use
---------------------------------------------------------------------------------------------------*/
$('body').on('click', '.ready', function(event) {
  event.preventDefault();
  console.log('clicked');


});
