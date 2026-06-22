import { useLoaderData } from "react-router";
import AllDataApp from "../AllDataApp/AllDataApp";
// import AllDataApp from "../AllDataApp/AllDataApp";

const AllApps = () => {

    const AllData = useLoaderData()

    console.log(AllData);

    return (
        <div className="pt-20">
            <div className="text-center">
                <h1 className="text-4xl font-extrabold">Our All Applications</h1>
                <h3 className="text-xl text-gray-400 mt-3">Explore All Apps on the Market developed by us. We code for Millions</h3>
            </div>
            <div className="flex justify-between items-center mt-4 mx-8 sm:mx-10">
                <div className="font-bold sm:text-xl lg:text-2xl">
                    <h1>Apps Found ({AllData.length})</h1>
                </div>
                <div>
                    <label className="input">
                    <svg className="h-[1em] opacity-" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>
                </div>
            </div>


            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-4 mx-8 items-center">
                {
                    AllData.map(Data => <AllDataApp AllBooks={Data} key={Data.id}></AllDataApp>)
                }
            </div>
        </div>
    );
};

export default AllApps;