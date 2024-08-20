import clsx from 'clsx'
import React from 'react'
import Label from './Label'
type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: boolean, helperText?: string }
const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(({ className, error = false, helperText = "", ...rest }, ref) => {
    return (
        <div className='w-full'>
            <textarea
                ref={ref}
                rows={5}
                className={
                    clsx("resize-none text-xs tracking-tighter font-medium focus:outline-none w-full px-1 border-b  transition-colors duration-300",
                        error ? 'border-error  placeholder:text-error focus:border-error' : 'border-gray-300  focus:placeholder:text-black focus:border-black', className)} {...rest} />
            {helperText && <Label error={error} className='mx-3 mt-1'>
                {helperText}
            </Label>}
        </div>
    )
})

export default Textarea