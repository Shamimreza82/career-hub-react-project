const Jobs = ({ job }) => {
  console.log(job);
  const {company_name, logo, job_title, location, job_type, salary
  } = job
  return (
      <div className="card  bg-base-100 shadow-xl">
        <div className="flex justify-center mt-3">
            <img src={logo} alt="" />
        </div>
        <div className="card-body">
          <h2 className="card-title ">{job_title}</h2>
          <p className="text-left">{company_name}</p>
          <div className="text-left">
          <span className="text-left">{location}</span> <span> Salary: {salary}</span>
          </div>
          <div className="card-actions justify-start">
          <button className="btn  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white ">View Details</button>
          </div>
        </div>
      </div>
  );
};

export default Jobs;
