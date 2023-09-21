import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const jobs = useLoaderData(); 
    const {id} = useParams()



    const idInt = parseInt(id, jobs)
    const job = jobs.find(job => job.id === idInt )
    const {job_description, 
        job_responsibility, 
        educational_requirements,
        contact_information, salary, job_title,

         experiences } = job;                  

        console.log(job);
const handleApplayJob = () => {
    toast('youhave Applayed succes')
}

    return (
        <div className='min-h-screen lg:w-[80%] m-auto'>
            <h2 className='text-center text-3xl font-bold mt-8'>Job Details</h2>
            <br />
            <div className='grid gap-4 md:grid-cols-4'>
                <div className=' border md:col-span-3'>
                    <h2><span className='font-bold'>Job Description:</span> {job_description}</h2>
                    <br />
                    <h2><span className='font-bold'>Job Responsibility:</span> {job_responsibility}</h2>
                    <br />
                    <h2><span className='font-bold'>Educational Requirements:</span></h2>
                    <h2> {educational_requirements}</h2>
                    <br />
                    <h1 className='font-bold'>Experiences:</h1>
                    <h4>{experiences}</h4>

                </div>
                <div className='border p-3'>
                     <p className='text-center font-bold'>Job Details</p>  
                     <hr />  
                     <p>Salary: {salary} </p>
                     <p>Job Title: {job_title}</p>
                     <br />
                     <h1 className='text-center font-bold'>Contact Information</h1>
                     <hr />  
                     <p>phone: {contact_information.phone}</p>
                     <p>Email: {contact_information.email} </p>
                     <p>Address: {contact_information.address} </p>
                     <button className='btn btn-primary w-full mt-5' onClick={handleApplayJob}>Apply Now</button>
                </div>
            </div>
            
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;