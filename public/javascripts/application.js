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
    console.log('showing menu')
    this.menu.show();
    this.itemView.remove();
    router.navigate('/');
  },
  renderItemView: function(id) {
    console.log('showing itemView')
    this.menu.hide();
    this.itemView.render(this.menu.collection.get(id).toJSON());
    router.navigate(id);
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
    ":id" : "renderItemView",
    "/" : "showMenu"
  },
  renderItemView: function(id) {
    var item = App.menu.collection.get(id);
    App.renderItemView(item);
  },
  showMenu: function() {
    App.showMenu();
  },
}))();

Backbone.history.start({
  pushState: true,
});

Handlebars.registerHelper('imagePath', function(name) {
  return "../images/" + name.toLowerCase().replace(/ /g, '-') + '.jpg';
});

Handlebars.registerHelper("formatPrice", function(price) {
  return (+price).toFixed(2);
});