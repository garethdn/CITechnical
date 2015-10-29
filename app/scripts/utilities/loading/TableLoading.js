define(function(require) {
  'use strict';

  var Loading = require('./Loading');
  var templates = require('templates');

  var TableLoading = Loading.extend({

    className: 'table-loading-container',

    tagName: 'tr',

    template: templates.TableLoading

  });

  return TableLoading;
});
