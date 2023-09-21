import { Link } from "react-router-dom";


const Errorpage = () => {
    return (
        <div>
            <h1>opps!!!</h1>
            <Link to='/'>Go Back to home</Link>
        </div>
    );
};

export default Errorpage;