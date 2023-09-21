import { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([])
    const [datalength, setDataLength] = useState(4)

    useEffect(()=>{
        fetch ('jobs.json')
        .then (rsc => rsc.json())
        .then (data => setJobs(data))
    },[])

    return (
        <div className="lg:min-h-[400px] text-center space-y-4 w-[80%] m-auto">
            <h1 className="text-4xl font-bold">Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p> 
            <div className="grid grid-cols-2 gap-5">
            {
              jobs.slice(0, datalength).map(job => <Jobs key={job.id} job={job}></Jobs>)  
            }
            </div>   
            <div className={datalength== jobs.length && 'hidden'}>
                <button onClick={()=>setDataLength(jobs.length)} className="btn">Show all jobs</button>
                </div>     
        </div>
    );
};

export default FeaturedJobs;