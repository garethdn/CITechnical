define(function(require) {
  'use strict';

  var Backbone = require('backbone');

  var GreekGodsModel = Backbone.Model.extend({

    idAttribute: 'name',

    defaults: {
      superpower: 'undefined',
      name: '',
      description: ''
    },

    parse: function(response, options){
      // Only transforming the `superpower` property here because of requirement #2 - Display the results in capitals without using CSS transforms
      // text-transform: uppercase would be the obvious solution
      response.superpower = response.superpower.toUpperCase();

      return response;
      // Also see the `textTransformation` handlebar helper for a different implementation used on the `name` property
    }

  });

  return GreekGodsModel;

});