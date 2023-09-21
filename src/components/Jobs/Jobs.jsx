import { MdLocationOn, MdCurrencyExchange } from "react-icons/md";
import { Link } from "react-router-dom";

const Jobs = ({ job }) => {
  const {id, company_name, logo, job_title, location, job_type, salary} = job
  return (
      <div className="card  bg-base-100 shadow-xl my-4">
        <div className="flex justify-center mt-3">
            <img src={logo} alt="" />
        </div>
        <div className="card-body">
          <h2 className="card-title ">{job_title}</h2>
          <p className="text-left">{company_name}</p>
          <div className="flex justify-start gap-4">
            <button className="p-1  rounded-md text-black border border-red-500 hover:bg-[#9873FF]">Remote</button>
            <button className="p-1  rounded-md text-black border border-red-500 hover:bg-slate-400">Full Time</button>
          </div>
          <div className="text-left flex justify-center items-center">
          <MdLocationOn></MdLocationOn>
            <span className="text-left"> {location}</span> 
            <MdCurrencyExchange></MdCurrencyExchange>
            <span> Salary: {salary}</span>
          </div>
          <div className="card-actions justify-start">
           <Link to ={`/job/${id}`}>
            <button className="btn  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white ">View Details</button>
           </Link>
          
          </div>
        </div>
      </div>
  );
};

export default Jobs;
