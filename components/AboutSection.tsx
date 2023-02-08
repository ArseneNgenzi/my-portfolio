import React from "react";
import Image from "next/image";

const skills = [
	{ skill: "JavaScript" },
	{ skill: "Next.js" },
	{ skill: "React" },
	{ skill: "Vue.js" },
	{ skill: "Node.js" },
	{ skill: "SQL" },
	{ skill: "MongoDB" },
	{ skill: "TypeScript" },
	{ skill: "JQuery" },
	{ skill: "HTML & CSS" },
	{ skill: "Tailwind CSS" },
	{ skill: "Bootstrap" },
	{ skill: "Git" },
	{ skill: "Sass" },
	{ skill: "Figma" },
	// { skill: "" },
];

const AboutSection = () => {
	return (
		<section id="about">
			<div className="mt-12 mb-12 md:mb-0 pb-0 md:pt-16 md:pb-10">
				<h1 className="text-center font-bold text-4xl">
					About Me
					<hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
				</h1>

				<div className="">
					<div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
						<div className="md:w-1/2 ">
							<h1 className="text-center text-xl font-bold mb-6 md:text-left">
								Get to know me!
							</h1>
							<p>
								Hi, my name is Arsene and I am a{" "}
								<span className="font-bold text-teal-500">
									{"highly ambitious"}
								</span>
								,
								<span className="font-bold text-teal-500">
									{" self-motivated"}
								</span>
								, and
								<span className="font-bold text-teal-500">
									{" driven"}
								</span>{" "}
								software engineer based in Kigali, Rwanda.
							</p>
							{/* <br /> */}
							{/* <p>
              I graduated from California State University, Northridge in 2019
              with a BS in Computer Engineering and have been working in the
              field ever since.
            </p> */}
							{/* <br /> */}
							{/* <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, to making YouTube videos,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p> */}
							<br />
							<p>
								I am a result-oriented and enthusiastic Software Engineer and who is proficient in both Frontend and Backend development, with strong communication skills and great problem solving skills. I strongly understand how to deal with clients and what it means to deliver high-quality products on a timely schedule. I am willing to utilize all my skills and experience to add immediate value to my employers' business. 

							</p>
							<br/>
							<p>
								I believe that you should{" "}
								<span className="font-bold text-teal-500">
									never stop growing
								</span>{" "}
								and that&#39;s what I strive to do, I have a passion for
								technology and a desire to always push the limits of what is
								possible. I am excited to see where my career takes me and am
								always open to new opportunities. 🙂
							</p>
						</div>
						<div className="text-center md:w-1/2 md:text-left">
							<h1 className="text-xl font-bold mb-6">My Skills</h1>
							<div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
								{skills.map((item, idx) => {
									return (
										<p
											key={idx}
											className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
										>
											{item.skill}
										</p>
									);
								})}
							</div>
							{/* <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /> */}
						</div>
					</div>
          <div className="mt-10 md:mt-2 flex items-center justify-center">
          <Image
            src="/illu4.png"
            alt=""
            width={600}
            height={400}
            className="md"
          />
        </div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
