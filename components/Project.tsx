import Image from 'next/image'
import React from 'react'

const Project = () => {
    return (
        <div className="relative cursor-pointer w-full m-auto overflow-hidden shadow-lg rounded-2xl group">
            <Image width={450}
                height={500}
                alt="project" src="/images/profile.jpg" className="rounded-t-lg object-fill object-center max-h-80 transform group-hover:scale-105 transition-transform duration-500" />
            <div className="p-4 bg-white min-h-40 max-h-40">

                <p className="uppercase text-xs font-medium tracking-widest text-title my-2">
                    Templates
                </p>
                <p className="text-xs leading-6 lg:text-base text-gris-link font-light">
                    Improve UI with beautiful templates and components for Tailwind css.
                </p>
                <div className="flex items-center mt-2 gap-2">
                    <div className="text-xs  py-1.5 px-4 text-black bg-yellow rounded-2xl">
                        #react.js
                    </div>
                    <div className="text-xs  py-1.5 px-4 text-black bg-yellow rounded-2xl">
                        #typescript
                    </div>
                    <div className="text-xs  py-1.5 px-4 text-black bg-yellow rounded-2xl">
                        #tailwind css
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 bg-gray-900 bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-1000">
                <div className="flex space-x-4">
                    <a
                        href="#"
                        className="text-white text-sm lg:text-lg  font-medium py-2 px-6 bg-transparent rounded-full border-yellow hover:border-yellow hover:border-2 "
                    >
                        View Demo
                    </a>
                    <a
                        href="#"
                        className="text-white text-sm lg:text-lg  font-medium py-2 px-6 bg-transparent rounded-full border-yellow hover:border-yellow hover:border-2"
                    >
                        Github
                    </a>

                </div>
            </div>
        </div>

    )
}

export default Project