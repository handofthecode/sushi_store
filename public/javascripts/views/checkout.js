var Checkout = Backbone.View.extend({
  template: App.templates.checkout,
  el: '#checkout',
  events: {
    'click .fa-minus' : 'subtractOne',
    'click .fa-plus' : 'addOne',
    'submit form' : 'pay',
    'click footer a' : 'reset'
  },
  pay: function(e) {
    e.preventDefault();
    App.router.navigate('pay', {trigger: true});
  },
  reset: function(e) {
    e.preventDefault();
    this.collection.destroyAll();
    App.router.navigate('/', {trigger: true});
  },
  hide: function() {
    this.$el.hide();
  },
  show: function() {
    this.$el.show();
  },
  getID: function(e) {
    return $(e.target).closest('tr').attr('data-id');
  },
  getItem: function(e) {
    var id = this.getID(e);
    return this.collection.get(id);
  },
  addOne: function(e) {
    e.preventDefault();
    var item = this.getItem.call(this, e);
    this.collection.addItem(item);
    this.render();
  },
  subtractOne: function(e) {
    e.preventDefault();
    var item = this.getItem.call(this, e);
    this.collection.subtractItem(item);
    this.render();
  },
  render: function() {
    this.$el.html(this.template({
      items: this.collection.toJSON(),
      total: this.collection.getTotal()
    }));
  },
  initialize: function(collection) {
    this.collection = collection;
  }
});

