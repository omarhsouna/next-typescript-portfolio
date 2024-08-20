import clsx from 'clsx';
import React from 'react'
type Props = React.LabelHTMLAttributes<HTMLLabelElement> & {error?:boolean};
const Label = ({className,error=false, ...rest}:Props) => {
  return (
    <label className={clsx('text-xs font-normal tracking-wide',
        error ? 'text-error':'text-[#898989]',
         className)} {...rest} />
  )
}

export default Label