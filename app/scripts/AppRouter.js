define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var AppLayout = require('AppLayout');
  var GreekGodsCompositeView = require('greek_gods/GreekGodsCompositeView');
  var GreekGodsCollection = require('greek_gods/GreekGodsCollection');

  var AppRouter = Marionette.AppRouter.extend({

    routes: {
      '': 'gods'
    },

    initialize: function(options){
      this.appLayout = new AppLayout({
        el: '#app-container'
      });

      this.appLayout.render();
    },

    gods: function(){
      var greekGodsView = new GreekGodsCompositeView({
        collection: new GreekGodsCollection()
      });

      this.appLayout.contentRegion.show(greekGodsView);

      greekGodsView.collection.fetch({ reset: true });
    }

  });

  return AppRouter;

});