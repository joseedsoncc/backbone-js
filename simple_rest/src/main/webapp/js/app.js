_.templateSettings = {
	interpolate : /\{\{(.+?)\}\}/g
};

window.template = function(id) {
	return _.template($('#' + id).html());
};

window.templateByUrl = function(url) {
	return _.template(getTemplate(url));
};

window.getTemplate = function(url) {
	var data = "failed to load url : " + url;
	$.ajax({
		async : false,
		url : url,
		success : function(response) {
			data = response;
		}
	});
	return data;
};