import React from 'react'
import Article from '../Article'

const Articles = () => {
    return (
        <section className="section bg-gris-section py-10 lg:py-[120px]" id="blog">
            <div className="lg:max-w-screen-xl mx-auto px-6">
                <h2 className='text-[28px] font-normal text-title mb-8'>Latest Blogs</h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    <Article />
                    <Article />
                    <Article />
                </div>
                <a href="" className="max-w-fit uppercase font-medium tracking-widest text-xs hover:shadow-hover-link shadow-active-link text-black duration-300 ease-linear delay-0">View blog</a>
            </div>
        </section>
    )
}

export default Articles