var ItemView = Backbone.View.extend({
  template: App.templates.item_view,
  el: '#content',
  events: {
    'click .prev' : 'previousItem',
    'click .next' : 'nextItem',
    'click .add_cart' : 'addToCart'
  },
  addToCart: function(e) {
    console.log('test')
    e.preventDefault();
    this.trigger('addToCart', String(this.getID(e)));
  },
  getID: function() {
    return +window.location.href.match(/\/(\d+)$/).pop();
  },
  previousItem: function(e) {
    var id = this.getID() - 1;
    if (id <= 0) id = MENU_ITEMS.length;
    App.router.navigate(String(id), {trigger: true});
  },
  nextItem: function() {
    var id = this.getID() + 1;
    if (id > MENU_ITEMS.length) id = 1;
    App.router.navigate(String(id), {trigger: true});
  },
  removeItem: function() {
    $('#item_details').remove();
  },
  render: function(item) {
    this.$el.append(this.template(item))
  },
});