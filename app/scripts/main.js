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

  };
  this.rdamage = options.rdamage;
  this.defense = options.defense;
  this.mweapon = options.mweapon;
  this.rweapon = options.rweapon;
};

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
  this.stage = options.stage;
};




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
  // $('.abe').css('display', 'none');
  // $('.barbie').css('display', 'none');
  $('.caesar img').removeClass('profilePic').addClass('profilePicClicked');
  $('.abe img').removeClass('profilePicClicked').addClass('profilePic');
  $('.barbie img').removeClass('profilePicClicked').addClass('profilePic');
  $('.caesar h4').text('Pick ' + player.name).addClass('ready').append('<img class="arrow" src="../images/arrow-right.png">');
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
  // $('.caesar').css('display', 'none');
  // $('.barbie').css('display', 'none');
  $('.abe img').removeClass('profilePic').addClass('profilePicClicked');
  $('.caesar img').removeClass('profilePicClicked').addClass('profilePic');
  $('.barbie img').removeClass('profilePicClicked').addClass('profilePic');
  $('.abe h4').text('Pick ' + player.name).addClass('ready').append('<img class="arrow" src="../images/arrow-right.png">');

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
  // $('.abe').css('display', 'none');
  // $('.caesar').css('display', 'none');
  $('.barbie img').removeClass('profilePic').addClass('profilePicClicked');
  $('.caesar img').removeClass('profilePicClicked').addClass('profilePic');
  $('.abe img').removeClass('profilePicClicked').addClass('profilePic');
  $('.barbie h4').text('Pick ' + player.name).addClass('ready').append('<img class="arrow" src="../images/arrow-right.png">');
});

/* User Picks a Character to Use & Render Battle Screen Stage 1
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
  $('.headUnit span').html('<span class="invisible" data-name="' + player.name + '" data-health="' + player.health + '" data-mdamage="'+ player.mdamage +'" data-rdamage="' + player.rdamage + '"data-defense="' + player.defense + '"data-mweapon="' + player.mweapon +'"data-rweapon="' + player.rweapon +'">' + player.name + '</span>');
  // $('.ggHP').append('<h4 data-name="' + player.name + '" data-health="' + player.health + '" data-mdamage="'+ player.mdamage +'" data-rdamage="' + player.rdamage + '"data-defense="' + player.defense + '"data-mweapon="' + player.mweapon +'"data-rweapon="' + player.rweapon +'">' + player.name + '</h4>');
  // $('h1').append('<span class="invisible" data-name="' + player.name + '" data-health="' + player.health + '" data-mdamage="'+ player.mdamage +'" data-rdamage="' + player.rdamage + '"data-defense="' + player.defense + '"data-mweapon="' + player.mweapon +'"data-rweapon="' + player.rweapon +'">' + player.name + '</span>');
  $('.atk1').append('Melee: ' + player.mweapon);
  $('.atk2').append('Ranged: ' + player.rweapon);
  if (player.name === 'Julius') {
    $('#ggFightImg').append(caesarImage);
    $('.vsGG').append('Caesar ');
    } else if (player.name === 'Abe') {
      $('#ggFightImg').append(abeImage);
      $('.vsGG').append('Abraham ');
      } else {
        $('#ggFightImg').append(barbieImage);
        $('.vsGG').append('Barbie ');
        }
  console.log(player);
});


/* Fight Logic Stage 1
---------------------------------------------------------------------------------------------------*/
var postStageOne = $('#postStageOne').html(),
    stageTwo = $('#stageTwo').html(),
    postStageTwo = $('#postStageTwo').html(),
    stageBoss = $('#stageBoss').html(),
    postBoss = $('#postBoss').html(),
    endGameWin = function () {
      // refreshes the page after you win to start game over
      document.location.reload(true);
    };
    endGameLose = function () {
      // renders you lost
      $('.viewPort').html(endGameLose);
    };

var onStage1Clear = function () {
  // after clearing stage one, renders stage two
  $('.viewPort').html(postStageOne);
  setTimeout(stageTwoActivate,8000);
};

var enemy1 = new Plant({
  name: 'Vicious Vine Maple',
  health: 150,
  mdamage: 15,
  rdamage: 5
});

