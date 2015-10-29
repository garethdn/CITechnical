define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["AppLayout"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<header class=\"navbar navbar-default\" role=\"banner\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggle collapsed\" type=\"button\" data-toggle=\"collapse\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a href=\"#\" class=\"navbar-brand\"><span class=\"glyphicon glyphicon-off\"></span>  Brand Name</a>\n    </div>\n    <nav class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li>\n          <a href=\"#\">Home</a>\n        </li>\n        <li>\n          <a href=\"#about\">About</a>\n        </li>\n        <li>\n          <a href=\"#contact\">Contact</a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</header>\n\n<div id=\"region-content\" class=\"container\"></div>\n\n<div id=\"region-modal\"></div>";
},"useData":true});

this["JST"]["FeatureCompositeView"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"page-header\">\n      <h1>Feature page heading</h1>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>Id</th>\n          <th style=\"width:20%;\">Name</th>\n          <th>Description</th>\n        </tr>\n      </thead>\n      <tbody></tbody>\n    </table>\n  </div>\n</div>";
},"useData":true});

this["JST"]["FeatureItemView"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<td>"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "</td>\n<td>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</td>\n<td>"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</td>";
},"useData":true});

return this["JST"];

});