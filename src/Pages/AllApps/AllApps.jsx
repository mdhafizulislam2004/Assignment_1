import { useLoaderData } from "react-router";
import AllDataApp from "../AllDataApp/AllDataApp";
// import AllDataApp from "../AllDataApp/AllDataApp";

const AllApps = () => {

    const AllData = useLoaderData()

    console.log(AllData);

    return (
        <div className="pt-20">
            <div className="text-center pb-10">
                <h1 className="text-4xl font-extrabold">Our All Applications</h1>
                <h3 className="text-xl text-gray-400 mt-3">Explore All Apps on the Market developed by us. We code for Millions</h3>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 pt-4 mx-8 items-center">
                {
                    AllData.map(Data => <AllDataApp AllBooks={Data} key={Data.id}></AllDataApp>)
                }
            </div>
        </div>
    );
};

export default AllApps;