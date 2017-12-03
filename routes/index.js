var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var filePath = path.resolve(path.dirname(__dirname), 'data/orders.json'); 
var data = JSON.parse(fs.readFileSync(filePath, "utf8"));

router.get('/', function(req, res, next) {
  res.render('layout');
});

router.route('/orders').get(function(req, res) {
  res.json(data);
}).post(function(req, res) {
  var allOrders = data.orders;
  req.body.id = data.lastID++;
  allOrders.push(req.body);
  fs.writeFileSync(filePath, JSON.stringify({
    orders: allOrders,
    lastID: data.lastID
  }), 'utf8');
  res.send('200');
});

module.exports = router;
