'use client'
import React from "react";
import { Meteors } from "@/components/ui/meteors";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};

function page() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        <div className="flex flex-col pt-10 items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full max-w-sm">
                <div className=" w-full flex flex-col items-center justify-center pt-20 relative ">
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                    <div className="relative shadow-xl bg-black max-w-screen-lg border  border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
                            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                                Welcome to Edusic
                            </h2>
                            
                            <form className="my-8" onSubmit={handleSubmit}>
                                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                                    <LabelInputContainer>
                                        <Label htmlFor="firstname">First name</Label>
                                        <Input id="firstname" placeholder="First Name" type="text" />
                                    </LabelInputContainer>
                                    <LabelInputContainer>
                                        <Label htmlFor="lastname">Last name</Label>
                                        <Input id="lastname" placeholder="Last Name" type="text" />
                                    </LabelInputContainer>
                                </div>
                                <LabelInputContainer className="mb-4">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" placeholder="exemple@gmail.com" type="email" />
                                </LabelInputContainer>
                                <LabelInputContainer className="mb-4">
                                    <Label htmlFor="password">Password</Label>
                                    <Input id="password" placeholder="Password" type="password" />
                                </LabelInputContainer>
                                <button
                                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                                    type="submit"
                                >
                                    Sign up &rarr;
                                    <BottomGradient />
                                </button>

                                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                                <h3 className="text-center mb-6">Login With</h3>
                                <div className="flex flex-col space-y-4">
                                    <button
                                        className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                                        type="submit"
                                    >
                                        <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                            GitHub
                                        </span>
                                        <BottomGradient />
                                    </button>
                                    <button
                                        className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                                        type="submit"
                                    >
                                        <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                            Google
                                        </span>
                                        <BottomGradient />
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* Meaty part - Meteor effect */}
                        <Meteors number={20} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default page