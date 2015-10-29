define(function(require) {
  'use strict';

  var Marionette = require('marionette');
  var templates = require('templates');
  var GreekGodsItemView = require('./GreekGodsItemView');
  var EmptyView = require('../utilities/empty_lists/Empty');
  var ErrorView = require('../utilities/errors/TableError');
  var LoadingView = require('../utilities/loading/TableLoading');

  var GreekGodsCompositeView = Marionette.CompositeView.extend({

    template: templates.GreekGodsCompositeView,

    id: 'greek-gods',

    childViewContainer: 'tbody',

    childView: GreekGodsItemView,

    emptyView: EmptyView,

    emptyViewOptions: function() {
      return {
        collection: this.collection,
        viewData: {
          colspan: 3
        }
      };
    },

    events: {
      'keypress [name="search"]'            : 'onKeyPressSearch',
      'click [data-action="search"]'        : 'search',
      'change [name="error"]'               : 'onToggleError'
    },

    initialize: function(options){
      this.listenTo(this.collection, 'request',   this.onRequestCollection);
      this.listenTo(this.collection, 'reset',     this.onResetCollection);
      this.listenTo(this.collection, 'error',     this.onErrorCollection);
    },

    onRequestCollection: function() {
      this.startLoading();
    },

    onResetCollection: function() {
      this.clearError();
      this.stopLoading();
    },

    onErrorCollection: function(collection, response, options) {
      this.stopLoading();

      response.responseText = JSON.parse(response.responseText);

      this.errorView = new ErrorView({
        viewData: {
          colspan: 3,
          response: response
        }
      });
      // Manually append the `errorView` to the `childViewContainer`
      this.$(this.childViewContainer).html(this.errorView.render().el);
    },

    startLoading: function() {
      this.destroyEmptyView();

      this.loadingMessageTimeout = _.delay(_.bind(function() {
        this.loadingView.updateMessage('Your request is taking longer than usual, please be patient...');
      }, this), 5000);

      this.loadingView = new LoadingView({
        viewData: { colspan: 3 }
      });

      this.$(this.childViewContainer).html(this.loadingView.render().el);
    },

    stopLoading: function() {
      clearTimeout(this.loadingMessageTimeout);

      if (this.loadingView) {
        this.loadingView.destroy();
      }
    },

    clearError: function() {
      if (this.errorView) {
        this.errorView.destroy();
      }
    },

    onKeyPressSearch: function(e) {
      var code = e.keyCode || e.which;

      this.collection.filters[e.currentTarget.name] = e.currentTarget.value;

      // If `Enter` key, `preventDefault` and start a `search`
      if(code === 13) {
        e.preventDefault();

        this.collection.fetch({ reset: true });
        return false;
      }
    },

    onToggleError: function(e) {
      this.collection.filters.error = e.currentTarget.checked;
    },

    search: function(e) {
      e.preventDefault();

      this.collection.filters.search = this.$('[name="search"]').val();
      this.collection.fetch({ reset: true });
    }

  });

  return GreekGodsCompositeView;

});