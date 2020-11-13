$('.footer-slider').slick({
	dots: true,
	responsive: [
		{
			breakpoint: 1890,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 639,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
});