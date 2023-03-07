'use strict';

$(document).ready(function () {
	$(window).on('action:ajaxify.end', function () {
		const categoryCarousel = $('.category-carousel');

		if (categoryCarousel.length) {
			if (config.categoryCarousel && config.categoryCarousel.enableCarousel) {
				const rtl = $('html').attr('data-dir') === 'rtl';
				const nextArrow = '<i class="fa fa-2x fa-fw fa-chevron-circle-right slick-next"></i>';
				const prevArrow = '<i class="fa fa-2x fa-fw fa-chevron-circle-left slick-prev"></i>';
				const slideCount = parseInt(config.categoryCarousel.maxSlides, 10) || 4;
				const slideMargin = 16;
				const env = utils.findBootstrapEnvironment();
				if (['xxl', 'xl', 'lg'].includes(env)) {
					$('.category-card').css({
						width: (categoryCarousel.width() - ((slideCount - 1) * slideMargin)) / slideCount,
					});
				}

				categoryCarousel.slick({
					infinite: false,
					slidesToShow: slideCount,
					slidesToScroll: slideCount,
					rtl: rtl,
					variableWidth: true,
					dots: !!config.categoryCarousel.enableCarouselPagination,
					nextArrow: rtl ? prevArrow : nextArrow,
					prevArrow: rtl ? nextArrow : prevArrow,
					responsive: [{
						breakpoint: 992, // md
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
							infinite: false,
						},
					}, {
						breakpoint: 768, // sm/xs
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
							infinite: false,
						},
					}],
				});
				categoryCarousel.css({ overflow: 'initial' });
			} else {
				categoryCarousel.removeClass('carousel-mode');
			}
		}
	});
});
