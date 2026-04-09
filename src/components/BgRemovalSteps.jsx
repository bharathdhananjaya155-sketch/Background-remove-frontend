import {steps} from "../assets/assets.js";

const BgRemovalSteps = () => {
    return (
        <div className="text-center mb-16">

            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12">
                How to remove a background in seconds?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {steps.map((item, index) => (
                    <div key={index} className="bg-[#1a2235] p-8 rounded-2xl border border-white/5 hover:border-teal-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(20,184,166,0.08)]">

                        <span className="inline-block bg-teal-500/10 text-teal-400 text-sm font-semibold px-3 py-1 rounded-full mb-4 border border-teal-500/20">
                            {item.step}
                        </span>
                        <h3 className="text-xl font-bold text-slate-100 mb-4">{item.title}</h3>
                        <p className="text-slate-400 text-base leading-relaxed">{item.description}</p>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default BgRemovalSteps