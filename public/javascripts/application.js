var App = {
  templates: JST,
  $el: $('body'),
  renderCartView: function() {
    $('#cart').slideDown();
  },
  renderMenu: function() {
    this.menu = new MenuView();
  },
  createViews: function() {
    this.renderMenu();
    this.cart = new CartView();
    this.itemView = new ItemView();
  },
  registerEvents: function() {
    this.events = _.extend({}, Backbone.Events);
    this.events.listenTo(this.menu, 'addToCart', this.add.bind(this));
    this.events.listenTo(this.menu, 'renderItem');
  },
  registerRoutes: function() {
    var self = this;
    this.router = new (Backbone.Router.extend({
      routes: {
        "item/:number" : "renderItemView"
      },
      renderItemView: function(id) {
        var item = self.menu.collection.get(id);
        self.menu.hide();
        self.itemView.render(id);
      }
    }))();
  },
  add: function(id) {
    this.cart.add(this.menu.collection.get(id));
  },
  init: function() {
    this.createViews();
    this.registerEvents();
    this.registerRoutes();
  }
}

Handlebars.registerHelper('imagePath', function(name) {
  return "../images/" + name.toLowerCase().replace(/ /g, '-') + '.jpg';
});

Handlebars.registerHelper("formatPrice", function(price) {
  return (+price).toFixed(2);
});