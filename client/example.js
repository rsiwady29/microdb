
var clean = function(){
	$('#file').val('');
	$('#query').val('');
	$('#results').empty();
};

var query = function(){
	var file = $('#file').val();
	var query = $('#query').val();

	if(file !== '' && query !== ''){
		$.ajax({
		  url: "/"+file,
		  data: {query: query},
		  success: function(results) {
	    	$('#results').text(results);
	      },
	      error: function(xhr){
	      	$('#results').text(xhr.responseText);
	      }
		});
	}
};
