import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="flex mt-20 text-center">
                <div>
                    <div className="max-w-md mx-auto">
                        <h1 className="text-5xl font-bold">We Build <span className="text-[#632EE3]">Productive</span> Apps</h1>
                        <p className="py-6">
                            Atb HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                        </p>
                    </div>
                    <button className="btn m-2 bg-white text-black border-gray-200 text-2xl"><IoLogoGooglePlaystore />Google Play</button>
                    <button className="btn m-2 bg-white text-black border-gray-200 text-2xl"><FaAppStoreIos />App Store</button>
                    <div className="">
                        <img src="../../../public/Image/Header.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;