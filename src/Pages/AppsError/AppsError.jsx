import { NavLink } from "react-router";
import AppNotFound from "../../../public/Image/Apps_Not_Found.png"
const AppsError = () => {
    return (
        <div className="card bg-base-100">
            <figure className="px-10 pt-10">
                <img
                    src={AppNotFound}
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-5xl font-bold uppercase">OPPS!! APP NOT FOUND</h2>
                <p className="text-3xl pt-3 text-gray-400">The App you are requesting is not found on our system.  please try another apps.</p>
                <div className="card-actions">
                    <NavLink to="/"><button className="btn btn-active btn-primary mt-5">Go Back!</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default AppsError;