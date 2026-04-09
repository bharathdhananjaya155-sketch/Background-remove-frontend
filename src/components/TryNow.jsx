import {useContext} from "react";
import {AppContext} from "../context/AppContext.jsx";

const TryNow = () => {
    const {removeBg} = useContext(AppContext);
    return (
        <div className="flex flex-col items-center justify-center px-4 py-16">

            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-7 text-center">

                Remove Image Background.
            </h2>
            <p className="text-slate-400 mb-8 text-center">
                Get a transparent background for any image.
            </p>
            <div className="bg-[#1a2235] rounded-2xl border border-white/5 p-10 flex flex-col items-center space-y-4 hover:border-teal-500/20 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
                <input type="file" id="upload2" hidden accept="image/*" onChange={(e) => removeBg(e.target.files[0]) } />
                <label htmlFor="upload2"
                       className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] text-white font-semibold py-3 px-6 rounded-full text-lg cursor-pointer transition-all duration-300 hover:scale-105">
                    Upload Image
                </label>
                <p className="text-slate-500 text-sm">
                    or drop a file, paste image or <a href="#" className="text-teal-400 underline hover:text-teal-300 transition-colors">URL</a>
                </p>
            </div>
        </div>
    )
}

export default TryNow;