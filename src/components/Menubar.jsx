import {useContext, useState} from "react";
import {assets} from "../assets/assets.js";
import {Menu, X} from "lucide-react";
import {Link, useNavigate} from "react-router-dom";
import {SignedIn, SignedOut, useClerk, UserButton, useUser} from "@clerk/clerk-react";
import {AppContext} from "../context/AppContext.jsx";

const Menubar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const {openSignIn, openSignUp} = useClerk();
    const {user} = useUser();
    const {credit} = useContext(AppContext);
    const navigate = useNavigate();

    const openRegister = () => {
        setMenuOpen(false);
        openSignUp({});
    }

    const openLogin = () => {
        setMenuOpen(false);
        openSignIn({});
    }

    return (
        <nav className="bg-[#111827]/80 backdrop-blur-xl px-8 py-4 flex justify-between items-center border-b border-white/5 sticky top-0 z-50">
            {/* Left side: logo + text*/}
            <Link className="flex item-center space-x-2" to="/">
                <img src={assets.logo} alt="logo" className="h-8 w-8 object-contain cursor-pointer"/>
                <span className="text-2xl font-semibold text-teal-400 cursor-pointer">
                    remove.<span className="text-slate-500 cursor-pointer">bg</span>
                </span>
            </Link>

            {/* Right side: Action button*/}
            <div className="hidden md:flex items-center space-x-4">
                <SignedOut>
                    <button className="text-slate-300 hover:text-teal-400 font-medium transition-colors duration-300" onClick={openLogin}>
                        Login
                    </button>
                    <button className="bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 font-medium px-5 py-2 rounded-full transition-all duration-300 border border-teal-500/20 hover:border-teal-500/40" onClick={openRegister}>
                        Sign up
                    </button>
                </SignedOut>
                <SignedIn>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <button onClick={() => navigate("/pricing")} className="flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 px-4 sm:px-5 py-1.5 sm:py-2.5 rounded-full hover:scale-105 hover:bg-teal-500/20 transition-all duration-500 cursor-pointer">
                            <img src={assets.credits} alt="credits" height={24} width={24}/>
                            <p className="text-xs sm:text-sm font-medium text-teal-300">
                                Credits: {credit}
                            </p>
                        </button>
                        <p className="text-slate-400 max-sm:hidden">
                            Hi, {user?.fullName}
                        </p>
                    </div>
                    <UserButton />
                </SignedIn>
            </div>

            {/* Mobile hamburger */}
            <div className="flex md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-slate-300">
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="absolute top-16 right-8 bg-[#1a2235] border border-white/10 shadow-2xl shadow-black/40 rounded-xl flex flex-col space-y-4 p-5 w-48 backdrop-blur-xl">
                    <SignedOut>
                        <button className="text-slate-300 hover:text-teal-400 font-medium transition-colors" onClick={openLogin}>
                            Login
                        </button>
                        <button className="bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 font-medium px-4 py-2 rounded-full text-center border border-teal-500/20 transition-all" onClick={openRegister}>
                            Sign up
                        </button>
                    </SignedOut>
                    <SignedIn>
                        <div className="flex items-center gap-2 sm:gap-3">
                            <button onClick={() => navigate("/pricing")} className="flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 px-4 py-1.5 sm:py-2.5 rounded-full hover:scale-105 transition-all duration-500 cursor-pointer">
                                <img src={assets.credits} alt="credits" height={24} width={24} />
                                <p className="text-xs sm:text-sm font-medium text-teal-300">
                                    Credits: {credit}
                                </p>
                            </button>
                        </div>
                        <UserButton />
                    </SignedIn>
                </div>
            )}
        </nav>
    )
}

export default Menubar;