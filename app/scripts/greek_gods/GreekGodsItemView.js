define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var templates = require('templates');

  var GreekGodsItemView = Marionette.ItemView.extend({

    template: templates.GreekGodsItemView,

    tagName: 'tr'

  });

  return GreekGodsItemView;

});