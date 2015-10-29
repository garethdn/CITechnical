define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var GreekGodsModel = require('./GreekGodsModel');

  var GreekGodsCollection = Backbone.Collection.extend({

    url: 'https://athena-7.herokuapp.com/ancients.json',
    
    model: GreekGodsModel,

    initalize: function(models, options){
      // switch on and off local caching
      // pass `localCache:false` to the collection constructor to use browser caching
      // 
      // e.g. `new GreekGodsCollection([], { localCache:false })`
      if (options.localCache) {
        this.localCache = options.localCache;
      }
    },

    localCache: true,

    // Only the search and error filter are stored in here, but could be used to store sort params, page, superpower etc.
    filters: {},

    // Cached ancients are stored here
    resultCache: {},

    // Override Backbone fetch for caching functionality
    fetch: function(options){
      // First check to see if local caching is enabled, we have cached results for the current search query, and there is no error filter
      if (this.localCache && this.isSearchCached() && !this.filters.error) {
        // If we have the cached result, reset the collection with the result
        // --------------------------------------------------------
        // NOTE
        // --------------------------------------------------------
        // We should let the browser handle caching network requests
        // If the request has been made before and the cache hasn't expired the
        // browser will return a 304 (unmodified), i.e. the network will not be hit
        //
        // Caching results in a JS object seems overly-elaborate and unnecessary and, off the top of my head
        // can't think of a scenario where you'd need to implement this kind of behaviour
        console.info('Results retrieved from local cache');
        return this.reset(this.getCachedResults());
      }

      options = options || {};
      options.data = options.data || {};
      // Extend the data object with our collection filters if any exist, and remove falsy 
      // object properties with the custom `compactObject` underscore helper
      options.data = _.compactObject(_.extend({}, this.filters, options.data));

      // Hand back to Backbone's fetch method
      return Backbone.Collection.prototype.fetch.call(this, options);
    },

    parse: function(response, options) {
      var ancients;
      // In a RESTful API we wouldn't need to do this. If the search yielded no results or a subset of results the response should still be 
      // an array, not an object with an `ancients` property in it
      if (response.ancients) {
        ancients = response.ancients;
      } else {
        ancients = response;
      }

      if (this.localCache && !this.filters.error) {
        this.cacheResults(ancients);
      }

      return ancients;
    },

    cacheResults: function(ancients) {
      // Only caching requests that have a `search` param, as per requirement 5
      // If no search param is specified, no results are cached
      if (!this.filters.search) {
        return;
      }
      // store results
      this.resultCache[this.filters.search] = ancients;
    },

    isSearchCached: function() {
      if (!this.filters.search) {
        return false;
      }

      return _.isArray(this.resultCache[this.filters.search]);
    },

    getCachedResults: function(){
      return this.resultCache[this.filters.search];
    }

  });

  return GreekGodsCollection;

});