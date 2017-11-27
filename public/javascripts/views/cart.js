var CartView = Backbone.View.extend({
  el: "#cart",
  template: App.templates.cart,
  // itemTemplate: App.templates.cart_item,
  uniqueCountTemplate: App.templates.unique_items_count,
  events: {
    'click .empty_cart' : 'deleteAll'
  },
  deleteAll: function(e) {
    e.preventDefault();
    this.collection.destroyAll();
    this.render();
    this.$el.slideUp();
  },
  add: function(item) {
    this.collection.addItem(item);
    this.render(item);
    this.$el.slideDown();
  },
  render: function() {
    this.$el.html(this.template({
      total: this.collection.getTotal(),
      items: this.collection.toJSON()
    }));
    $('.cart').html(this.uniqueCountTemplate({
      unique: this.collection.unique()
    }));
  },
  initialize: function() {
    this.collection = new Cart();
    this.render();
  }
});