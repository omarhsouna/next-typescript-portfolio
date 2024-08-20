import React from 'react'
import FacebookIcon from '../../public/icons/facebook.svg';
import LinkedinIcon from '../../public/icons/linkedin.svg';
import YoutubeIcon from '../../public/icons/youtube.svg';
import GithubIcon from '../../public/icons/github.svg';
const Footer = () => {
    return (
        <footer className="section bg-gris-section py-10 lg:py-[120px]">
            <div className='flex flex-col items-center mx-auto gap-5'>
                <div className='flex justify-center items-center gap-6'>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='w-10 h-10 flex items-center justify-center rounded-full border border-gray-300  transition hover:-translate-y-2 hover:border-black'>
                        <FacebookIcon className="w-5 h-5" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='w-10 h-10 flex items-center justify-center rounded-full border border-gray-300  transition hover:-translate-y-2 hover:border-black'>
                        <LinkedinIcon className="w-5 h-5" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='w-10 h-10 flex items-center justify-center rounded-full border border-gray-300  transition hover:-translate-y-2 hover:border-black'>
                        <YoutubeIcon className="w-5 h-5" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='w-10 h-10 flex items-center justify-center rounded-full border border-gray-300  transition hover:-translate-y-2 hover:border-black'>
                        <GithubIcon className="w-5 h-5" />
                    </a>
                </div>
                <p className='text-xs text-[#898989] font-light'>© 2024 Omar Hsouna. all rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer