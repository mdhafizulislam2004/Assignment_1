import { NavLink } from "react-router";
import { PiDownloadSimple } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
const AllDataApp = ({ AllBooks }) => {
    console.log(AllBooks);
    const { image, title, ratingAvg, downloads, id } = AllBooks

    return (
        <NavLink to={`/appditels/${id}`}>
            <div className="card shadow-2xl p-8">
                <figure className="w-3/3 p-6 rounded-2xl bg-gray-200">
                    <img className="h-[300px]"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Name: <span className="uppercase font-extrabold">{title}</span></h2>
                    <div className="flex gap-4 justify-between">
                        <h1 className="flex items-center gap-1 font-bold text-[#00D390] px-2 p-2 rounded-2xl bg-gray-200"><PiDownloadSimple />{downloads}</h1>
                        <div className="flex items-center rounded-2xl text-orange-400 bg-orange-200 px-2 gap-2">
                            <FaStar />
                            <p className="flex items-center gap-2">{ratingAvg}</p>
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default AllDataApp;