define(function(require) {
  'use strict';

  var Handlebars = require('handlebars');
  var moment = require('moment');

  Handlebars.registerHelper('date', function(date) {
    if(date) {
      return moment(date).local().format('DD/MM/YYYY');
    }
  });

  Handlebars.registerHelper('date_day', function(date) {
    if(date) {
      return moment(date).local().format('DD MMM YYYY');
    }
  });

  Handlebars.registerHelper('date_time', function(date) {
    if(date) {
      return moment(date).local().format('HH:mm');
    }
  });

  Handlebars.registerHelper('from_now', function(date) {
    if(date) {
      return moment(date).local().fromNow();
    }
  });

});
