var App = {
  templates: JST,
  $el: $('body'),
  renderCartView: function() {
    $('#cart').slideDown();
  },
  show: function(view) {
    view === 'menu' ? this.menu.show() : this.menu.hide();
    view === 'itemView' ? this.itemView.show() : this.itemView.hide();
    if (view === 'checkout') {
      this.checkout.show();
      this.cart.hide();
    } else {
      this.checkout.hide();
    }
  },
  showMenu: function() {
    this.show('menu');
    this.cart.render();
    this.cart.show();
  },
  renderItemView: function(id) {
    this.show('itemView');
    this.itemView.render(this.menu.collection.get(id).toJSON());
  },
  renderCheckout: function() {
    this.checkout.collection = this.cart.collection;
    this.checkout.render();
    this.cart.hide();
    this.show('checkout');
  },
  createViews: function() {
    this.menu = new MenuView();
    this.cart = new CartView();
    this.itemView = new ItemView();
    this.checkout = new Checkout();
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
    "checkout" : "renderCheckout",
    ":id" : "renderItemView"
  },
  renderCheckout: function() {
    App.renderCheckout();
  },
  renderItemView: function(id) {
    var item = App.menu.collection.get(id);
    App.renderItemView(item);
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