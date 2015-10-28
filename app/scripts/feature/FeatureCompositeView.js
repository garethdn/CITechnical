define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var templates = require('templates');
  var FeatureItemView = require('./FeatureItemView');

  var FeatureCompositeView = Marionette.CompositeView.extend({

    template: templates.FeatureCompositeView,

    childViewContainer: 'tbody',

    childView: FeatureItemView

  });

  return FeatureCompositeView;

});