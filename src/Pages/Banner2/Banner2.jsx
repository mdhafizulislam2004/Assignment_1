const Banner2 = () => {
    return (
        <div className="bg-[#6322FA] text-neutral-content w-full p-10">
            <div className="card-body items-center text-center text-3xl">
                <h1 className="card-title text-4xl font-bold uppercase">Trusted by Millions, Built for You</h1>
                <div className="card-actions gap-10 mx-auto py-3">
                    <div>
                        <p className="text-xl opacity-80">Total Downloads</p>
                        <h1 className="font-bold uppercase text-5xl py-1">906K</h1>
                        <p className="text-xl">21% more than last month</p>
                    </div>
                    <div>
                        <p className="text-xl opacity-80">Total Reviews</p>
                        <h1 className="font-bold uppercase text-5xl py-1">29.6M</h1>
                        <p className="text-xl">46% more than last month</p>
                    </div>
                    <div className="mx-auto">
                        <p className="text-xl opacity-80">Active Apps</p>
                        <h1 className="font-bold uppercase text-5xl py-1">132+</h1>
                        <p className="text-xl">31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;