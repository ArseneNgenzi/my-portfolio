import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
	{
		name: "Rwandapedia",
		description:
			"Rwandapedia is a free, digital encyclopedic repository created for the world to learn about Rwanda and its transformation journey.",
		image: "/rwandapedia.jfif",
		github: "#",
		link: "https://rwandapedia.rw/",
		stack: "React - Redux - Tailwind CSS - API Manipulation",
	},
	{
		name: "Social Registry - Rwanda Government",
		description:
			"the social registry is a system that bolstered the delivery of various government programs, including cash transfers, social services, and other livelihood programs.",
			image: "/sris.png",
		github: "#",
		link: "https://sris.minaloc.gov.rw/auth/login",
		stack: "Angular - Tailwind CSS - API Manipulation",
	},
	{
		name: "Andikaho",
		description:
			"Andikaho is the rwandan one and only community for custom fashion printing and fashion designers to create and shop seamlessly",
		image: "/andikaho.png",
		github: "#",
		link: "https://github.com/ArseneNgenzi/andikaho-ui",
		stack: "NextJs - Tailwind CSS - API Manipulation",
	},
	{
		name: "Angular WebStore",
		description:
			"This is a personal project I created to showcase my Angular.js skills on my portfolio. Get the app from Github, install dependencies in the 'store' and 'server' directories, the run 'ng serve' and 'node server.js' in those directories respectively to enable Stripe payments.",
		image: "/AngularNodeWebstore1.png",
		github: "https://github.com/ArseneNgenzi/angular-node-webstore",
		link: "https://arsene-webstore.netlify.app/home",
		stack:
			"Angular.js - AngularMaterial - Node.js - Tailwind CSS - Stripe - API Manipulation",
	},
	{
		name: "Housing Protector",
		description:
			"Housing Protector is an interactive website for a Rwandan based construction company with French roots. The site admin’s dashboard was coded using React, SQL, and Node.js  ",
		image: "/housing.png",
		github: "https://github.com/ArseneNgenzi/housingprotector1",
		link: "https://housingprotector.rw/",
		stack: "React - Node.js - SQL - Bootstrap - HTML - CSS",
	},
	{
		name: "Airbnb Clone UI",
		description:
			"Housing Protector is an interactive website for a Rwandan based construction company with French roots. The site admin’s dashboard was coded using React, SQL, and Node.js  ",
		image: "/airbnb.png",
		github: "https://github.com/ArseneNgenzi/airbnbclone",
		link: "https://arsene-airbnb.netlify.app/",
		stack: "Next.js - Tailwind CSS - API Manipulation",
	},
	{
		name: "Murambi HCC",
		description:
			"MURAMBI HCC	MURAMBI HCC is a website created for Murambi Honey in partnership with SERUKA, and NGO that supplies modern bee hives to women beekeepers  .",
		image: "/murambi.png",
		github: "https://github.com/ArseneNgenzi/murambiHCC",
		link: "https://murambi-hcc.netlify.app/",
		stack: "JQuery - Bootstrap - HTML - CSS",
	},
	{
		name: "Covid-19 Tracker",
		description:
			"This is a live COVID-19 Tracker that updates new COVID-19 cases  created with React.js and Material UI",
		image: "/covidTracker.png",
		github: "https://github.com/ArseneNgenzi/real-time-covid19-tracker",
		link: "https://arsene-covid-tracker-app.netlify.app/",
		stack: "React - MaterialUI - HTML - API Manipulation",
	},
	{
		name: "Movie Searcher",
		description:
			"The movie searcher app is an  app that helps you get details about every movie that has ever been released.",
		image: "/movies.png",
		github: "https://github.com/ArseneNgenzi/react-movie-app",
		link: "https://arsene-movie-app.netlify.app/",
		stack: "React - Tailwind CSS - API Manipulation",
	},
	{
		name: "Weather Tracker",
		description:
			"The weather tracker app is an  app that helps you know the weather details about every country and city in the world.",
		image: "/weather.png",
		github: "https://github.com/ArseneNgenzi/react-weather-app",
		link: "https://arsene-weather-app.netlify.app/",
		stack: "React - Bootstrap - HTML - CSS - API Manipulation",
	},
];

const ProjectsSection = () => {
	return (
		<section id="projects">
			<h1 className="my-10 text-center font-bold text-4xl">
				Projects
				<hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
			</h1>

			<div className="flex flex-col space-y-28">
				{projects.map((project, idx) => {
					return (
						<div key={idx}>
							<SlideUp offset="-300px 0px -300px 0px">
								<div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
									<div className=" md:w-1/2">
										<Link href={project.link}>
											<Image
												src={project.image}
												alt=""
												width={1000}
												height={1000}
												className="rounded-xl shadow-xl hover:opacity-70"
											/>
										</Link>
									</div>
									<div className="mt-8 md:w-1/2">
										<h1 className="text-4xl font-bold mb-6">{project.name}</h1>
										<p className="text-xl leading-7 mb-2 text-neutral-600 dark:text-neutral-400">
											{project.description}
										</p>
										<p className="text-teal-600 pb-4"> {project.stack}</p>
										<div className="flex flex-row align-bottom space-x-4">
											<Link href={project.github} target="_blank">
												<BsGithub
													size={30}
													className="hover:-translate-y-1 transition-transform cursor-pointer"
												/>
											</Link>
											<Link href={project.link} target="_blank">
												<BsArrowUpRightSquare
													size={30}
													className="hover:-translate-y-1 transition-transform cursor-pointer"
												/>
											</Link>
										</div>
									</div>
								</div>
							</SlideUp>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default ProjectsSection;