$('body').on('click', '.atk1', function(event) { // stage one melee attack and result
  event.preventDefault();
  player = new Human ({
    name: $('.headUnit span .invisible').data('name'),
    health: $('.headUnit span .invisible').data('health'),
    mdamage: $('.headUnit span .invisible').data('mdamage'),
    rdamage: $('.headUnit span .invisible').data('rdamage'),
    defense: $('.headUnit span .invisible').data('defense'),
    mweapon: $('.headUnit span .invisible').data('mweapon'),
    rweapon: $('.headUnit span .invisible').data('rweapon')
  });
  player.melee(enemy1);
  $('.battleLog #pLog').prepend(player.name + ' attacks with a ' + player.mweapon + '. ' + player.name + ' does ' + inflicted + ' damage to ' +  enemy1.name + '. ').addClass('greenText');
  if (enemy1.health > 0) {
    enemy1.melee(player);
    // $('.ggHP').css('padding-right','')
    $('.battleLog #eLog').prepend(enemy1.name + ' attacks back! It does ' + inflicted + ' damage to ' +  player.name + '. ').addClass('redText');
    if (player.health <= 0) {
      $('.battleLog').prepend('You ded...');
      setTimeout(endGameLose, 2000);
    }
  } else {
      $('.battleLog').prepend(enemy1.name + ' is ded. '); // need to edit style of log to make damage and actions different
      $('.bgPic').fadeOut();
      $('.battleLog').prepend("You've Won! ");
      setTimeout(onStage1Clear,3000);
    }
});

$('body').on('click', '.atk2', function(event) { // stage one ranged attack and result
  event.preventDefault();
  player = new Human ({
    name: $('.headUnit span .invisible').data('name'),
    health: $('.headUnit span .invisible').data('health'),
    mdamage: $('.headUnit span .invisible').data('mdamage'),
    rdamage: $('.headUnit span .invisible').data('rdamage'),
    defense: $('.headUnit span .invisible').data('defense'),
    mweapon: $('.headUnit span .invisible').data('mweapon'),
    rweapon: $('.headUnit span .invisible').data('rweapon')
  });
  player.ranged(enemy1);
  $('.battleLog').prepend(player.name + ' uses a ' +  player.rweapon  + '. ' + player.name + ' does ' + inflicted + ' damage to ' + enemy1.name + '. ');
  if (enemy1.health > 0) {
    enemy1.ranged(player);
    $('.battleLog #eLog').prepend(enemy1.name + ' fires back! It does ' + inflicted + ' damage to ' +  player.name + '. ');
    if (player.health <= 0) {
      $('.battleLog').prepend('You ded...');
      setTimeout(endGameLose, 4000);
    }
  } else {
      $('.battleLog').prepend(enemy1.name + ' is ded. '); // need to edit style of log to make damage and actions different
      $('.bgPic').fadeOut();
      $('.battleLog').prepend("You've Won! ");
      setTimeout(onStage1Clear,3000);
    }
});

/* Fight Logic Stage 2
---------------------------------------------------------------------------------------------------*/

var enemy2 = new Plant({ // Stage 2 enemy
  name: 'Carnivorous Calylophus',
  health: 300,
  mdamage: 15,
  rdamage: 15
});
var onStage2Clear = function () {
  $('.viewPort').html(postStageTwo);
  setTimeout(stageBossActivate,8000);
};
var stageTwoActivate = function () { // Renders stage two battle screen
  $('.viewPort').html(stageTwo);
  $('.atk1s2').append('Melee: ' + player.mweapon);
  $('.atk2s2').append('Ranged: ' + player.rweapon);
  if (player.name === 'Julius') {
    $('#ggFightImg').append(caesarImage);
    } else if (player.name === 'Abe') {
      $('#ggFightImg').append(abeImage);
      } else {
        $('#ggFightImg').append(barbieImage);
        }
};
$('body').on('click', '.atk1s2', function(event) { // stage two melee attack and result
  event.preventDefault();
  player = new Human ({
    name: $('.headUnit span .invisible').data('name'),
    health: $('.headUnit span .invisible').data('health'),
    mdamage: $('.headUnit span .invisible').data('mdamage'),
    rdamage: $('.headUnit span .invisible').data('rdamage'),
    defense: $('.headUnit span .invisible').data('defense'),
    mweapon: $('.headUnit span .invisible').data('mweapon'),
    rweapon: $('.headUnit span .invisible').data('rweapon')
  });
  player.melee(enemy2);
  $('.battleLog #pLog').prepend(player.name + ' attacks with a ' + player.mweapon + '. ' + player.name + ' does ' + inflicted + ' damage to ' +  enemy2.name + '. ').addClass('greenText');
  if (enemy2.health > 0) {
    enemy2.melee(player);
    // $('.ggHP').css('padding-right','')
    $('.battleLog #eLog').prepend(enemy2.name + ' attacks back! It does ' + inflicted + ' damage to ' +  player.name + '. ').addClass('redText');
  } else {
      $('.battleLog').prepend(enemy2.name + ' is ded. ');
      $('.bgPic').fadeOut();
      $('.battleLog').prepend("You've Won! ");
      setTimeout(onStage2Clear,3000);
    }
});

