import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
	{
		name: "Rwandapedia",
		description:
			"RwandaPedia is a web app created to deeply detail the history of Rwanda.",
		image: "/rwandapedia.jfif",
		github: "#",
		link: "https://rwandapedia.rw/",
		stack: "React - Redux - Tailwind CSS",
	},
	{
		name: "Housing Protector",
		description:
			"Housing Protector is a website created for a Rwandan company, working from France called housing protector. It also has an admin dashboard made with React, SQL, and Node.js",
		image: "/housing.png",
		github: "https://github.com/ArseneNgenzi/housingprotector1",
		link: "https://housingprotector.rw/",
		stack: "React - Node.js - SQL - Bootstrap - HTML - CSS",
	},
	{
		name: "Murambi HCC",
		description:
			"MURAMBI HCC is a website created for Murambi Honey in partnership with SERUKA.",
		image: "/murambi.png",
		github: "https://github.com/ArseneNgenzi/murambiHCC",
		link: "https://murambi-hcc.netlify.app/",
		stack: "JQuery - Bootstrap - HTML - CSS",
	},
	{
		name: "Covid-19 Tracker",
		description:
			"This is a covid-19 Tracker with updated live data, created with React.js and Material UI",
		image: "/covidTracker.png",
		github: "https://github.com/ArseneNgenzi/real-time-covid19-tracker",
		link: "https://arsene-covid-tracker-app.netlify.app/",
		stack: "React - MaterialUI - HTML - CSS",
	},
	{
		name: "Movie Searcher",
		description:
			"The movie searcher app is an  app that helps you get details about every movie that has ever been released.",
		image: "/movies.png",
		github: "https://github.com/ArseneNgenzi/react-movie-app",
		link: "https://arsene-movie-app.netlify.app/",
		stack: "React - Tailwind CSS - HTML - CSS",
	},
	{
		name: "Weather Tracker",
		description:
			"The weather tracker app is an  app that helps you know the weather details about every country and city in the world.",
		image: "/weather.png",
		github: "https://github.com/ArseneNgenzi/react-weather-app",
		link: "https://arsene-weather-app.netlify.app/",
		stack: "React - Bootstrap - HTML - CSS",
	},
  {
		name: "Kator Family Photos",
		description:
			"Kator Family Photos is the best photos and video digitization service in the world.",
		image: "/familyphotos.png",
		github: "https://katorfamilyphotos.com/",
		link: "https://katorfamilyphotos.com/",
		stack: "React - Bootstrap - HTML - CSS",
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
