"use client"
import coursedata from "../data/music_courses.json"
import Link from "next/link"
import React from "react"
import { BackgroundGradient } from "./ui/background-gradient"

import Image from "next/image"

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image: string
}

function FuturedCourses() {

    let featuredCourses = coursedata.courses.filter((courses: Course) => courses.isFeatured)


    return (
        <>
            <div className="py-12 bg-gray-900">
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                    <p className="mt-25 md:mt-4 text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Learn With The Best</p>
                </div>
                <div className="mt-10 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center" >
                        {
                            featuredCourses.map((course: Course) => (
                                <div key={course.id} className="flex justify-center">
                                    <BackgroundGradient className="flex flex-col rounded-[22px] max-w-sm h-full p-4 sm:p-10 bg-white dark:bg-zinc-900 overflow-hidden">
                                        <Image
                                            src={course.image}
                                            alt={course.title}
                                            height="400"
                                            width="400"
                                            className="object-contain"
                                        />
                                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                            {course.title}
                                        </p>

                                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                            {course.description}
                                        </p>
                                        <Link href={`/courses/${course.slug}`}>
                                        <button className="rounded-full  px-3 py-2 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                            <span className=" rounded-full text-[1rem] text-white">
                                                Only At-${course.price}
                                            </span>
                                        </button>
                                        </Link>
                                    </BackgroundGradient>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="mt-10 flex flex-col items-center justify-center text-center">
                    <Link href={"/courses"}>
                        <button className="w-[180px] px-2 bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg hover:text-black before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#f8f8f8] before:to-[rgb(240,240,240)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0  text-white">
                            View All Courses
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default FuturedCourses