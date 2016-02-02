window.onload = function () {
	var getUrlParameter = function getUrlParameter(sParam) {
	    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
	        sURLVariables = sPageURL.split('&'),
	        sParameterName,
	        i;

	    for (i = 0; i < sURLVariables.length; i++) {
	        sParameterName = sURLVariables[i].split('=');

	        if (sParameterName[0] === sParam) {
	            return sParameterName[1] === undefined ? true : sParameterName[1];
	        }
	    }
	};

	var data = decodeURIComponent(getUrlParameter("json"));
	var return_to = decodeURIComponent(getUrlParameter("return_to"));
	if (data != undefined) {
		data = JSON.parse(data);
	} else {
		data = [];
	}
	if (return_to == undefined) {
		return_to = "pebblejs://close#"
	}

	$.each(data, function(index, val) {
		$('#url-list').append($('#url-template').html().replace(/{{title}}/g, val["title"]).replace(/{{url}}/g, val["url"]));
	});
}