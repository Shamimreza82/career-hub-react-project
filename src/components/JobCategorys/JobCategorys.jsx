import { useEffect, useState } from "react";
import JobCategory from "../JobCategory/JobCategory";

const JobCategorys = () => {

    const [jobCatagory, setJobCatagory] = useState ([])

    useEffect (()=> {
        fetch('categories.json')
        .then(rsc => rsc.json())
        .then(data => setJobCatagory(data))
    },[])
    return (
        <div className="lg:min-h-[400px] text-center space-y-4">
            <h1 className="text-4xl font-bold">Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 w-[80%] m-auto gap-4">
                {
                    jobCatagory.map(jobCata => <JobCategory key={jobCata.id} jobCate={jobCata}></JobCategory>)
                }
            </div>
        </div>
    );
};

export default JobCategorys;