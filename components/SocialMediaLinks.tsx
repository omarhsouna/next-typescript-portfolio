import React from 'react'
import FacebookIcon from '../public/icons/facebook.svg';
import LinkedinIcon from '../public/icons/linkedin.svg';
import YoutubeIcon from '../public/icons/youtube.svg';
import GithubIcon from '../public/icons/github.svg';
const SocialMediaLinks = () => {
  return (
    <div className="mt-6 flex space-x-4">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FacebookIcon className="w-5 h-5 text-white" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
      <LinkedinIcon className="w-5 h-5 text-white" />
      </a>

      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <YoutubeIcon className="w-5 h-5 text-white" />
      </a>
      <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
        <GithubIcon className="w-5 h-5 text-white" />
      </a>
    </div>
  )
}

export default SocialMediaLinks