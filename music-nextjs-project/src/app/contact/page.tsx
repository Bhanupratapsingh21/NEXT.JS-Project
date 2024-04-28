'use client'
import React from "react";

function page() {

    return (
        <div className="pt-32">
            <div className="flex flex-col items-center justify-center mb-10 mt-10">
                <div className=" w-full relative max-w-sm">
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                    <div className="relative shadow-xl bg-black border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">

                        <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-2 text-red-500">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>

                            </div>
                            <div className="mt-4">
                                <p className="text-green-400">$ Hey You Want To Connect With Me</p>
                                <div>
                                    <a className="text-white" href="https://www.instagram.com/bhanu_pratap_2119">Instagram</a>
                                </div>

                                <div>
                                    <a className="text-white" href="https://github.com/Bhanupratapsingh21">Git-Hub</a>
                                </div>
                                <div>
                                    <a className="text-white" href="https://www.linkedin.com/in/bhanu-pratap-singh-bbb976257/">Linkedin</a>
                                </div>
                                <div>
                                    <a className="text-white" href="https://x.com/BhanuFreelancer">X(Twitter)</a>
                                </div>

                                <p className="text-green-400">$</p>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default page