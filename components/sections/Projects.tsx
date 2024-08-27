import React from 'react'
import Project from '../Project'

const Projects = () => {
    return (
        <section className="section bg-white py-10 lg:py-[120px]" id="projects">
            <div className="lg:max-w-screen-xl mx-auto px-6">
                <h2 className='text-[28px] font-kaushan font-normal text-title mb-8'>Recent Works</h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>
        </section>
    )
}

export default Projects