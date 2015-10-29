define(function(require) {
  'use strict';

  var Error = require('./Error');
  var templates = require('templates');

  var TableError = Error.extend({

    className: 'table-error-container',

    tagName: 'tr',

    template: templates.TableError

  });

  return TableError;
});
