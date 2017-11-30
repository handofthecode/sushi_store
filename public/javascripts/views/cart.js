var CartView = Backbone.View.extend({
  el: "#cart",
  template: App.templates.cart,
  events: {
    'click .empty_cart' : 'deleteAll',
    'click .checkout' : 'checkout',
  },
  notEmpty: function() {
    return this.collection.length > 0;
  },
  show: function() {
    if (this.notEmpty()) this.$el.slideDown();
  },
  hide: function() {
    this.$el.slideUp();
  },
  deleteAll: function(e) {
    e.preventDefault();
    this.collection.destroyAll();
    this.hide();
  },
  checkout: function(e) {
    e.preventDefault();
    App.router.navigate('checkout', {trigger: true})
  },
  add: function(item) {
    this.collection.addItem(item);
    this.show();
  },
  render: function() {
    this.header.render();
    if (this.notEmpty()) {
      this.$el.html(this.template({
        total: this.collection.getTotal(),
        items: this.collection.toJSON()
      }));
    }
  },
  initialize: function() {
    this.collection = new Cart();
    this.header = new Header(this.collection);
    this.listenTo(this.collection, 'update', this.render);
    this.render();
    this.show();
  }
});