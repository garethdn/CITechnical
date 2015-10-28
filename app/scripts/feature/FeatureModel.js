define(function(require) {
  'use strict';

  var Backbone = require('backbone');

  var FeatureModel = Backbone.Model.extend({

    idAttribute: 'id',

    defaults: {
      id: undefined,
      name: '',
      description: ''
    }

  });

  return FeatureModel;

});