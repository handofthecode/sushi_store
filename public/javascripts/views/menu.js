var MenuView = Backbone.View.extend({
  template: App.templates.menu,
  el: '#items',
  events: {
    'click .add_cart' : 'addToCart',
    'click header' : 'itemView'
  },
  hide: function() {
    this.$el.hide();
  },
  show: function() {
    this.$el.show();
  },
  getID: function(e) {
    return $(e.target).closest('li').attr('data-id');
  },
  itemView: function(e) {
    e.preventDefault()
    App.router.navigate(this.getID(e), {trigger: true});
  },
  addToCart: function(e) {
    e.preventDefault();
    this.trigger('addToCart', this.getID(e));
  },
  get: function(id) {
    this.collection.get(id)
  },
  render: function() {
    this.$el.html(this.template({
      item: this.collection.toJSON()
    }));
  },
  initialize: function() {
    this.collection = new Menu();
    $.when(this.render()).then(this.$el.delay(100).slideDown());
  }
});
