import { PiDownloadSimple } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router";

const App = ({ SingleApp }) => {
    const { image, title, ratingAvg, downloads,id } = SingleApp
    return (
           <NavLink to={`/appsditels/${id}`}>
             <div className="card shadow-2xl p-3">
                <figure className="w-3/3 p-12 rounded-2xl bg-gray-200">
                    <img className="h-[300px]"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Name: <span className="uppercase font-extrabold">{title}</span></h2>
                    <div className="flex justify-between">
                        <h1 className="flex items-center gap-1 font-bold text-[#00D390] px-2 p-2 rounded-2xl bg-gray-200"><PiDownloadSimple />{downloads}</h1>
                        <div className="flex items-center text-orange-500 px-2 rounded-2xl bg-orange-200 gap-2">
                            <FaStar />
                            <p className="flex items-center gap-2">{ratingAvg}</p>
                        </div>
                    </div>
                </div>
            </div>
           </NavLink>
    );
};

export default App;