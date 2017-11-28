var CartView = Backbone.View.extend({
  el: "#cart",
  template: App.templates.cart,
  uniqueCountTemplate: App.templates.unique_items_count,
  events: {
    'click .empty_cart' : 'deleteAll',
    'click .checkout' : 'checkout'
  },
  show: function() {
    this.$el.slideDown();
  },
  hide: function() {
    this.$el.slideUp();
  },
  deleteAll: function(e) {
    e.preventDefault();
    this.collection.destroyAll();
    this.render();
    this.hide();
  },
  checkout: function(e) {
    e.preventDefault();
    App.router.navigate('checkout', {trigger: true})
  },
  add: function(item) {
    this.collection.addItem(item);
    this.render(item);
    this.show();
  },
  render: function() {
    if (this.collection.length > 0) this.show();
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