$('body').on('click', '.atk2s2', function(event) { // stage 2 range attack and result
  event.preventDefault();
  player = new Human ({
    name: $('.headUnit span .invisible').data('name'),
    health: $('.headUnit span .invisible').data('health'),
    mdamage: $('.headUnit span .invisible').data('mdamage'),
    rdamage: $('.headUnit span .invisible').data('rdamage'),
    defense: $('.headUnit span .invisible').data('defense'),
    mweapon: $('.headUnit span .invisible').data('mweapon'),
    rweapon: $('.headUnit span .invisible').data('rweapon')
  });
  player.ranged(enemy2);
  $('.battleLog').prepend(player.name + ' uses a ' +  player.rweapon  + '. ' + player.name + ' does ' + inflicted + ' damage to ' + enemy2.name + '. ');
  if (enemy2.health > 0) {
    enemy2.ranged(player);
    $('.battleLog #eLog').prepend(enemy2.name + ' fires back! It does ' + inflicted + ' damage to ' +  player.name + '. ');
  } else {
      $('.battleLog').prepend(enemy2.name + ' is ded. ');
      $('.bgPic').fadeOut();
      $('.battleLog').prepend("You've Won! ");
      setTimeout(onStage2Clear,3000); // waits two seconds and then renders post stage 2 screen
    }
});

/* Fight Logic Stage Boss
---------------------------------------------------------------------------------------------------*/
var enemyBoss = new Plant ({
  name: "Boss Balsam Fir",
  health: 500,
  mdamage: 20,
  rdamage: 20
});

var onBossClear = function () {
  $('.viewPort').html(postBoss);
  setTimeout(endGameWin,10000);
};

var stageBossActivate = function () {
  // renders boss fight and stage
  $('.viewPort').html(stageBoss);
  $('.atk1sB').append('Melee: ' + player.mweapon);
  $('.atk2sB').append('Ranged: ' + player.rweapon);
  if (player.name === 'Julius') {
    $('#ggFightImg').append(caesarImage);
    } else if (player.name === 'Abe') {
      $('#ggFightImg').append(abeImage);
      } else {
        $('#ggFightImg').append(barbieImage);
        }
};

$('body').on('click', '.atk1sB', function(event) {
  // stage boss melee attack and result
  event.preventDefault();
  player = new Human ({
    name: $('.headUnit span .invisible').data('name'),
    health: $('.headUnit span .invisible').data('health'),
    mdamage: $('.headUnit span .invisible').data('mdamage'),
    rdamage: $('.headUnit span .invisible').data('rdamage'),
    defense: $('.headUnit span .invisible').data('defense'),
    mweapon: $('.headUnit span .invisible').data('mweapon'),
    rweapon: $('.headUnit span .invisible').data('rweapon')
  });
  player.melee(enemyBoss);
  $('.battleLog #pLog').prepend(player.name + ' attacks with a ' + player.mweapon + '. ' + player.name + ' does ' + inflicted + ' damage to ' +  enemyBoss.name + '. ').addClass('greenText');
  if (enemyBoss.health > 0) {
    enemyBoss.melee(player);
    $('.battleLog #eLog').prepend(enemyBoss.name + ' attacks back! It does ' + inflicted + ' damage to ' +  player.name + '. ').addClass('redText');
  } else {
      $('.battleLog').prepend(enemyBoss.name + ' is ded. ');
      $('.bgPic').fadeOut();
      $('.battleLog').prepend("You've Won! ");
      setTimeout(onBossClear,3000);
    }
});

$('body').on('click', '.atk2sB', function(event) {
  // stage boss range attack and result
  event.preventDefault();
  player = new Human ({
    name: $('.headUnit span .invisible').data('name'),
    health: $('.headUnit span .invisible').data('health'),
    mdamage: $('.headUnit span .invisible').data('mdamage'),
    rdamage: $('.headUnit span .invisible').data('rdamage'),
    defense: $('.headUnit span .invisible').data('defense'),
    mweapon: $('.headUnit span .invisible').data('mweapon'),
    rweapon: $('.headUnit span .invisible').data('rweapon')
  });
  player.ranged(enemyBoss);
  $('.battleLog').prepend(player.name + ' uses a ' +  player.rweapon  + '. ' + player.name + ' does ' + inflicted + ' damage to ' + enemyBoss.name + '. ');
  if (enemyBoss.health > 0) {
    enemyBoss.ranged(player);
    $('.battleLog #eLog').prepend(enemyBoss.name + ' fires back! It does ' + inflicted + ' damage to ' +  player.name + '. ');
  } else {
      $('.battleLog').prepend(enemyBoss.name + ' is ded. ');
      $('.bgPic').fadeOut();
      $('.battleLog').prepend("You've Won! ");
      // waits two seconds and then renders post boss stage screen
      setTimeout(onBossClear,3000);
    }
});

/* Victory/Loss Logic
---------------------------------------------------------------------------------------------------*/
