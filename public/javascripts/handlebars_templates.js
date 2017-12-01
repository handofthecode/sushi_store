this["JST"] = this["JST"] || {};

this["JST"]["cart"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<li data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"		<figure>		<img src=\""
    + alias4((helpers.imagePath || (depth0 && depth0.imagePath) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"imagePath","hash":{},"data":data}))
    + "\" alt=\"cart-item\">		</figure>		<p>"
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + " x $"
    + alias4((helpers.formatPrice || (depth0 && depth0.formatPrice) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "</p>	</li>	";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<ul>	"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><section><h3>Your<br>shopping cart</h3><p class=\"total\">$"
    + container.escapeExpression((helpers.formatPrice || (depth0 && depth0.formatPrice) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.total : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "</p><p></p><footer><a class=\"left empty_cart\" href=\"#\">Empty cart</a><!----><a class=\"right checkout\" href=\"/checkout\">Checkout</a></footer></section>";
},"useData":true});

this["JST"]["checkout"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<tr data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">				<td><img src=\""
    + alias4((helpers.imagePath || (depth0 && depth0.imagePath) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"imagePath","hash":{},"data":data}))
    + "\"></td>				<td>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>				<td>					<span class=\"quantity_modifier\">						<i class=\"fa fa-minus\" aria-hidden=\"true\"></i>					</span>					<p>"
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "</p>					<span class=\"quantity_modifier\">						<i class=\"fa fa-plus\" aria-hidden=\"true\"></i>					</span>				</td>				<td>$"
    + alias4((helpers.formatPrice || (depth0 && depth0.formatPrice) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "</td>			</tr>			";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"img_top\"></div><section>	<h1>Order Details</h1>	<table>		<thead>		<tr>		<th>Item</th>		<th></th>		<th>Quantity</th>		<th>Price</th>		</tr>		</thead>		<tbody>			"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		</tbody>	</table>	<p>Total: <span class=\"total\">$"
    + container.escapeExpression((helpers.formatPrice || (depth0 && depth0.formatPrice) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.total : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "</span></p>	<footer>		<a href=\"/\">Cancel order</a>		<form action=\"/\" method=\"post\">			<input value=\"ORDER NOW!\" class=\"submit\" type=\"submit\">		</form>	</footer></section><div class=\"img_bottom\"></div>";
},"useData":true});

this["JST"]["item_view"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<div><div class=\"nav prev\"><img src=\"images/nav-prev.png\" alt=\"prev\"></div><figure><img src=\""
    + alias3((helpers.imagePath || (depth0 && depth0.imagePath) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"imagePath","hash":{},"data":data}))
    + "\" alt=\"selected-item\"></figure><article><a class=\"close\" href=\"/\">+</a><h1>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1><p>"
    + alias3(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p><footer><h2>$"
    + alias3((helpers.formatPrice || (depth0 && depth0.formatPrice) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "</h2><a class=\"add_cart\" href=\"#\">Add to cart</a></footer></article><aside><h3>Nutritional Information</h3><table><tbody><tr><td>Protein</td><td>"
    + alias3(((helper = (helper = helpers.protein || (depth0 != null ? depth0.protein : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"protein","hash":{},"data":data}) : helper)))
    + "</td></tr><tr><td>Fat (total)</td><td>"
    + alias3(((helper = (helper = helpers.fat || (depth0 != null ? depth0.fat : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"fat","hash":{},"data":data}) : helper)))
    + "</td></tr><tr><td>Carbohydrates</td><td>"
    + alias3(((helper = (helper = helpers.carbohydrates || (depth0 != null ? depth0.carbohydrates : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"carbohydrates","hash":{},"data":data}) : helper)))
    + "</td></tr><tr><td>Energy (kj)</td><td>"
    + alias3(((helper = (helper = helpers.energyKJ || (depth0 != null ? depth0.energyKJ : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"energyKJ","hash":{},"data":data}) : helper)))
    + "</td></tr><tr><td>Energy (kcal)</td><td>"
    + alias3(((helper = (helper = helpers.energyKC || (depth0 != null ? depth0.energyKC : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"energyKC","hash":{},"data":data}) : helper)))
    + "</td></tr><tr><td>Sugar</td><td>"
    + alias3(((helper = (helper = helpers.sugar || (depth0 != null ? depth0.sugar : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"sugar","hash":{},"data":data}) : helper)))
    + "</td></tr></tbody></table></aside><div class=\"nav next\"><img src=\"images/nav-next.png\" alt=\"next\"></div></div>";
},"useData":true});

this["JST"]["menu"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><article><header><figure><img src=\""
    + alias4((helpers.imagePath || (depth0 && depth0.imagePath) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"imagePath","hash":{},"data":data}))
    + "\" alt=\"menu-item\"></figure><h2 class=\"name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2></header><p class=\"price\">$"
    + alias4((helpers.formatPrice || (depth0 && depth0.formatPrice) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "</p><footer><a href=\"#\" class=\"add_cart\">Add to cart</a></footer></article></li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.item : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["payment_form"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div class=\"img_top\"></div><section>	<h1>Payment</h1>	<form action=\"/orders\" method=\"post\" id=\"user_info\">		<fieldset id=\"contact\">			<label for=\"name_first\">First Name</label>			<input type=\"text\" id=\"first\" name=\"first\">			<label for=\"name_last\">Last Name</label>			<input type=\"text\" id=\"name_last\" name=\"last\">			<label for=\"phone\">Phone Number</label>			<input type=\"tel\" id=\"phone\" name=\"phone\">			<label for=\"email\">Email</label>			<input type=\"email\" id=\"email\" name=\"email\">		</fieldset>		<fieldset id=\"del_address\">			<label for=\"delivAddr\">Delivery Address</label>			<input type=\"text\" id=\"delAdd\" name=\"delAdd\">			<label for=\"delivCity\">City</label>			<input type=\"text\" id=\"delCity\" name=\"delCity\">			<label for=\"delivState\">State</label>			<input type=\"text\" id=\"delState\" name=\"delState\">			<label for=\"delivZip\">Zip</label>			<input type=\"text\" id=\"delZip\" name=\"delZip\">		</fieldset>		<fieldset id=\"pay_address\">			<label><input type=\"checkbox\">use delivery address</label>			<label for=\"billAdd\">Billing Address</label>			<input type=\"text\" id=\"billAddr\" name=\"billAdd\">			<label for=\"billCity\">City</label>			<input type=\"text\" id=\"billCity\" name=\"billCity\">			<label for=\"billState\">State</label>			<input type=\"text\" id=\"billState\" name=\"billState\">			<label for=\"billZip\">Zip</label>			<input type=\"text\" id=\"billZip\" name=\"billZip\">		</fieldset>		<fieldset id=\"credit_card\">			<label for=\"ccNum\">Credit Cart Number				<input type=\"number\" id=\"ccNum\" max=\"9999999999999999\" name=\"ccNum\">			</label>			<label for=\"ccExp\">Exp.				<div>					<select name=\"ccMonth\">						<option value=\"1\">01</option>						<option value=\"2\">02</option>						<option value=\"3\">03</option>						<option value=\"4\">04</option>						<option value=\"5\">05</option>						<option value=\"6\">06</option>						<option value=\"7\">07</option>						<option value=\"8\">08</option>						<option value=\"9\">09</option>						<option value=\"10\">10</option>						<option value=\"11\">11</option>						<option value=\"12\">12</option> 					</select> / 					<select name=\"ccYear\">						<option value=\"1\">17</option>	<option value=\"2\">18</option>	<option value=\"3\">19</option>	<option value=\"4\">20</option>	<option value=\"5\">21</option>	<option value=\"6\">22</option>	<option value=\"7\">23</option>	<option value=\"8\">24</option>	<option value=\"9\">25</option>	<option value=\"10\">26</option>	<option value=\"11\">27</option>			</select>				</div>			</label>			<label for=\"CVV\">CVV				<input type=\"number\" id=\"CVV\" name=\"CVV\" max=\"999\">			</label>		</fieldset>		<div style=\"display: none\">			<input type=\"text\" name=\"total\" value=\"$"
    + alias3((helpers.formatPrice || (depth0 && depth0.formatPrice) || alias2).call(alias1,(depth0 != null ? depth0.total : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "\">			<input type=\"text\" name=\"items\" value=\""
    + alias3(((helper = (helper = helpers.items || (depth0 != null ? depth0.items : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"items","hash":{},"data":data}) : helper)))
    + "\">		</div>		<footer>			Charge:<a href=\"/\" class=\"total\">$"
    + alias3((helpers.formatPrice || (depth0 && depth0.formatPrice) || alias2).call(alias1,(depth0 != null ? depth0.total : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "</a>			<input type=\"submit\" class=\"submit\" value=\"Get Sushi!\">		</footer>	</form></section><div class=\"img_bottom\"></div>";
},"useData":true});

this["JST"]["unique_items_count"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<a href=\"/\">	<span class=\"left\">Shopping Cart</span><!--	--><span class=\"right\">		<span class=\"count\">"
    + container.escapeExpression(((helper = (helper = helpers.unique || (depth0 != null ? depth0.unique : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"unique","hash":{},"data":data}) : helper)))
    + "</span>		items	</span></a>";
},"useData":true});