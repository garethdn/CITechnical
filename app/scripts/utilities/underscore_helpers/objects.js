define(function(require){
  'use strict';

  // removes falsy values from objects
  _.mixin({
    compactObject : function(o) {
      var clone = _.clone(o);
      _.each(clone, function(v, k) {
          if(!v || parseInt(v) === 0) {
              delete clone[k];
          }
      });
      return clone;
    }
  });

});