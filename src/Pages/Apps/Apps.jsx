import { NavLink } from "react-router";
import App from "../App/App";

const Apps = ({ AppsData }) => {

    return (
        <div>
            <div className="mx-auto text-center pt-20 pb-10 text-3xl">
                <h1 className="font-bold text-4xl">Trending Apps</h1>
                <p className="text-xl text-gray-400 pt-3">Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mx-8 py-3.5">
                {
                    AppsData.map(apps => <App SingleApp={apps} key={apps.id}></App>)
                }
            </div>
            <NavLink to="/allapps"><button className="btn btn-secondary mx-auto flex my-4">Show All</button></NavLink>
        </div>
    );
};

export default Apps;