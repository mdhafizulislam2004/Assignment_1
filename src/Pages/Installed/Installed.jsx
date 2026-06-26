import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { PiDownloadSimple } from "react-icons/pi";

const Installed = () => {
    const [installedApps, setInstalledApps] = useState([])

    useEffect(() => {
        const apps = JSON.parse(localStorage.getItem("installedApps")) 
        setInstalledApps(apps)
    }, [])

    const handleUninstall = (id) => {
        const nextApps = installedApps.filter(app => app.id !== id)
        setInstalledApps(nextApps)
        localStorage.setItem("installedApps", JSON.stringify(nextApps))
    }

    
    

    return (
        <div className="pt-20 pb-10">
            <title>Assignment- Install</title>
            <div className="hero">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="sm:text-5xl text-3xl font-bold">Your Installed Apps</h1>
                        <p className="py-6 text-gray-400">
                            Explore All Trending Apps on the Market developed by us
                        </p>
                    </div>
                </div>
            </div>

            {installedApps.length === 0 ? (
                <div className="text-center py-20">
                    <h1 className="text-3xl text-gray-300">No App Data Add</h1>
                </div>
            ) : (
                <div className="space-y-5 mx-8 mt-8">
                    {installedApps.map(app => (
                        <div key={app.id} className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl border border-gray-200 bg-white p-5 shadow-lg">
                            <div className="flex items-center gap-4">
                                <img src={app.image} alt={app.title} className="h-24 w-24 rounded-3xl object-cover bg-gray-100" />
                                <div>
                                    <h2 className="text-xl font-bold">{app.title}</h2>
                                    <p className="text-sm text-gray-500">{app.companyName || "Unknown Developer"}</p>
                                    <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600">
                                        <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1">
                                            <PiDownloadSimple /> {app.downloads}
                                        </span>
                                        <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1">
                                            <FaStar className="text-yellow-500" /> {app.ratingAvg}
                                        </span>
                                        <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1">
                                            {app.size} MB
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => handleUninstall(app.id)} className="btn bg-green-500 rounded-3xl btn-md">Uninstall</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Installed;