import React from 'react'

import SingleWork from '@/components/SingleWork'

export interface WorkProps {
    company: string,
    role: string,
    jobLocation: string,
    jobDate: string,
    jobTasks: any
}

 const WorkHistory = () => {

    const jobs = [
        
        {
            company: ' MICRO FOCUS',
            role: 'Software Support Engineer',
            jobLocation: ' Remote',
            jobDate: 'OCTOBER 2022 - PRESENT',
            jobTasks: [
                'Continuously monitoring software systems.',
                'Take care of UFT-related tickets.',
                'Identifying network issues and resolving them.',
                'Handling UFT Java add-ins, .NET add-ins, Web add-ins, and ALM integration with UFT.'
            ]
        },
        {
            company: ' TRANSAX Ltd',
            role: 'Software Engineer',
            jobLocation: ' Rwanda',
            jobDate: 'SEPTEMBER 2020 - SEPTEMBER 2022',
            jobTasks: [
                'Contributed to various projects using Node.js, React.js,, and Vue.js',
                'Worked on https://rwandapedia.rw',
                'Worked with UX/UI designers to design and build user interfaces and iterations based on user feedback.',
                'Specified requirements and supported test case development.',
                'Worked on the back-end of an e-wallet application (using NodeJS/Express.JS) with payment integrations such as PayPal and Stripe.',
                'Utilized crucial design software skills to assist with projects.',
                'Implemented and updated application modules under the direction of Senior Software Developers.',
                'Effectively coded software changes and alterations based on specific design specifications.',
                'Used advanced software programs and helped to maintain strong communication among colleagues.',
                'Tested and accurately configured software and maintained high-functioning hardware.',
                
            ]
        },

    ]

  return (
    <div>
        <h1 className="mt-0 mb-10 text-center font-bold text-4xl">
        Work History
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
        {jobs.map((job,id) => {
            // console.log('JOB: ', job)
            return (
                <>
                <SingleWork key={id} {...job}/>
                    {/* <h1 key={id} style={{color:'white'}}>{job.company}</h1> */}
                </>
            )
        }
        )}

        {/* <h1 color='white'>hahahah</h1> */}
    </div>
  )
}

export default WorkHistory
