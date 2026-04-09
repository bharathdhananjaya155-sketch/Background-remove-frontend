import {assets} from "../assets/assets.js";
import {useContext} from "react";
import {AppContext} from "../context/AppContext.jsx";

const Header = () => {
    const {removeBg} = useContext(AppContext);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/*Left side: video banner */}
            <div className="order-2 md:order-1 flex justify-center">

                <div className="shadow-[0_25px_60px_-12px_rgba(20,184,166,0.15)] rounded-3xl overflow-hidden border border-white/5">
                    <video src={assets.video_banner} autoPlay loop muted className="w-full max-w-[400px] h-auto object-cover" />
                </div>

            </div>

            {/*Right side: Text content*/}
            <div className="order-1 md:order-2">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 leading-tight">
                    The fastest <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">background eraser.</span>
                </h1>
                <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                    Transform your photos with our background remover app! Highlight your
                    subject and create a transparent background, so you can place it in a
                    variety of new designs and destinations. Try it now and immerse your
                    subject in a completely different environment!
                </p>

                <div>
                    <input type="file" accept="image/*" id="upload1" hidden onChange={(e) => removeBg(e.target.files[0])} />
                    <label htmlFor="upload1"
                           className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium px-8 py-4 rounded-full hover:opacity-90 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] text-lg cursor-pointer">
                        Upload your image
                    </label>
                </div>

            </div>


        </div>
    )
}

export default Header;