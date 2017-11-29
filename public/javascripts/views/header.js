var Header = Backbone.View.extend({
  template: App.templates.unique_items_count,
  el: '.cart',
  events: {
    'click a' : 'menuView'
  },
  menuView: function(e) {
    e.preventDefault();
    App.router.navigate('', {trigger: true});
  },
  render: function() {
    this.$el.html(this.template({
      unique: this.collection.unique()
    }));
  },
  initialize: function(collection) {
    this.collection = collection;
  } 
})