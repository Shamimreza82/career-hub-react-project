import { Link, NavLink } from "react-router-dom";


const Errorpage = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="w-full mx-auto text-center lg:w-2/3">
    <h1 className="mb-4 text-6xl font-thin text-gray-900">404</h1>
    <p className="mb-3 text-xl font-bold text-gray-900 md:text-2xl">Oh no! We couldn’t find the page you were looking for.</p>
    <p className="mb-3 text-lg font-medium text-gray-700">
      Have questions? Head over to our
      <a href="#" className="underline">product documentation</a>, visit our <a href="#" className="underline">Community</a> for tutorials and the latest happenings, or go back to the
      <NavLink className="underline" to='/'>homepage</NavLink>.
    </p>
  </div>
        </div>
    );
};

export default Errorpage;