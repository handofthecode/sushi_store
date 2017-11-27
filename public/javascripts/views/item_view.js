var ItemView = Backbone.View.extend({
  template: App.templates.item_view,
  el: '#content',
  events: {

  },
  render: function(item) {
    this.$el.html(this.template(item))
  },
});