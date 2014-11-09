(function(){

  App.Collections.Combatants = Backbone.Collection.extend({

    model: App.Models.Character,
    url: 'http://tiy-atl-fe-server.herokuapp.com/collections/HumansVsPlants2'

  });

}()); // end of IIF
