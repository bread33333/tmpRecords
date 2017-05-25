var load = function(data){
	var div = $('#content'),
		table = $(data);
	div.append(table)	
}

$.get(__uri('../../record'),function(data){
	load(data)
})

