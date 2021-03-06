$(document).ready(function() {

	var url = 'https://photorankapi-a.akamaihd.net/customers/217104/media/recent?auth_token=';
	var key = "69479ab03895b0f34bf645c0d84b93f5f165a9de8ad8124a43fb91afe2c957ce";

	url += key;

	$.ajax({

		type: 'GET',
		url: url,
		dataType: 'json',

	}).done(function (result) {

		var viewWidth = 160 * (result.data._embedded.length);
		$('.view').width(viewWidth);

		$.each(result.data._embedded, function (index, value) {
			// If valid source_id exists...
			if (value.source_id) {
				// Append each image to carousel
				$('.view').append(
					'<div class="imgDiv" id="photo-'+index+'"><a href="'
					+ value.images.normal +
					'" class="magnific"><img class="images mdl-color--white mdl-shadow--4dp" src="'
					+ value.images.thumbnail +
					'"></a></div>'
				);
			}
		});

		var view = $('.view');
		var photos = $('div', view);
		var photoWidth = 150 + 10;		
		var photosetWidth = (photoWidth) * 4;
		var leftValue = photosetWidth*(-1);

		view.css('left', 0);

		$('#left').on('click', function () {
			// Get updated view
			view = $('.view');
			// Get updated photos
			photos = $('div', view);
			// Prepend triggered before animate when going left
			for (var i=photos.length-1; i>photos.length-7; i--) {
				$('.view').prepend($(photos[i]));
			}
			// Snap view back to width of prepend before animating
			view.css('left', leftValue);
			// Animate view back to position 0
			$('.view').animate({'left': 0}, 200);
		});

		// Right arrow click event
		$('#right').on('click', function () {
			// Slide images left by 4 photos' width
			$('.view').animate({'left': leftValue}, 200, function () {
				// Get updated view
				view = $('.view');
				// Get updated photos
				photos = $('div', view);
				// Append triggered after animate when going right
				for (var i=0; i<6; i++) {
					$('.view div:last').after($(photos[i]));
				}
				// After move, snap view back to position 0
				view.css('left', 0);
			});
		});

		// Magnific Modal Plugin
		$('.view').magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery: {enabled:true},
			mainClass: 'mfp-with-zoom',
			zoom: {
				enabled: true,
				duration: 200,
				easing: 'ease-in-out',
				opener: function (openerElement) {
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});

	}).fail(function (err) {
		$('.view').html('ERROR: '+err);
	});

});

