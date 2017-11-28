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
    this.itemView.removeItem();
  },
  renderItemView: function(id) {
    this.menu.hide();
    this.itemView.removeItem();
    this.itemView.render(this.menu.collection.get(id).toJSON());
  },
  createViews: function() {
    this.renderMenu();
    this.cart = new CartView();
    this.itemView = new ItemView();
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
    ":id" : "renderItemView"
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