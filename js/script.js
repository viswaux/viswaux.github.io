// JavaScript Document

//jQuery.noConflict();
jQuery(document).ready(function($){
$('.mcol').makeacolumnlists({cols: 3, colWidth: 0, equalHeight: 'ul', startN: 1});
$('.mcol2').makeacolumnlists({cols: 3, colWidth: 0, equalHeight: 'li', startN: 12});
$('.toggle').toggle(function() {
		$('.li_container').uncolumnlists();
	}, function() {
		$('.mcol').makeacolumnlists({cols: 3, colWidth: 0, equalHeight: 'ul', startN: 1});
		$('.mcol2').makeacolumnlists({cols: 3, colWidth: 0, equalHeight: 'li', startN: 12});
	});
});


