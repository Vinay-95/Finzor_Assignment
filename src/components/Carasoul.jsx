import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

const testimonials = [
	{
		name: 'Theresa Webb',
		feedback:
			'Swift Revel empowers me to manage my business finances with confidence and ease...',
		image: 'https://avatar.iran.liara.run/public/41', // Replace with actual image link
	},
	{
		name: 'Ronald Richards',
		feedback:
			'We needed a payment gateway that could handle our diverse customer base...',
		image: 'https://avatar.iran.liara.run/public/2', // Replace with actual image link
	},
	{
		name: 'Mina Stark',
		feedback:
			'As a freelancer, managing invoices and chasing payments was a headache...',
		image: 'https://avatar.iran.liara.run/public/3', // Replace with actual image link
	},
	{
		name: 'Shay Greer',
		feedback:
			'Swift Revel empowers me to manage my business finances with confidence and ease...',
		image: 'https://avatar.iran.liara.run/public/4', // Replace with actual image link
	},
	{
		name: 'Leilani Shah',
		feedback:
			'As a freelancer, managing invoices and chasing payments was a headache...',
		image: 'https://avatar.iran.liara.run/public/5', // Replace with actual image link
	},
	{
		name: 'Zain Mora',
		feedback:
			'As a freelancer, managing invoices and chasing payments was a headache...',
		image: 'https://avatar.iran.liara.run/public/6', // Replace with actual image link
	},
	{
		name: 'Eli Young',
		feedback:
			'Swift Revel empowers me to manage my business finances with confidence and ease...',
		image: 'https://avatar.iran.liara.run/public/7', // Replace with actual image link
	},
	{
		name: 'Eliza Daniels',
		feedback:
			'As a freelancer, managing invoices and chasing payments was a headache...',
		image: 'https://avatar.iran.liara.run/public/8', // Replace with actual image link
	},
	{
		name: 'Luciano Cook',
		feedback:
			'Swift Revel empowers me to manage my business finances with confidence and ease...',
		image: 'https://avatar.iran.liara.run/public/9', // Replace with actual image link
	},
];

const TestimonialCarousel = () => {
	//   const settings = {
	//     dots: false,
	//     infinite: true,
	//     speed: 500,
	//     slidesToShow: 1,
	//     slidesToScroll: 1,
	//     autoplay: true,
	//     autoplaySpeed: 2000,
	//     accessibility:true,
	//     arrows:false,
	//     adaptiveHeight:true
	//   };

	const settings = {
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 8000,
		autoplaySpeed: 0,
		cssEase: 'linear',
		arrows: false,
		dots: false,
		draggable: true,
		pauseOnHover: true,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
		],
	};

	return (
		<div className="w-full mx-auto py-8  ">
			<h2 className="text-3xl font-bold text-center text-white mb-6">
				What User Says
			</h2>
			<p className="text-center text-gray-400 mb-10">
				Testimonials that speak louder than words!
			</p>
			<div className="h-full">
				<Slider {...settings}>
					{testimonials.map((testimonial, index) => (
						<div key={index} className="flex py-16 justify-center items-center">
							<div
								className={`bg-black text-white   h-64 overflow-y-hidden rounded-lg p-8 sm:w-44  md:w-52  lg:w-80 xl:w-96 text-center transform transition-transform  ${
									index % 2 === 0 ? 'card-up' : 'card-down'
								} hover:border hover:drop-shadow-2xl hover:shadow-white`}
							>
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className="w-16 h-16 rounded-full mx-auto mb-4"
								/>
								<h3 className="text-xl font-semibold">{testimonial.name}</h3>
								<p className="text-gray-400 mt-4">{testimonial.feedback}</p>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default TestimonialCarousel;
