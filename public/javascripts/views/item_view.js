var ItemView = Backbone.View.extend({
  template: App.templates.item_view,
  el: '#item_details',
  events: {
    'click .prev' : 'previousItem',
    'click .next' : 'nextItem',
    'click .add_cart' : 'addToCart',
    'click .close' : 'menuView'
  },
  menuView: function(e) {
    e.preventDefault();
    App.router.navigate('', {trigger: true});
  },
  addToCart: function(e) {
    e.preventDefault();
    this.trigger('addToCart', String(this.getID()));
  },
  getID: function() {
    return +window.location.href.match(/\/([0-9]+)#?$/).pop();
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
  hide: function() {
    this.$el.hide();
  },
  show: function() {
    this.$el.show();
  },
  render: function(item) {
    this.$el.html(this.template(item));
  },
});