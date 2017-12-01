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
  toString: function() {
    var result = '';
    this.toJSON().forEach(function(item) {
      result += item.quantity + ' x ' + item.name + ', ';
    });

    return result.slice(0, -2);
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
  subtractItem: function(item) {
    var existing = this.get(item.get('id'));

    if (existing.get('quantity') === 1) {
      this.destroy(item);
    } else {
      existing.set('quantity', existing.get('quantity') - 1);
      this.update();
    }
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
    this.trigger('update');
  },
  initialize: function() {
    this.readStorage();
  }
});