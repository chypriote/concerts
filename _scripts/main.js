$(function() {

	var	$window = $(window),
		$body = $('body');

	// Disable animations/transitions until the page has loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-loading');
			}, 100);
		});

	// Menu.
		var $menu = $('#menu');

		$menu._locked = false;

		$menu._lock = () => {
			if ($menu._locked)
				return false;
			$menu._locked = true;
			window.setTimeout(() => {$menu._locked = false;}, 350);

			return true;
		};

		$menu._show = () => {
			if ($menu._lock()) $body.addClass('is-menu-visible');
		};
		$menu._hide = () => {
			if ($menu._lock()) $body.removeClass('is-menu-visible');
		};
		$menu._toggle = () => {
			if ($menu._lock()) $body.toggleClass('is-menu-visible');
		};

		$('#menu-close').on('click', (event) => {
			event.preventDefault();
			event.stopPropagation();
			$menu._hide();
		});
		$menu
			.on('click', (event) => {event.stopPropagation();})
			.on('click', 'a', (event) => {
				var href = $(event.currentTarget).attr('href');
				event.preventDefault();
				event.stopPropagation();
				$menu._hide();
				console.log('test', $(event.currentTarget));
				window.setTimeout(() => {window.location.href = href;}, 350);
			});

		$body
			.on('click', 'a[href="#menu"]', (event) => {
				event.stopPropagation();
				event.preventDefault();
				$menu._toggle();
			})
			.on('click', (event) => {$menu._hide();})
			.on('keydown', (event) => {
				if (event.keyCode == 27)
					$menu._hide();
			});
});