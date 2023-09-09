import React, { useRef, useEffect, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import './App.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "react-slick";

import { NavbarComponent } from './components/navbar/NavBarComponent';
// Images
import topCreatureImage from './assets/images/creatures/Back_Cover_Seredene_Illustration.png'
import orchidAndChan from './assets/images/orchid_and_chan.png'
import keysImage from './assets/images/keys.png'
import authorImg from './assets/images/author.png'
import bookCoverImg from './assets/images/book_cover.png'
import mobileBookCoverImg from './assets/images/book_cover.svg'
import userIcon from './assets/images/user_icon.svg'
import emailIcon from './assets/images/email_icon.svg'
import phoneIcon from './assets/images/phone_icon.svg'
import arrowDownCircle from './assets/images/arrow-down-circle.svg'
import creatureMap from './assets/images/creature-map.png'

import creatureBugsty from './assets/images/creatures/DD_Bugsty_v01.png'
import creatureGlitz from './assets/images/creatures/DD_Glitz_v01.png'
import creatureFairylex from './assets/images/creatures/DD_Fairylex_v01.png'
import creatureBowstar from './assets/images/creatures/DD_Bowstar_v01.png'
import creatureBriya from './assets/images/creatures/DD_Briya_v01.png'
import creatureFrigidy from './assets/images/creatures/DD_Frigidy_v01.png'
import creatureFlorea from './assets/images/creatures/DD_Florea_v01.png'
import creatureFounty from './assets/images/creatures/DD_Founty_v01.png'

import creatureTwinx from './assets/images/creatures/DD_Twinx_v01.png'
import creatureGemsty from './assets/images/creatures/DD_Gemsty_v01.png'
import creatureTodo from './assets/images/creatures/DD_Todo_v01.png'
import creatureHoggit from './assets/images/creatures/DD_Hoggit_v01.png'
import creatureBlinga from './assets/images/creatures/DD_Blinga_v01.png'
import creatureHuztoc from './assets/images/creatures/DD_Huztoc_v01.png'
import creatureSpirwindy from './assets/images/creatures/DD_Spirwindy_v01.png'
import creatureGrazil from './assets/images/creatures/DD_Grazil_v01.png'
import creatureGrovo from './assets/images/creatures/DD_Grovo_v01.png'


function App() {
	gsap.registerPlugin(ScrollTrigger);
	const ref = useRef(null);
	const [open, setOpen] = useState(false);
	const cancelButtonRef = useRef(null)

	const creatureSlidersettings = {
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		autoplay: true,
		autoplaySpeed: 2000,
		cssEase: "linear",

	};
	const starCreatureSlidersettings = {
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
		cssEase: "linear",
		afterChange: () => startCreatureAnimate(),
		beforeChange: () => endCreatureAnimate()
	};

	const creatures = [
		{
			imgSrc: creatureBugsty,
			title: 'Bugsty'
		},
		{
			imgSrc: creatureGlitz,
			title: 'Glitz'
		},
		{
			imgSrc: creatureFairylex,
			title: 'Fairylex'
		},
		{
			imgSrc: creatureBowstar,
			title: 'Bowstar'
		},
		{
			imgSrc: creatureBriya,
			title: 'Briya'
		},
		{
			imgSrc: creatureFrigidy,
			title: 'Frigidy'
		},
		{
			imgSrc: creatureFlorea,
			title: 'Florea'
		},
		{
			imgSrc: creatureFounty,
			title: 'Founty'
		},
	];

	const starCreature = [
		{
			imgSrc: creatureTwinx,
			title: 'Twinx',
			subTitle: 'Element of wit Star creature',
			info: 'Twinx is witty, jovial, sharp, creative, popular and easy going. He can remain calm and think out of the box even in challenging situations. He is reliable, spirited and spreads cheer.',
			creatureBgClass: 'creature-one-bg',
			customClass:'w-1/2'
		},
		{
			imgSrc: creatureGemsty,
			title: 'Gemsty',
			subTitle: 'Gemstone Star creature',
			info: 'Gemsty has his head up in the clouds. He knows that he is priceless and is very proud. He behaves like royalty. He is calculative and selective to the extreme.',
			creatureBgClass: 'creature-two-bg',
			customClass:''
		},
		{
			imgSrc: creatureBugsty,
			title: 'Bugsty',
			subTitle: 'Poison and Battle Star creature',
			info: 'Bugsty is cute in appearance and lovable but lethal. She wins admiration and is strategic as well as efficient. Deception is her Art.',
			creatureBgClass: 'creature-three-bg',
			customClass:''
		},
		{
			imgSrc: creatureTodo,
			title: 'Todo',
			subTitle: 'Mind Star creature',
			info: `Todo can see through pretences. He knows when what people say doesn't match with what they mean. He is an  extremely strong mind reader and a very loyal pet. He is cautious and full of wisdom.`,
			creatureBgClass: 'creature-four-bg',
			customClass:''
		},
		{
			imgSrc: creatureHoggit,
			title: 'Hoggit',
			subTitle: 'Emotion of Hunger Star creature',
			info: `Hoggit is extremely adorable and wins everybody's heart. They love him enough to feed him treats just by looking into those twinkly puppy dog eyes.`,
			creatureBgClass: 'creature-five-bg',
			customClass:''
		},
		{
			imgSrc: creatureBlinga,
			title: 'Blinga',
			subTitle: 'Electric Star creature',
			info: `Blinga is very cool headed even in danger and can efficiently fight out difficult situations. Blinga controls electricity.`,
			creatureBgClass: 'creature-six-bg',
			customClass:''
		},
		{
			imgSrc: creatureHuztoc,
			title: 'Huztoc',
			subTitle: 'Ancient Fire Star creature',
			info: `Huztoc is one among the bravest and strongest Star creatures. He is witty, thrill seeking, fun loving and won't back down from a good fight.`,
			creatureBgClass: 'creature-seven-bg',
			customClass:''
		},
		{
			imgSrc: creatureFairylex,
			title: 'Fairylex',
			subTitle: 'Ancient Mystic Light magic Star creature',
			info: `Fairylex is calm, brainy, patient, loving, loyal and strong. She has a pure heart and doesn't give up easily.`,
			creatureBgClass: 'creature-eight-bg',
			customClass:''
		},
		{
			imgSrc: creatureSpirwindy,
			title: 'Spirwindy',
			subTitle: 'Ancient Wind and Weather Star creature',
			info: `Spirwindy is fun loving, powerful, mischievous, loving and a great friend.`,
			creatureBgClass: 'creature-nine-bg',
			customClass:''
		},
		{
			imgSrc: creatureGrazil,
			title: 'Grazil',
			subTitle: 'Ancient Plant Star creature',
			info: `He is extremely intelligent and loyal. He makes for an ideal companion. He is patient and strong beyond measure.`,
			creatureBgClass: 'creature-ten-bg',
			customClass:''
		},
		{
			imgSrc: creatureGrovo,
			title: 'Grovo',
			subTitle: 'Ancient Dark magic Star creature',
			info: `Grovo is extremely powerful, intelligent and really quite devious. He makes a really formidable foe and a loving friend.`,
			creatureBgClass: 'creature-eleven-bg',
			customClass:''
		},

	];

	const startCreatureAnimate: any = () => {
		gsap.fromTo("#section_four .creature-image", {
			xPercent: -25,
			opacity: 0,
			ease: "none",
		}, {
			xPercent: 0,
			opacity: 1,
			ease: "none",
		});
	}

	const endCreatureAnimate: any = () => {
		gsap.fromTo("#section_four .creature-image", {
			xPercent: 0,
			opacity: 1,
			ease: "none",
		}, {
			xPercent: -25,
			opacity: 0,
			ease: "none",
		});
	}

	const openModal:any = () =>{
		setOpen(true);
	}

	useEffect(() => {
		tweenAnimation();
	}, []);

	const tweenAnimation: any = () => {
		const element: any = ref.current;
		// Section One Animations
		gsap.to("#section_one .first-content", {
			yPercent: -75,
			ease: "none",
			scrollTrigger: {
				trigger: element.querySelector("#section_one"),
				start: "center center", // the default values
				// end: "bottom top",
				scrub: true,
			},
		});
		gsap.to("#section_one .first-image", {
			yPercent: -75,
			ease: "none",
			scrollTrigger: {
				trigger: element.querySelector("#section_one"),
				start: "center center", // the default values
				// end: "bottom top",
				scrub: true,
			},
		});
		// section_three
		gsap.to("#section_three .part-one", {
			yPercent: -70,
			ease: "none",
			scrollTrigger: {
				trigger: element.querySelector("#section_three .part-one"),
				start: "center center", // the default values
				// end: "bottom top",
				scrub: true,
			},
		});
		gsap.to("#section_three .part-two", {
			yPercent: -75,
			ease: "none",
			scrollTrigger: {
				trigger: element.querySelector("#section_three .part-two"),
				start: "top center", // the default values
				// end: "bottom top",
				scrub: true,
			},
		});
		// section_three
		gsap.to("#section_three .creatures-list .content", {
			yPercent: -75,
			ease: "none",
			scrollTrigger: {
				trigger: element.querySelector(".creatures-list"),
				start: "top top", // the default values
				// end: "bottom top",
				scrub: true,
			},
		});
		gsap.to("#section_three .creatures-list .image-side", {
			yPercent: -50,
			ease: "none",
			scrollTrigger: {
				trigger: element.querySelector(".creatures-list"),
				start: "top top", // the default values
				// end: "bottom top",
				scrub: true,
			},
		});
		// section_five
		gsap.to("#section_five .part-one", {
			yPercent: -75,
			ease: "none",
			scrollTrigger: {
				trigger: element.querySelector("#section_five"),
				start: "top center", // the default values
				// end: "bottom top",
				scrub: true,
			},
		});
		gsap.to("#section_five .part-two", {
			yPercent: -35,
			ease: "none",
			scrollTrigger: {
				trigger: element.querySelector("#section_five .part-two"),
				start: "top center", // the default values
				// end: "bottom top",
				scrub: true,
			},
		});
		gsap.to("#section_five .part-three", {
			yPercent: -75,
			ease: "none",
			scrollTrigger: {
				trigger: element.querySelector("#section_five .part-two"),
				start: "top top", // the default values
				// end: "bottom top",
				scrub: true,
			},
		});
		// section_six
		gsap.to("#section_six .part-one", {
			yPercent: -40,
			ease: "none",
			scrollTrigger: {
				trigger: element.querySelector("#section_six .part-one"),
				start: "top center", // the default values
				// end: "bottom top",
				scrub: true,
			},
		});
		gsap.to("#section_six .part-two", {
			yPercent: -30,
			ease: "none",
			scrollTrigger: {
				trigger: element.querySelector("#section_six .part-one"),
				start: "top center", // the default values
				// end: "bottom top",
				scrub: true,
			},
		});
		// section_seven
		gsap.to("#section_seven .part-one", {
			yPercent: 50,
			ease: "none",
			scrollTrigger: {
				trigger: element.querySelector("#section_seven"),
				start: "top center", // the default values
				// end: "bottom top",
				scrub: true,
			},
		});
		gsap.to("#section_seven .part-two", {
			yPercent: 50,
			ease: "none",
			scrollTrigger: {
				trigger: element.querySelector("#section_seven"),
				start: "top center", // the default values
				// end: "bottom top",
				scrub: true,
			},
		});

	}

	return (
		<div className="w-full mx-auto bg-black" ref={ref}>
			{/* Navbar */}
			<NavbarComponent />

			{/* Section one:: Start */}
			<section id="section_one" className='px-5 xl:px-0'>
				<div className='wrapper flex items-center justify-center h-screen'>
					<div className='flex flex-col xl:flex-row items-center justify-center xl:justify-between h-screen'>
						<div className='text-center first-content'>
							<h2 className='block text-white font-aftaSerifThin_regular font-normal text-[2.16rem] md:text-6xl leading-none'>
								<span className='block text-white font-aftaSerifThin_regular font-normal text-[0.9rem] md:text-2xl mb-2 xl:mb-0'>WELCOME TO</span> SEREDENE
							</h2>

							<p className='text-black-200 font-primary_Variable text-[0.4rem] md:text-xl bg-white font-bold px-2 xl:px-4 py-1 xl:py-3 mt-1 md:mt-[2rem] mb-5 xl:mb-[10rem] inline-block'>
								SLIDE INTO THE WORLD OF SEREDENE
							</p>

							<a href='https://www.amazon.in/dp/1513695541/ref=sr_1_1?crid=11VSFLNJHV9CQ&keywords=seredene&qid=1692683831&sprefix=serene%2Caps%2C282&sr=8-1' target='blank' className='bg-blue-200 px-2 xl:px-6 py-1 xl:py-4 text-white text-[0.5rem] md:text-base font-bold font-primary_Variable flex items-center justify-center mx-auto w-[10rem]'>
								<img src={arrowDownCircle} alt={arrowDownCircle} className='mr-2' /> SHOP NOW</a>
						</div>
						<div className='mt-10 md:mt-0 first-image'>
							<img src={topCreatureImage} alt="topCreatureImage" className='md:w-[80%] xl:w-auto mx-auto' />
						</div>
					</div>
				</div>
			</section>
			{/* Section one:: End */}

			{/* Section three:: Start */}
			<section id="section_three">
				<div className='wrapper py-28'>
					<div className='text-center mb-10 xl:mb-52 w-[75%] xl:w-auto mx-auto part-one'>
						<p className='font-primary_Variable font-bold text-white text-[0.5rem] md:text-xl'>Looking to escape from reality? This fantasy fiction is just what you’ve been seeking. Filled with adventure, love, friendship, magic and destiny, this young adult fiction is more than your average magical stories. It's all about immersive new age fantasy. Nothing short of a netflix original.</p>
					</div>
					<div className='text-center mb-10 xl:mb-0 part-two'>
						<button className='rounded-[2.3125rem] px-8 xl:px-16 py-1 xl:py-3 bg-white text-[0.72rem] md:text-2xl font-primary_Variable font-bold text-blue-100' onClick={ () =>openModal()}>
							EXPLORE SEREDENE
						</button>
					</div>
					<div className='flex flex-col xl:flex-row items-center justify-between xl:h-screen px-5 xl:px-0 creatures-list'>
						{/* Desktop view */}
						<div className='xl:w-[46rem] hidden xl:block content'>
							<h4 className='block text-white font-primary_Variable font-bold text-[0.86163rem] md:text-3xl leading-none'>
								<span className='block text-white font-primary_Variable font-normal text-[0.86163rem] md:text-3xl'>STAR CREATURES THAT</span> LEAVE YOU SPELL BOUND
							</h4>
							<p className='text-white text-[0.625rem] md:text-xl font-primary_Variable font-normal mt-[2rem] inline-block xl:leading-7'>
								Star creatures live on Planet Zurburry. They form connections with the Seredians and become their pets. Seredene stands at the brink of war. Let us find out how this tale unravels.
							</p>
						</div>

						{/* creature slider */}
						<div className='text-center w-screen xl:w-[32rem] mb-5 xl:mb-0 image-side'>
							<Slider {...creatureSlidersettings}>
								{
									creatures.map(item => {
										return (
											<div className="section_three_creature creature-one" key={item.title}>
												<div className='relative w-72 xl:w-auto mx-auto'>
													<img src={item.imgSrc} alt={item.title} className='relative z-10 w-[100%]' />
													<span className='absolute -bottom-12 left-7 h-[16rem] xl:h-[24rem] w-[16rem] xl:w-[24rem] rounded-[50%] bg-white'></span>
												</div>
												<h6 className='text-white font-primary_Variable font-normal text-[0.57931rem] md:text-2xl leading-8 mt-20'>
													Hi my name is {item.title}
												</h6>
											</div>
										)
									})
								}
							</Slider>
						</div>

						{/* Mobile view */}
						<div className='xl:w-[46rem] block xl:hidden'>
							<h4 className='block text-white font-primary_Variable font-bold text-[0.86163rem] leading-none'>
								<span className='block text-white font-primary_Variable font-normal text-[0.86163rem] md:text-3xl'>STAR CREATURES THAT</span> LEAVE YOU SPELL BOUND
							</h4>
							<p className='text-white text-[0.625rem] md:text-xl font-primary_Variable font-normal mt-5 xl:mt-[2rem] inline-block xl:leading-7'>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* Section three:: End */}

			{/* Section four:: Start */}
			<section id="section_four">
				<Slider {...starCreatureSlidersettings}>
					{
						starCreature.map(item => {
							return (
								<div className={`${item.creatureBgClass} px-10 xl:px-28`} key={item.title}>
									<div>
										<h4 className='font-aftaSerifThin_regular text-[2rem] md:text-3xl text-white text-center pt-10 md:pt-28 mb-10 md:mb-20 xl:mb-0'>STAR CREATURE</h4>
										<div className='flex flex-col xl:flex-row items-center justify-between h-[80vh]'>
											<div className='text-center xl:w-[34rem] xl:mr-10'>
												<div className="section_three_creature creature-image">
													<div className='relative'>
														<img src={item.imgSrc} alt={item.title}
														className='relative z-10 w-[150px] md:w-[60%] xl:w-[85%] mx-auto' />
													</div>
												</div>
											</div>
											<div className='w-[80%] xl:w-[45.8125rem] mx-auto mb-16 xl:mb-0'>
												<h3 className='block text-white font-aftaSerifThin_regular text-[2.5rem] md:text-6xl leading-none'>{item.title}</h3>
												<h4 className='block text-white font-primary_Variable font-bold text-[1.4rem] md:text-2xl leading-none my-3 xl:my-6'>
													{item.subTitle}
												</h4>

												<p className='text-white text-[0.8rem] md:text-xl font-primary_Variable font-normal mt-[1rem] inline-block xl:leading-7'>
													{item.info}
												</p>
											</div>
										</div>
									</div>
								</div>
							)
						})
					}

				</Slider>
			</section>
			{/* Section four:: End */}

			{/* Section five:: Start */}
			<section id="section_five">
				<div className='wrapper py-32'>
					<div className='text-center part-one'>
						<h4 className='font-aftaSerifThin_regular font-normal text-base md:text-3xl text-white'>
							BRING YOUR <span className='font-primary_Variable font-bold text-base md:text-3xl text-white block'>IMAGINATION TO LIFE</span>
						</h4>
						<p className='mt-5 font-primary_Variable font-normal text-[0.625rem] md:text-xl text-white leading-[1rem] xl:leading-[2.5rem] w-[75%] mx-auto'>Much like your escape from reality, join Princess Orchid in her escape from the Enchanter's Castle. She is at the beginning of a new life changing journey in the company of varied fellow magicians and creatures with unique personalities and powers.</p>
					</div>
					<div className='part-two'>
						<img src={orchidAndChan} alt="orchidAndChan" className='mx-auto my-24' />
					</div>
					<div className='flex justify-between items-center px-5 xl:px-0 part-three'>
						<div>
							<h4 className='font-primary_Variable font-bold text-[0.8rem] md:text-3xl text-white'>CAN’T GET ENOUGH?</h4>
							<p className='mt-5 font-primary_Variable font-normal text-[0.625rem] md:text-xl text-white'>THIS IS ONLY BOOK 1. <br />SIGN UP FOR UPDATES. WE MAY JUST DROP A FREE CHAPTER OF BOOK 2 FOR OUR CURIOUS EXPLORERS!
							</p>
						</div>
						<div>
							<img src={keysImage} alt="keysImage" />
						</div>
					</div>
				</div>
			</section>
			{/* Section five:: End */}

			<section id="section_six">
				<div className='flex flex-col xl:flex-row justify-between items-center xl:h-screen py-20 xl:py-0 px-10 xl:px-0'>
					<div className='xl:w-[40%] xl:pr-[5%] mb-16 xl:mb-0 part-one'>
						<img src={bookCoverImg} alt="bookCoverImg" className='hidden xl:block' />
						<img src={mobileBookCoverImg} alt="bookCoverImg" className='xl:hidden' />
					</div>
					<div className='xl:w-[50%] pr-[5%] part-two text-center md:text-left'>
						<img src={authorImg} alt="authorImg" className='mx-auto xl:m-0 w-40 xl:w-auto' />
						<h5 className='font-aftaSerifThin_regular font-normal text-[2rem] md:text-3xl text-white mt-10 mb-5'>Arpita Shah</h5>
						<p className='font-primary_Variable font-normal text-[1rem] md:text-xl text-white'>The Author Arpita Shah first realised her calling towards the literary arts at the nascent age of 10, when she got enthralled by varied works of Art and Literature. Her first tryst with writing began as she started penning her thoughts, poems, quotes, etc. She is a Fine Arts graduate and a qualified advocate. SEREDENE is her first published novel.</p>
					</div>
				</div>
			</section>

			<section id="section_seven">
				<div className='wrapper pb-64 md:pb-0'>
					<div className='flex flex-col xl:flex-row justify-between items-center h-screen py-20 xl:py-0 px-10 xl:px-0'>
						<div className='xl:w-1/2 xl:mr-10 part-one'>
							<img src={creatureBriya} alt="creature" />
						</div>
						<div className='w-full xl:w-1/2 part-two'>
							<h4 className='text-[1.281rem] md:text-3xl font-primary_Variable font-bold text-center mb-8'>LEAD FORM</h4>
							<form>
								<div className="mt-2 flex rounded-md shadow-sm">
									<div className="relative flex flex-grow items-stretch focus-within:z-10">
										<div className="pointer-events-none absolute inset-y-0 left-2 flex items-center pl-3">
											<img src={userIcon} alt='' />
										</div>
										<input
											type="text"
											name="name"
											id="name"
											className="block w-full border-0 py-3 pl-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 rounded-[6.25rem] font-primary_Variable text-[0.61519rem] md:text-xl text-black-200"
											placeholder="Name"
										/>
									</div>
								</div>

								<div className="mt-8 flex rounded-md shadow-sm">
									<div className="relative flex flex-grow items-stretch focus-within:z-10">
										<div className="pointer-events-none absolute inset-y-0 left-2 flex items-center pl-3">
											<img src={emailIcon} alt='' />
										</div>
										<input
											type="email"
											name="email"
											id="email"
											className="block w-full border-0 py-3 pl-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 rounded-[6.25rem]  font-primary_Variable text-[0.61519rem] md:text-xl text-black-200"
											placeholder="Email"
										/>
									</div>
								</div>
								<div className="mt-8 flex rounded-md shadow-sm">
									<div className="relative flex flex-grow items-stretch focus-within:z-10">
										<div className="pointer-events-none absolute inset-y-0 left-2 flex items-center pl-3">
											<img src={phoneIcon} alt='' />
										</div>
										<input
											type="tel"
											name="phone"
											id="phone"
											className="block w-full border-0 py-3 pl-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 rounded-[6.25rem]  font-primary_Variable text-[0.61519rem] md:text-xl text-black-200"
											placeholder="Phone"
										/>
									</div>
								</div>
								<div className="mt-8 flex rounded-md shadow-sm">
									<div className="relative flex flex-grow items-stretch focus-within:z-10">
										<textarea
											name="message"
											id="message"
											className="block w-full border-0 py-3 pl-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 rounded-[6.25rem]  font-primary_Variable text-[0.61519rem] md:text-xl text-black-200"
											placeholder="Message"
										/>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>


			<Transition.Root show={open} as={Fragment}>
				<Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-0 z-10 overflow-y-auto">
						<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							>
								<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-transparent text-left shadow-xl transition-all sm:my-8 sm:w-full">
									<div className="bg-transparent px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
										<div className="sm:flex sm:items-start">
											<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
												<img src={creatureMap} alt='creatureMap'  className='mx-auto w-[90%]'/>
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</div>
	);
}

export default App;
