jQuery(document).ready(function () {
	gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
	jQuery(window).on('scroll', function () {
		// ScrollTrigger.refresh();
		var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
          $('.scroll-section').each(function(i) {
            // The number at the end of the next line is how pany pixels you from the top you want it to activate.
            // if ($(this).position().top <= windscroll + 55) {
            if ($(this).position().top <= windscroll + 85) {
              $('nav li.active').removeClass('active');
              $('nav li').eq(i).addClass('active');
              $(this).toggleClass('active')
            }
          });

        } else {

          $('nav li.active').removeClass('active');
          $('nav li:first').addClass('active');
        }
	})

	//Timeline Section JS

	// let sections = gsap.utils.toArray(".slider-blk");
	// gsap.to(sections, {
	// 	// xPercent: s,
	// 	// xPercent: -(sections[sections.length-1].offsetLeft),
	// 	// xPercent: -(window.innerWidth / 4) - 70,
	// 	// xPercent: -48 * (sections.length - 1),
	// 	xPercent: -38 * (sections.length - 1),
	// 	ease: "linear",
	// 	scrollTrigger: {
	// 		trigger: ".timeline-sec-desktop",
	// 		scrub: 1,
	// 		snap: 0,
	// 		start: "center center",
	// 		end: () => "+=" + document.querySelector(".horizontal-timline-slider").offsetWidth
	// 	}
	// });


	// gsap.to('.timeline-sec-desktop', {
	// 	ease: "linear",
	// 	scrollTrigger: {
	// 		trigger: ".timeline-sec-desktop",
	// 		pin: true,
	// 		pinSpacing: true,
	// 		scrub: true,
	// 		y: '-25vh',
	// 		snap: 0,
	// 		start: "center center",
	// 		end: () => "+=" + document.querySelector(".horizontal-timline-slider").offsetWidth
	// 	}
	// });

	// // let sections2 = gsap.utils.toArray(".slider-blk-mobile");
	// // gsap.to(sections2, {
	// // xPercent: -99 * (sections2.length - 1),
	// // ease: "linear",
	// // scrollTrigger: {
	// // 	trigger: ".timeline-sec-mobile",
	// // 	pin: true,
	// // 	pinSpacing: true,
	// // 	scrub: 1,
	// // 	snap: 0,
	// // 	markers: true,
	// // 	start: "center center",
	// // 	end: () => "+=" + document.querySelector(".horizontal-timline-slider-mobile").offsetWidth
	// // }
	// // });

	// gsap.set('.filling-line-desktop', { width: 0 });
	// gsap.to('.filling-line-desktop', {
	// 	width: "100%",
	// 	duration: 1,
	// 	ease: 'linear',
	// 	scrollTrigger: {
	// 		trigger: ".timeline-sec-desktop",
	// 		scrub: 2,
	// 		start: "center center",
	// 		end: () => "+=" + document.querySelector(".horizontal-timline-slider").offsetWidth,
	// 		markers: false
	// 	}
	// });

	// gsap.set('.filling-line-mobile', {width:0});
	// gsap.to('.filling-line-mobile', {
	// 	width: "100%",
	// 	duration:1,
	// 	ease:'linear',
	// 	scrollTrigger:{
	// 		trigger: ".timeline-sec-mobile",
	// 		scrub:2,
	// 		start: "center center",
	// 		end: () => "+=" + document.querySelector(".horizontal-timline-slider-mobile").offsetWidth,
	// 		markers: true
	// 	}
	// });
});