define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var templates = require('templates');

  var FeatureItemView = Marionette.ItemView.extend({

    template: templates.FeatureItemView,

    tagName: 'tr'

  });

  return FeatureItemView;

});