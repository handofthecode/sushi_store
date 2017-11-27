var Cart = Backbone.Collection.extend({
  unique: function() {
    return this.length;
  },
  setTotal: function() {
    this.total = this.toJSON().reduce(function(a, b) {
      return a + b.price * b.quantity;
    }, 0);

    return this;
  },
  getTotal: function() { return this.total; },
  setQuantity: function() {
    this.quantity = this.toJSON().reduce(function(a, b) {
      return a + b.quantity;
    }, 0);

    return this;
  },
  getQuantity: function() { return this.quantity; },
  readStorage: function() {
    var stored_cart = JSON.parse(localStorage.getItem("sushi_cart"));
    this.reset(stored_cart);
    this.setTotal().setQuantity();
  },
  updateStorage: function() {
    localStorage.setItem('sushi_cart', JSON.stringify(this.toJSON()));
  },
  addItem: function(item) {
    var existing = this.get(item.get('id'));

    if (existing) {
      existing.set('quantity', existing.get('quantity') + 1);
    } else {
      existing = item.clone();
      existing.set('quantity', 1);
      this.add(existing);
    }
    this.update();
  },
  destroy: function(id) {
    this.remove(id);
    this.update();
  },
  destroyAll: function() {
    this.reset();
    this.update();
  },
  update: function() {
    this.setTotal().setQuantity().updateStorage();
  },
  initialize: function() {
    this.readStorage();
  }
});