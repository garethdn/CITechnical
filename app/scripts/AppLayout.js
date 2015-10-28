define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var templates = require('templates');

  var AppLayout = Marionette.LayoutView.extend({

    template: templates.AppLayout,

    regions: {
      'contentRegion' : '#region-content',
      'modalRegion'   : '#region-modal'
    },

    templateHelpers: function() {
      return {
        data: { name: 'Testing', id: 12345 }
      };
    }

  });

  return AppLayout;

});