/* Creating Characters ---------------------------------------------------------------------------------------------------*/
var inflicted, enemy_health;

var Human = function(options) {
  this.name = options.name;
  this.health = options.health;
  this.melee = function( target) {

    // Mutates target's health by 'inflicted' amount
    enemy_health = target.health = target.health - (inflicted = (_.random(5, 10) + this.mdamage));
    console.log('Damage inflicted = ' + inflicted);
    console.log('Enemy health = ' + target.health);

  };
  this.mdamage = options.mdamage;
  this.ranged = function ( target) {

    // Mutates target's health by 'inflicted' amount
    target.health = target.health - (inflicted = (_.random(0, 15) + this.rdamage));
    console.log('Damage inflicted = ' + inflicted);
    console.log('Enemy health = ' + target.health);

  }
  this.rdamage = options.rdamage;
  this.defense = options.defense;
};

// var julius = new Human({ // Creates Balanced Character Julius
//   name: 'Julius',
//   health: 200,
//   mdamage: 15,
//   rdamage: 5,
//   defense: 10
// });
// var abe = new Human({ // Creates Offensive Character Abe
//   name: 'Abe',
//   health: 150,
//   mdamage: 10,
//   rdamage: 15,
//   defense: 5
// });
// var barbie = new Human({ // Creates Defensive Character Barbie
//   name: 'Barbie',
//   health: 100,
//   mdamage: 5,
//   rdamage: 10,
//   defense: 15
// });

var Plant = function(options) {
  this.name = options.name;
  this.health = options.health;
  this.melee = function (target) {

    // Mutates target's health by 'inflicted' amount
    target.health = target.health - (inflicted = (_.random(5, 10) + this.mdamage));
    console.log('Damage inflicted = ' + inflicted);
    console.log('Player health = ' + target.health);

  };
  this.mdamage = options.mdamage;
  this.ranged = function (target) {

    // Mutates target's health by 'inflicted' amount
    target.health = target.health - (inflicted = (_.random(0, 15) + this.rdamage));
    console.log('Damage inflicted = ' + inflicted);
    console.log('Player health = ' + target.health);

  };
  this.rdamage = options.rdamage;
};

var enemy1 = new Plant({
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
var player, dataName, dataHealth, dataMdamage, dataRdamage, dataDefense;

$('body').on('click', '.caesar', function(event) { // User picks caesar
  dataName = $('h4').data('name');
  dataHealth = $('h4').data('health');
  dataMdamage = $('h4').data('mdamage');
  dataRdamage = $('h4').data('rdamage');
  player = new Human ({
    name: dataName,
    health:

  });
  event.preventDefault();
  $('.abe').css('display', 'none');
  $('.barbie').css('display', 'none');
  $('.caesar img').removeClass('profilePic').addClass('profilePicClicked');
  $('h4').text('Pick ' + player.name).addClass('ready');
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

/* User Picks a Character to Use & Render Battle Screen
---------------------------------------------------------------------------------------------------*/
var battleTemplate = $('#battleScreen').html();

$('body').on('click', '.ready', function(event) {
  // Allows for clicking Character Name
  event.preventDefault();
  console.log('clicked');
  $('.viewPort').html(battleTemplate);
});

/* Fight Logic
---------------------------------------------------------------------------------------------------*/
// var player = new Human ({
//   name:
//
// add property to h4, jQuery pull
// data-health="" data-melee="" data-ranged=""
// jquery grab data elememts
// $('.class).data("health") will equal 50
// });

$('body').on('click', '.atk1', function(event) {
  event.preventDefault();
  julius.melee(enemy1);
  $('.battleLog').prepend(julius.name + ' attacks with a Sword. He does ' + inflicted + ' damage to ' +  enemy1.name + '. ');
  if (enemy1.health > 0) {
    enemy1.melee(julius);
    $('.battleLog').prepend(enemy1.name + ' attacks back! It does ' + inflicted + ' damage to ' +  julius.name + '. ');
  } else {
    $('.battleLog').prepend(enemy1.name + ' is ded. '); // need to edit style of log to make damage and actions different
  }
});

$('body').on('click', '.atk2', function(event) {
  event.preventDefault();
  julius.ranged(enemy1);
  $('.battleLog').prepend('Caesar throws a Javalin. He does ' + inflicted + ' damage to ' + enemy.name + '. ');
  if (enemy1.health > 0) {
    enemy1.ranged(julius);
    $('.battleLog').prepend(enemy1.name + ' fires back! It does ' + inflicted + ' damage to ' +  julius.name + '. ');
  } else {
    $('.battleLog').prepend(enemy1.name + ' is ded. '); // need to edit style of log to make damage and actions different
  }
});







/* Victory/Loss Logic
---------------------------------------------------------------------------------------------------*/
