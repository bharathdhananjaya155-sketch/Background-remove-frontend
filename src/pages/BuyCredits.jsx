import {useAuth, useClerk} from "@clerk/clerk-react";
import {useContext} from "react";
import {AppContext} from "../context/AppContext.jsx";
import {placeOrder} from "../service/OrderService.js";
import {plans} from "../assets/assets.js";

const BuyCredits = () => {
    const {isSignedIn, getToken} = useAuth();
    const {openSignIn} = useClerk();
    const {loadUserCredits, backendUrl} = useContext(AppContext);

    const handleOrder = (planId) => {
        if (!isSignedIn) {
            return openSignIn();
        }

        placeOrder({
            planId,
            getToken,
            onSuccess: () => {
                loadUserCredits();
            },
            backendUrl
        });
    }

    return (
        <div className="py-10 md:px-20 lg:px-20 min-h-[80vh]">
            <div className="container mx-auto px-4">
                {/* Section title*/}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12 text-center">
                        Choose your perfect package
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                        Select from our carefully curated photography packages designed to meet your specific needs and budget.
                    </p>
                </div>


                {/* Section body*/}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan) => (
                        <div key={plan.id} className={`relative pt-6 p-6 ${plan.popular ? 'border-teal-500/30 shadow-[0_0_40px_rgba(20,184,166,0.1)]' : 'border-white/5'} bg-[#1a2235] border rounded-2xl hover:transform hover:-translate-y-2 transition-all duration-300 hover:border-teal-500/20`}>
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-1 text-white text-sm font-semibold shadow-lg shadow-teal-500/20">
                                    Most Popular
                                </div>
                            )}
                            <div className="text-center p-6">
                                <h3 className="text-2xl font-bold text-slate-100">{plan.name}</h3>
                                <div className="mt-4 text-center">
                                    <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 font-bold">
                                        &#8377;{plan.price}
                                    </span>
                                </div>
                            </div>
                            <div className="px-4 pb-8">
                                <ul className="mb-8 space-y-4">
                                    <li className="flex items-center text-slate-300">
                                        {plan.credits}
                                    </li>
                                    <li className="flex items-center text-slate-400">
                                        {plan.description}
                                    </li>
                                </ul>
                                <button className="w-full py-3 px-6 text-center text-white font-semibold rounded-full
                  bg-gradient-to-r from-teal-500 to-cyan-500 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40
                  transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer" onClick={() => handleOrder(plan.id)}>
                                    Choose plan
                                </button>

                            </div>
                        </div>
                    ))}

                </div>



            </div>
        </div>
    )
}

export default BuyCredits;