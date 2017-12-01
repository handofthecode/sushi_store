var Payment = Backbone.View.extend({
  template: App.templates.payment_form,
  el: '#payment',
  events: {
    'change input[type="checkbox"]' : 'fillAddress',
    'click .total' : 'toCheckout',
    'submit form' : 'placeOrder'
  },
  placeOrder: function(e) {
    App.router.navigate('', {trigger: true});
  },
  toCheckout: function(e) {
    e.preventDefault();
    App.router.navigate('checkout', {trigger: true});
  },
  fillAddress: function(e) {
    if (e.target.checked) {
      var delivAddr = this.getDeliveryAddress();
    } else {
      delivAddr = {};
    }
    this.$el.find('#billAdd').val(delivAddr.address);
    this.$el.find('#billCity').val(delivAddr.city);
    this.$el.find('#billState').val(delivAddr.state);
    this.$el.find('#billZip').val(delivAddr.zip);
  },
  getDeliveryAddress: function() {
    return { 
      address: this.$el.find('#delAdd').val(),
      city: this.$el.find('#delCity').val(),
      state: this.$el.find('#delState').val(),
      zip: this.$el.find('#delZip').val(),
    }
  },
  render: function(order) {
    this.$el.html(this.template({
      total: order.total,
      items: order.items
    }));
  },
  show: function() {
    this.$el.show();
  },
  hide: function() {
    this.$el.hide();
  }
});