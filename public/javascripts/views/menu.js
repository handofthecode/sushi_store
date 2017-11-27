var MenuView = Backbone.View.extend({
  template: App.templates.menu,
  el: '#content',
  events: {
    'click .add_cart' : 'addToCart',
    'click header' : 'itemView'
  },
  itemView: function() {
    this.trigger('itemview', id)
  },
  hide: function() {
    this.$el.find('#items').hide();
  },
  show: function() {
    this.$el.find('#items').show();
  },
  getID: function(e) {
    return $(e.target).closest('li').attr('data-id');
  },
  itemView: function(e) {
    e.preventDefault()
    this.trigger('itemView', this.getID(e));
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
