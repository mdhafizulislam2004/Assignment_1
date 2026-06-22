import { NavLink } from "react-router";

const AllDataApp = ({ AllBooks }) => {
    console.log(AllBooks);
    const { image, title, ratingAvg, downloads, id } = AllBooks

    return (
        <NavLink to="/appditels">
            <div className="card shadow-sm p-4">
            <figure className="p-5 bg-gray-200">
                <img className="h-[300px]"
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        </NavLink>
    );
};

export default AllDataApp;