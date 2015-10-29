define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var templates = require('templates');

  var Loading = Marionette.ItemView.extend({

    className: 'loading-container',

    template: templates.Loading,

    initialize: function(options) {
      if (options && options.viewData) {
        this.viewData = options.viewData;
      } else {
        this.viewData = {};
      }
    },

    templateHelpers:function() {
      return this.viewData;
    },

    updateMessage: function(message) {
      this.viewData.message = message;
      this.render();
    }

  });

  return Loading;
});
