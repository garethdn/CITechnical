define(function(require) {
  'use strict';
  
  var Marionette = require('marionette');
  var templates = require('templates');

  var Error = Marionette.ItemView.extend({

    className: 'error-container',

    template: templates.Error,

    initialize: function(options) {
      if (options && options.viewData) {
        this.viewData = options.viewData;
      } else {
        this.viewData = {};
      }
    },

    templateHelpers:function() {
      return this.viewData;
    }

  });

  return Error;
});
