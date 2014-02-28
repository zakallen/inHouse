$( document ).ready(function() {
	var $container = $('#containerDorm');
	// init
	$container.isotope({
	  // options
	  itemSelector: '.item',
	  layoutMode: 'fitRows',
	  getSortData: {
	    name: '.name',
	    symbol: '.symbol',
	    number: '.number parseInt',
	    category: '[data-category]',
	    weight: function( itemElem ) {
	      var weight = $( itemElem ).find('.weight').text();
	      return parseFloat( weight.replace( /[\(\)]/g, '') );
	    }
	  }
	});

	// sort items on button click
	$('#sorts').on( 'click', 'button', function() {
	  var sortValue = $(this).attr('data-sort-value');
	  $container.isotope({ sortBy: sortValue });
	});
});
