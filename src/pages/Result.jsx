import {useContext} from "react";
import {AppContext} from "../context/AppContext.jsx";
import {useNavigate} from "react-router-dom";

const Result = () => {
    const {image, resultImage} = useContext(AppContext);
    const navigate = useNavigate();
    return (
        <div className="mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]">
            <div className="bg-[#1a2235] rounded-2xl px-8 py-6 border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                {/* image container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left side */}
                    <div className="flex flex-col">
                        <p className="font-semibold text-slate-400 mb-2">Original</p>
                        <img src={image ? URL.createObjectURL(image): ""} alt="" className="rounded-xl w-full object-cover border border-white/5" />
                    </div>

                    {/* Right side */}
                    <div className="flex flex-col">
                        <p className="font-semibold text-slate-400 mb-2">
                            Background Removed
                        </p>
                        <div className="rounded-xl border border-white/10 h-full bg-layer relative overflow-hidden">
                            <img src={resultImage ? resultImage: ""} alt="" className="w-full object-cover" />
                            {!resultImage && image && (
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <div className="border-4 border-teal-500 rounded-full h-12 w-12 border-t-transparent animate-spin">
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/*Buttons*/}
                {resultImage && (
                    <div className="flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6">
                        <button className="border border-teal-500/30 text-teal-400 font-semibold py-2 px-4 rounded-full text-lg hover:scale-105 hover:bg-teal-500/10 transition-all duration-300" onClick={() => navigate("/")}>
                            Try another image
                        </button>
                        <a href={resultImage} download className="cursor-pointer py-3 px-6 text-center text-white font-semibold rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition duration-300 ease-in-out transform hover:scale-105">
                            Download image
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Result;