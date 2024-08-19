import Image from 'next/image'
import React from 'react'

const Article = () => {
  return (
    <article className="overflow-hidden shadow-lg rounded-2xl   transition hover:translate-y-2">
      <a href="#">
        <Image width={450}
          height={500}
          alt="article"
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcnRuZXJzaGlwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          className="rounded-t-lg object-cover object-center max-h-80" />

        <div className="p-4 bg-white min-h-40">

          <p className="uppercase text-xs font-medium tracking-widest text-title mt-2">
            Templates
          </p>
          <div className='text-xs font-normal text-date mb-2'>
            7 September 2016
          </div>
          <p className="text-xs leading-6 lg:text-base text-gris-link font-light">
            Improve UI with beautiful templates and components for Tailwind css.
          </p>
         
          <div className="flex flex-wrap items-center mt-2 gap-2">
            <div className="text-xs py-1.5 px-4 text-black bg-yellow rounded-2xl">
              #react.js
            </div>
            <div className="text-xs py-1.5 px-4 text-black bg-yellow rounded-2xl">
              #typescript
            </div>
            <div className="text-xs py-1.5 px-4 text-black bg-yellow rounded-2xl">
              #tailwind css
            </div>
          </div>
         
        </div>

      </a>
    </article>
  )
}

export default Article