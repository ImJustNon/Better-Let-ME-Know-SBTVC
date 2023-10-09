import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import { config } from '../config/config'
import { useEffect, useState } from "react";

function Navbar({ isLogin }){
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const [buildingVisible, setBuildingVisible] = useState(false);
    const [roomVisible, setRoomVisible] = useState(false);

    useEffect(() =>{
        setBuildingVisible(false);
        setRoomVisible(false);
        if(pathname === "/buildings"){
            setBuildingVisible(true);
        }
        if(pathname === "/rooms"){
            setBuildingVisible(true);
            setRoomVisible(true);
        }
    }, [pathname]);

    function handlePreviousBuildingPage(){
        if(pathname === "/buildings") return;
        else navigate(-1);
    }

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
                            <li className={buildingVisible === true ? "" : "invisible"}>
                                <button onClick={() => handlePreviousBuildingPage()} className={(pathname === "/buildings" ? "btn-active" : "") + " btn-ghost mx-3"}>/Buildings</button>
                            </li>
                            <li className={roomVisible === true ? "" : "invisible"}>
                                <button className={(pathname === "/rooms" ? "btn-active" : "") + " btn-ghost mx-3"}>/Rooms</button>
                            </li>
                        </ul>
                    </div>
                    <Link to={"/"} className="btn btn-ghost normal-case font-normal text-2xl">Let ME Know SBTVC</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li>
                            <Link to="/" className={(pathname === "/" ? "btn-active" : "") + " btn-ghost mx-3"}>/Home</Link>
                        </li>
                        <li className={buildingVisible === true ? "" : "invisible"}>
                            <button onClick={() => handlePreviousBuildingPage()} className={(pathname === "/buildings" ? "btn-active" : "") + " btn-ghost mx-3"}>/Buildings</button>
                        </li>
                        <li className={roomVisible === true ? "" : "invisible"}>
                            <button className={(pathname === "/rooms" ? "btn-active" : "") + " btn-ghost mx-3"}>/Rooms</button>
                        </li>
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    
                </div> */}
            </div>
        </div>
    );
}

export default Navbar;