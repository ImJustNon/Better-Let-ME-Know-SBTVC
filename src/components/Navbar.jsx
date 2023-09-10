import { Link, useLocation } from "react-router-dom";

function Navbar(){
    const { pathname } = useLocation();


    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100 rounded-2xl z-50" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                <div className="navbar-start">
                    <div className="dropdown text-black">
                        <label tabIndex={0} className="btn btn-ghost  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to="/" className={(pathname === "/" ? "btn-active" : "") + " btn-ghost mx-3"}>/Home</Link>
                        </li>
                        <li>
                            <Link to="/buildings" className={(pathname === "/buildings" ? "btn-active" : "") + " btn-ghost mx-3"}>/Building</Link>
                        </li>
                        <li>
                            <Link to="/rooms" className={(pathname === "/rooms" ? "btn-active" : "") + " btn-ghost mx-3"}>/Room</Link>
                        </li>
                        </ul>
                    </div>
                    <Link to={"/"} className="btn btn-ghost normal-case font-normal text-2xl">Let ME Know SBTVC</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li>
                            <Link to="/" className={(pathname === "/" ? "btn-active" : "") + " btn-ghost mx-3"}>/Home</Link>
                        </li>
                        <li>
                            <Link to="/buildings" className={(pathname === "/buildings" ? "btn-active" : "") + " btn-ghost mx-3"}>/Building</Link>
                        </li>
                        <li>
                            <Link to="/rooms" className={(pathname === "/rooms" ? "btn-active" : "") + " btn-ghost mx-3"}>/Room</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-ghost">Login</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;