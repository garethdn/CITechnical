define(function(require, exports, module) {
  'use strict';

  var Marionette = require('marionette');
  var AppRouter = require('AppRouter');

  var App = new Marionette.Application();

  App.addInitializer(_.bind(function(options) {
    new AppRouter();
  }, this));

  App.on('start', function(options) {
    Backbone.history.start();
  });

  return App;
});