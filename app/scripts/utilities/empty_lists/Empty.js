define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var templates = require('templates');

  var Empty = Marionette.ItemView.extend({

    template: templates.Empty,

    tagName: 'tr',

    initialize: function(options) {
      this.options = options;
    },

    templateHelpers: function() {
      return this.options.viewData;
    }

  });

  return Empty;
});
