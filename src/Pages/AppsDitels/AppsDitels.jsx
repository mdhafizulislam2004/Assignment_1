import { Suspense } from "react";
import { useLoaderData, useParams } from "react-router";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";




const AppsDitels = () => {
    const { id } = useParams()
    const AppsId = parseInt(id)
    const data = useLoaderData()
    const AllApps = data.find(app => app.id === AppsId)
    const { image, title, ratingAvg, downloads, companyName,reviews,size } = AllApps

    return (
        <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>

            <div className="bg-base-200 w-full p-9 mx-auto">
                <div className=" flex items-center gap-7 w-full justify-center flex-col lg:flex-row">
                    <img
                        src={image}
                        className=" h-[300px] p-7 rounded-lg shadow-2xl"
                    />
                    <div className="justify-between">
                        <h1 className="text-5xl font-bold">{title}
                        </h1>
                        <p className="py-6 border-b-1 border-gray-300">
                            Developed by: <span className="text-purple-500">{companyName}</span>
                        </p>
                        <div className="py-3.5 flex text-center gap-5">
                            <div>
                                <h3 className="ml-6"><FiDownload /></h3>
                                <h1>Downloads</h1>
                                <h1>{downloads}</h1>
                            </div>
                            <div>
                                <h3 className="ml-12"><FaStar /></h3>
                                <h1>Average Ratings</h1>
                                <h1>{ratingAvg}</h1>
                            </div>
                            <div>
                                 <h3 className="ml-10"><AiFillLike /></h3>
                                <h1>Total Reviews</h1>
                                <h1>{reviews}</h1>
                            </div>
                        </div>
                        <button className="btn mt-5 btn-primary">Install Now ({size} MB)</button>
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default AppsDitels;