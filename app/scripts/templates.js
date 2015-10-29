define(['handlebars', 'utilities/handlebar_helpers/dateTime', 'utilities/handlebar_helpers/textTransformations'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["AppLayout"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header class=\"navbar navbar-default\" role=\"banner\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a href=\"#\" class=\"navbar-brand\"><span class=\"glyphicon glyphicon-off\"></span>  CI Technical Test</a>\n    </div>\n  </div>\n</header>\n\n<div id=\"region-content\" class=\"container\"></div>";
},"useData":true});

this["JST"]["GreekGodsCompositeView"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"row\">\n    <div class=\"col-xs-12 col-sm-4\">\n      <h1>Greek Gods</h1>\n    </div>\n    <form class=\"form-inline col-xs-12 col-sm-8 text-right\">\n      <div class=\"checkbox\">\n        <label>\n          <input type=\"checkbox\" name=\"error\" data-filter> Trigger Error?\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" data-filter name=\"search\" placeholder=\"Name\" />\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-primary\" data-action=\"search\">Search</button>\n      </div>\n    </form>\n</div>\n\n<hr>\n\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Superpower</th>\n          <th>End of Era</th>\n        </tr>\n      </thead>\n      <tbody></tbody>\n    </table>\n  </div>\n</div>";
},"useData":true});

this["JST"]["GreekGodsItemView"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<td>"
    + alias3((helpers.toUpper || (depth0 && depth0.toUpper) || alias2).call(alias1,(depth0 != null ? depth0.name : depth0),{"name":"toUpper","hash":{},"data":data}))
    + "</td>\n<td>"
    + alias3(((helper = (helper = helpers.superpower || (depth0 != null ? depth0.superpower : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"superpower","hash":{},"data":data}) : helper)))
    + "</td>\n<td>"
    + alias3((helpers.date_day || (depth0 && depth0.date_day) || alias2).call(alias1,(depth0 != null ? depth0.end_of_an_era : depth0),{"name":"date_day","hash":{},"data":data}))
    + " <em>("
    + alias3((helpers.from_now || (depth0 && depth0.from_now) || alias2).call(alias1,(depth0 != null ? depth0.end_of_an_era : depth0),{"name":"from_now","hash":{},"data":data}))
    + ")</em></td>";
},"useData":true});

this["JST"]["Empty"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<td colspan=\""
    + container.escapeExpression(((helper = (helper = helpers.colspan || (depth0 != null ? depth0.colspan : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"colspan","hash":{},"data":data}) : helper)))
    + "\" class=\"text-center empty-results\">\r\n    <h3>No items to display</h3>\r\n    <small>Please note that this search is case-sensitive</small>\r\n</td>\r\n";
},"useData":true});

this["JST"]["Error"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"error\">\r\n  <span class=\"error-content\">\r\n		<div>\r\n			<i class=\"fa fa-exclamation-triangle fa-4x text-danger\"></i>\r\n		</div>\r\n		<h3 class=\"text-danger text-bolder\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.status : stack1), depth0))
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.statusText : stack1), depth0))
    + "</h3>\r\n		<p class=\"small\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.responseText : stack1)) != null ? stack1.error : stack1), depth0))
    + "</p>\r\n	</span>\r\n</div>\r\n";
},"useData":true});

this["JST"]["TableError"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.escapeExpression, alias2=container.lambda;

  return "<td class=\"error\" colspan=\""
    + alias1(((helper = (helper = helpers.colspan || (depth0 != null ? depth0.colspan : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"colspan","hash":{},"data":data}) : helper)))
    + "\">\r\n  <span class=\"error-content\">\r\n  	<div>\r\n  		<i class=\"fa fa-exclamation-triangle fa-5x text-danger\"></i>\r\n  	</div>\r\n  	<h3 class=\"text-danger text-bolder\">"
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.responseText : stack1)) != null ? stack1.error : stack1), depth0))
    + "</h3>\r\n  	<p>"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.status : stack1), depth0))
    + " "
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.statusText : stack1), depth0))
    + "</p>\r\n	</span>\r\n</td>\r\n";
},"useData":true});

this["JST"]["Loading"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <p class=\"message\">"
    + container.escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"message","hash":{},"data":data}) : helper)))
    + "</p>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"loading\">\r\n    <div class=\"loading-content\">\r\n        <i class=\"fa fa-spinner fa-spin fa-3x\" /></i>\r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.message : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n</div>\r\n";
},"useData":true});

this["JST"]["TableLoading"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "			<p class=\"message\">"
    + container.escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"message","hash":{},"data":data}) : helper)))
    + "</p>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<td class=\"loading\" colspan=\""
    + container.escapeExpression(((helper = (helper = helpers.colspan || (depth0 != null ? depth0.colspan : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"colspan","hash":{},"data":data}) : helper)))
    + "\">\r\n  <span class=\"loading-content\">\r\n		<i class=\"fa fa-spinner fa-spin fa-3x\"/></i>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.message : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</span>\r\n</td>\r\n";
},"useData":true});

return this["JST"];

});