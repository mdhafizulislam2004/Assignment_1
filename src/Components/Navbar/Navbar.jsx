import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";
import NavLogo from "../../../public/Image/Nav_Logo.png"
const Navbar = () => {
    const link = <div className="font-bold flex">
        <NavLink to="/" className={({isActive})=>isActive?"underline text-[#9F62F2]":"no-underline"} ><li className="m-2 hover:text-[#9F62F2]">Home</li></NavLink>
        <NavLink to="allapps" className={({isActive})=>isActive?"underline text-[#9F62F2]":"no-underline"}><li className="m-2 hover:text-[#9F62F2]">Apps</li></NavLink>
        <NavLink to="installedapp" className={({isActive})=>isActive?"underline text-[#9F62F2]":"no-underline"}><li className="m-2 hover:text-[#9F62F2]">Installation</li></NavLink>
    </div>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <NavLink to="/"><a className="flex items-center btn-ghost text-xl text-[#632EE3] lg:ml-20"><img src={NavLogo} alt="" />HERO.IO</a></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {link}
                </ul>
            </div>
            <div className="navbar-end">
                <a href="https://github.com/mdhafizulislam2004" className="btn bg-[#632EE3] lg:mr-20 text-white"><FaGithub />Contribute</a>
            </div>
        </div>
    );
};

export default Navbar;