import { assets, FOOTER_CONSTANTS } from "../assets/assets.js";

const Footer = () => {
    return (
        <footer className="flex item-center justify-between gap-4 px-4 lg:px-44 py-3 border-t border-white/5 bg-[#111827]/50">
            <img src={assets.logo} alt="logo" width={32} />
            <p className="flex-1 border-l border-slate-700/50 pl-4 text-slate-500 max-sm:hidden">
                &copy; {new Date().getFullYear()}
            </p>
            <div className="flex gap-3">
                {FOOTER_CONSTANTS.map((item, index) => (
                    <a href={item.url} key={index} target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                        <img src={item.logo} alt="logo" width={32} />
                    </a>
                ))}
            </div>
            <p className="text-center text-slate-500 font-medium"></p>
        </footer>
    )
}

export default Footer;