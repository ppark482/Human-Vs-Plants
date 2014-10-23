/* Creating Characters ---------------------------------------------------------------------------------------------------*/
var Human = function(options) {
  this.name = options.name;
  this.health = options.health;
  this.melee = function( target) {

    // Mutates target's health by 'inflicted' amount
    var inflicted;
    target.health = target.health - (inflicted = (_.random(5, 10) + this.mdamage));
    console.log(inflicted);

  };
  this.mdamage = options.mdamage;
  this.ranged = function ( target) {

    // Mutates target's health by 'inflicted' amount
    var inflicted;
    target.health = target.health - (inflicted = (_.random(0, 15) + this.rdamage));
    console.log(inflicted);

  }
  this.rdamage = options.rdamage;
  this.defense = options.defense;
};

var julius = new Human({ // Creates Balanced Character Julius
  name: 'Julius',
  health: 200,
  mdamage: 15,
  rdamage: 5,
  defense: 10
});
var abe = new Human({ // Creates Offensive Character Abe
  name: 'Abe',
  health: 150,
  mdamage: 10,
  rdamage: 15,
  defense: 5
});
var barbie = new Human({ // Creates Defensive Character Barbie
  name: 'Barbie',
  health: 100,
  mdamage: 5,
  rdamage: 10,
  defense: 15
});

var Plant = function(options) {
  this.name = options.name;
  this.health = options.health;
  this.melee = function (target) {

    // Mutates target's health by 'inflicted' amount
    var inflicted;
    target.health = target.health - (inflicted = (_.random(5, 10) + this.mdamage));
    console.log(inflicted);

  };
  this.mdamage = options.mdamage;
  this.ranged = function (target) {

    // Mutates target's health by 'inflicted' amount
    var inflicted;
    target.health = target.health - (inflicted = (_.random(0, 15) + this.rdamage));
    console.log(inflicted);

  };
  this.rdamage = options.rdamage;
};

var p1 = new Plant({
  name: 'Toats McGoats',
  health: 100,
  mdamage: 10,
  rdamage: 5
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
  // Allows for clicking Character Name
  event.preventDefault();
  console.log('clicked');
  // this needs to paste the next template in order to get ready to fight
});

/* Get ready to fight + Battle Screen
---------------------------------------------------------------------------------------------------*/



/* Fight Logic
---------------------------------------------------------------------------------------------------*/
var human, plant;

$('body').on('click', '.atk1', function(event) {
  event.preventDefault();



});









/* Victory/Loss Logic
---------------------------------------------------------------------------------------------------*/
