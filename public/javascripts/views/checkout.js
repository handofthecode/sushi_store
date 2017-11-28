var Checkout = Backbone.View.extend({
  template: App.templates.checkout,
  el: '#checkout',
  hide: function() {
    this.$el.hide();
  },
  show: function() {
    this.$el.show();
  },
  add: function() {

  },
  subtract: function() {

  },
  render: function() {
    var self = this;
    this.$el.html(this.template({
      items: self.collection.toJSON(),
      total: self.collection.getTotal()
    }));
  }
});

