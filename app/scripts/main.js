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
    enemy_health = target.health = target.health - (inflicted = (_.random(0, 15) + this.rdamage));
    console.log('Damage inflicted = ' + inflicted);
    console.log('Enemy health = ' + target.health);

  }
  this.rdamage = options.rdamage;
  this.defense = options.defense;
  this.mweapon = options.mweapon;
  this.rweapon = options.rweapon;
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
  name: 'Vicious Vine Maple',
  health: 150,
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
  player = new Human ({
    name: $('.caesar h4').data('name'),
    health: $('.caesar h4').data('health'),
    mdamage: $('.caesar h4').data('mdamage'),
    rdamage: $('.caesar h4').data('rdamage'),
    defense: $('.caesar h4').data('defense'),
    mweapon: $('.caesar h4').data('mweapon'),
    rweapon: $('.caesar h4').data('rweapon')
  });
  event.preventDefault();
  $('.abe').css('display', 'none');
  $('.barbie').css('display', 'none');
  $('.caesar img').removeClass('profilePic').addClass('profilePicClicked');
  $('.caesar h4').text('Pick ' + player.name).addClass('ready');
});

$('body').on('click', '.abe', function(event) { // User picks abe
  console.log('picked abe');
  player = new Human ({
    name: $('.abe h4').data('name'),
    health: $('.abe h4').data('health'),
    mdamage: $('.abe h4').data('mdamage'),
    rdamage: $('.abe h4').data('rdamage'),
    defense: $('.abe h4').data('defense'),
    mweapon: $('.abe h4').data('mweapon'),
    rweapon: $('.abe h4').data('rweapon')
  });
  event.preventDefault();
  $('.caesar').css('display', 'none');
  $('.barbie').css('display', 'none');
  $('.abe img').removeClass('profilePic').addClass('profilePicClicked');
  $('.abe h4').text('Pick ' + player.name).addClass('ready');
});

$('body').on('click', '.barbie', function(event) { // user picks barbie
  player = new Human ({
    name: $('.barbie h4').data('name'),
    health: $('.barbie h4').data('health'),
    mdamage: $('.barbie h4').data('mdamage'),
    rdamage: $('.barbie h4').data('rdamage'),
    defense: $('.barbie h4').data('defense'),
    mweapon: $('.barbie h4').data('mweapon'),
    rweapon: $('.barbie h4').data('rweapon')
  });
  event.preventDefault();
  $('.abe').css('display', 'none');
  $('.caesar').css('display', 'none');
  $('.barbie img').removeClass('profilePic').addClass('profilePicClicked');
  $('.barbie h4').text('Pick ' + player.name).addClass('ready');
});

/* User Picks a Character to Use & Render Battle Screen
---------------------------------------------------------------------------------------------------*/
var battleTemplate = $('#battleScreen').html(),
    battleRender = _.template(battleTemplate),
    caesarImage = ('<img class="ggPic" src="../images/caesar-headshot.jpg" />'),
    abeImage = ('<img class="ggPic" src="../images/lincoln-headshot.jpg" />'),
    barbieImage = ('<img class="ggPic" src="../images/barbie-headshot.jpeg" />');


$('body').on('click', '.ready', function(event) {
  // Allows for clicking Character Name
  event.preventDefault();
  $('.viewPort').html(battleRender);
  $('.ggHP').append('<h4 data-name="' + player.name + '" data-health="' + player.health + '" data-mdamage="'+ player.mdamage +'" data-rdamage="' + player.rdamage + '"data-defense="' + player.defense + '"data-mweapon="' + player.mweapon +'"data-rweapon="' + player.rweapon +'">' + player.name + '</h4>');
  $('.atk1').append('Melee: ' + player.mweapon);
  $('.atk2').append('Ranged: ' + player.rweapon);
  if (player.name === 'Julius') {
    $('#ggFightImg').append(caesarImage);
    } else if (player.name === 'Abe') {
      $('#ggFightImg').append(abeImage);
      } else {
        $('#ggFightImg').append(barbieImage);
        }
  console.log(player);
});


/* Fight Logic
---------------------------------------------------------------------------------------------------*/

$('body').on('click', '.atk1', function(event) {
  event.preventDefault();
  player = new Human ({
    name: $('.ggHP h4').data('name'),
    health: $('.ggHP h4').data('health'),
    mdamage: $('.ggHP h4').data('mdamage'),
    rdamage: $('.ggHP h4').data('rdamage'),
    defense: $('.ggHP h4').data('defense'),
    mweapon: $('.ggHP h4').data('mweapon'),
    rweapon: $('.ggHP h4').data('rweapon')
  });
  player.melee(enemy1);
  $('.battleLog #pLog').prepend(player.name + ' attacks with a ' + player.mweapon + '. ' + player.name + ' does ' + inflicted + ' damage to ' +  enemy1.name + '. ').addClass('greenText');
  if (enemy1.health > 0) {
    enemy1.melee(player);
    // $('.ggHP').css('padding-right','')
    $('.battleLog #eLog').prepend(enemy1.name + ' attacks back! It does ' + inflicted + ' damage to ' +  player.name + '. ').addClass('redText');
  } else {
      $('.battleLog').prepend(enemy1.name + ' is ded. '); // need to edit style of log to make damage and actions different
      $('.bgPic').fadeOut();
      $('.battleLog').prepend("You've Won! ");
    }
});

$('body').on('click', '.atk2', function(event) {
  event.preventDefault();
  player = new Human ({
    name: $('.ggHP h4').data('name'),
    health: $('.ggHP h4').data('health'),
    mdamage: $('.ggHP h4').data('mdamage'),
    rdamage: $('.ggHP h4').data('rdamage'),
    defense: $('.ggHP h4').data('defense'),
    mweapon: $('.ggHP h4').data('mweapon'),
    rweapon: $('.ggHP h4').data('rweapon')
  });
  player.ranged(enemy1);
  $('.battleLog').prepend(player.name + ' uses a ' +  player.rweapon  + '. ' + player.name + ' does ' + inflicted + ' damage to ' + enemy1.name + '. ');
  if (enemy1.health > 0) {
    enemy1.ranged(player);
    $('.battleLog #eLog').prepend(enemy1.name + ' fires back! It does ' + inflicted + ' damage to ' +  player.name + '. ');
  } else {
      $('.battleLog').prepend(enemy1.name + ' is ded. '); // need to edit style of log to make damage and actions different
      $('.bgPic').fadeOut();
    }
});







/* Victory/Loss Logic
---------------------------------------------------------------------------------------------------*/
