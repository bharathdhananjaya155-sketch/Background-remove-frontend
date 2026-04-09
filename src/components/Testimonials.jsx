import {testimonials} from "../assets/assets.js";

const Testimonials = () => {
    return (
        <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8 py-12">
            {/* Title section */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 text-center">
                They love us. You will too.
            </h2>

            {/* Body section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="flex flex-col max-w-md mx-auto md:mx-0 justify-between rounded-xl bg-[#1a2235] border border-white/5 hover:border-teal-500/20 hover:shadow-[0_8px_30px_rgba(20,184,166,0.08)] transition-all duration-300">
                        <div className="flex flex-col px-6 pt-8 mb-10 space-y-5">
                            <svg
                                width="24"
                                height="18"
                                viewBox="0 0 24 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-teal-500/40 fill-current"
                            >
                                <path
                                    d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z"
                                    fill="current"
                                ></path>
                            </svg>
                            <p className="text-slate-300 m-0" style={{hyphens: "auto"}}>
                                {testimonial.quote}
                            </p>
                        </div>
                        <div className="flex space-x-2 bg-[#111827] px-6 pt-6 pb-5 rounded-b-xl border-t border-white/5">

                            <div className="flex flex-col justify-center">

                                <p className="font-semibold text-slate-200 m-0">

                                    {testimonial.author}
                                </p>
                                <p className="text-slate-500 text-sm m-0 mt-1">
                                    {testimonial.handle}
                                </p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials;