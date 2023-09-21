import banner from  '../../assets/images/user.png'

const Banner = () => {

      
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={banner}
          className="max-w-sm rounded-lg "
        />
        <div className='lg:w-[50%]'>
          <h1 className="text-5xl font-bold">One Step Closer To Your Dream Job</h1> 
          <p className="py-6">
          Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
          <button className="btn  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white ">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;