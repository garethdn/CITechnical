define(function(require) {
  'use strict';

  var Handlebars = require('handlebars');

  Handlebars.registerHelper('toUpper', function(text) {
    return text.toUpperCase();
  });

  Handlebars.registerHelper('toLower', function(text) {
    return text.toLowerCase();
  });

});
