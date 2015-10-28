define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var AppLayout = require('AppLayout');
  var FeatureCompositeView = require('feature/FeatureCompositeView');
  var FeatureCollection = require('feature/FeatureCollection');

  var AppRouter = Marionette.AppRouter.extend({

    routes: {
      ''        : 'home',
      'home'    : 'home',
      'about'   : 'about',
      'contact' : 'contact'
    },

    initialize: function(options){
      this.appLayout = new AppLayout({
        el: '#app-container'
      });

      this.appLayout.render();
    },

    home: function(){
      console.log('Home route');

      this.appLayout.contentRegion.show(new FeatureCompositeView({
        collection: new FeatureCollection()
      }));
    },

    about: function(){
      console.log('About route');
    },

    contact: function(){
      console.log('Contact route');
    }

  });

  return AppRouter;

});