var ItemView = Backbone.View.extend({
  template: App.templates.item_view,
  el: '#content',
  events: {

  },
  remove: function() {
    $('#item_details').remove();
  },
  render: function(item) {
    this.$el.html(this.template(item))
  },
});