var App = {
  templates: JST,
  $el: $('body'),
  show: function(view) {
    view === 'menu' ? this.menu.show() : this.menu.hide();
    view === 'itemView' ? this.itemView.show() : this.itemView.hide();
    view === 'checkout' ? this.checkout.show() : this.checkout.hide();
  },
  showMenu: function() {
    this.show('menu');
    this.cart.render();
    this.cart.show();
  },
  showItemView: function(id) {
    this.show('itemView');
    this.itemView.render(this.menu.collection.get(id).toJSON());
  },
  showCheckout: function() {
    this.checkout.render();
    this.cart.hide();
    this.show('checkout');
  },
  createViews: function() {
    this.menu = new MenuView();
    this.cart = new CartView();
    this.itemView = new ItemView();
    this.checkout = new Checkout(this.cart.collection);
  },
  registerEvents: function() {
    this.events = _.extend({}, Backbone.Events);
    this.events.listenTo(this.menu, 'addToCart', this.addToCart.bind(this));
    this.events.listenTo(this.itemView, 'addToCart', this.addToCart.bind(this));
  },
  addToCart: function(id) {
    this.cart.add(this.menu.collection.get(id));
  },
  init: function() {
    this.createViews();
    this.registerEvents();
    this.router = new Router();
  }
}

var Router = Backbone.Router.extend({
  routes: {
    "menu" : 'showMenu',
    "checkout" : "showCheckout",
    ":id" : "showItemView"
  },
  showCheckout: function() {
    App.showCheckout();
  },
  showItemView: function(id) {
    var item = App.menu.collection.get(id);
    App.showItemView(item);
  },
  showMenu: function() {
    App.showMenu();
  },
  initialize: function () {
    this.route(/^\/?$/, 'index', this.showMenu);
  },
});

Backbone.history.start({
  pushState: true
});

Handlebars.registerHelper('imagePath', function(name) {
  return "../images/" + name.toLowerCase().replace(/ /g, '-') + '.jpg';
});

Handlebars.registerHelper("formatPrice", function(price) {
  return (+price).toFixed(2);
});