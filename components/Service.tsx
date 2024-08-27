import React from 'react'
interface Props {
    Icon: React.ReactNode;
    title: string;
    description: string;
}
const Service = ({ Icon, title, description }:Props) => {
  return (
    <div>
    <div className="mb-4">{Icon}</div>
    <h3 className="uppercase text-sm font-medium tracking-widest text-title my-3">{title}</h3>
    <p className="text-xs leading-6 lg:text-base text-gris-link font-light">{description}</p>
  </div>
  )
}

export default Service