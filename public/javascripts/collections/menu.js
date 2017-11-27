var Menu = Backbone.Collection.extend({
  model: MenuItem,
  initialize: function() {
    this.reset(MENU_ITEMS)
  }
});