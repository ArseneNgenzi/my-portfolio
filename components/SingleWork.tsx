import React from "react";

import { WorkProps } from "./WorkHistory";

const SingleWork = (work: WorkProps) => {
	// console.log(work)

	return (
		<div className="border-solid border-sky-500 flex flex-col ">
            
			<div className="">
				<div className="md:flex font-black md:text-xl text-teal-600 pt-4 uppercase">
					<p>{work.role},</p> &nbsp;
					<p>{work.company},</p>&nbsp;
					<p>{work.jobLocation}.</p>
				</div>
                <p className="text-xs text-gray-400 pt-1">{work.jobDate}</p>
			</div>
            <h1 className="font-black py-2">Tasks:</h1>
            <div className="px-3 md:px-10 flex flex-col justify-center items-start">
                {work.jobTasks.map((task:string,id:any) => {
                    return (
                        <p className=" pt-2 text-lg" key={id}>{++id}. &nbsp; {task}</p>
                    )
                })}
            </div>
		</div>
	);
};

export default SingleWork;
