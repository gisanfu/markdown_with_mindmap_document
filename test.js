$(document).ready(function() {
	converter = new Showdown.converter();

	$('.need_markdown').each(function(index){
		text = converter.makeHtml($(this).text());
		$('<div id="markdowned' + index + '">' + text + '</div>').insertAfter($(this));
		$(this).hide();
	});

});
