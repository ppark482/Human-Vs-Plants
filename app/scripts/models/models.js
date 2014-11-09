(function(){

  App.Models.Character = Backbone.Model.extend({

    defaults: {
      name: '',
      maxHP: '',
      health: '',
      melee: function(target) {
      },
      mDamage: '',
      ranged: function(target) {
      },
      rDamage: '',
      defense: '',
      mWeapon: '',
      rWeapon: '',
      avatar: ''
    },

    idAttribute: '_id', // need because we are using MongoDB

    initialize: function() {}

  });

}()); // end of IIF

/*
// Base Attributes of Human Characters ----------------
var julius = new App.Models.Character({
  name: 'Julius',
  maxHP: 200,
  health: this.maxHP,
  mDamage: 15,
  rDamage: 5,
  defense: 10,
  mWeapon: 'Sword',
  rWeapon: 'Javelin',
  avatar: 'images/caesar-headshot.jpg'
});

var abe = new App.Models.Character({
  name: 'Abe',
  maxHP: 150,
  health: this.maxHP,
  mDamage: 10,
  rDamage: 15,
  defense: 5,
  mWeapon: 'Bayonet',
  rWeapon: 'Rifle',
  avatar: 'images/lincoln-headshot.jpg'
});

var barbie = new App.Models.Character({
  name: 'Barbie',
  maxHP: this.maxHP,
  health: 100,
  mDamage: 5,
  rDamage: 10,
  defense: 15,
  mWeapon: 'Kick',
  rWeapon: 'Taser',
  avatar: 'images/barbie-headshot.jpeg'
});
*/
