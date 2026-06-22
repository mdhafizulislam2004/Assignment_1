import { NavLink } from "react-router";
import Errorimage from "../../../public/Image/PageError.png"
const ErrorPage = () => {
    return (
        <div className="card bg-base-100">
            <figure className="px-10 pt-10">
                <img
                    src={Errorimage}
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-5xl font-bold">Oops, page not found!</h2>
                <p className="text-3xl pt-3 text-gray-400">The page you are looking for is not available.</p>
                <div className="card-actions">
                    <NavLink to="/"><button className="btn btn-active btn-primary mt-5">Go Back!</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;