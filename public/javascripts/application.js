var App = {
  templates: JST,
  $el: $('body'),
  renderCartView: function() {
    $('#cart').slideDown();
  },
  renderMenu: function() {
    this.menu = new MenuView();
  },
  showMenu: function() {
    this.menu.show();
    this.itemView.remove();
  },
  renderItemView: function(id) {
    this.menu.hide();
    this.itemView.render(this.menu.collection.get(id).toJSON());
    router.navigate('item/' + id);
  },
  createViews: function() {
    this.renderMenu();
    this.cart = new CartView();
    this.itemView = new ItemView();
  },
  registerEvents: function() {
    this.events = _.extend({}, Backbone.Events);
    this.events.listenTo(this.menu, 'addToCart', this.addToCart.bind(this));
    this.events.listenTo(this.menu, 'itemView', this.renderItemView.bind(this));
  },
  addToCart: function(id) {
    this.cart.add(this.menu.collection.get(id));
  },
  init: function() {
    this.createViews();
    this.registerEvents();
  }
}

var router = new (Backbone.Router.extend({
  routes: {
    "item/:number" : "renderItemView",
    "/" : "showMenu"
  },
  renderItemView: function(id) {
    var item = App.menu.collection.get(id);
    App.itemView.render(id);
  }
}))();

Backbone.history.start({pushState: true});

Handlebars.registerHelper('imagePath', function(name) {
  return "../images/" + name.toLowerCase().replace(/ /g, '-') + '.jpg';
});

Handlebars.registerHelper("formatPrice", function(price) {
  return (+price).toFixed(2);
});