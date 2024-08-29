import clsx from "clsx";
import React from "react";
import Label from "./Label";
type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  helperText?: string;
};
const TextField = React.forwardRef<HTMLInputElement, Props>(
  ({ className, error = false, helperText = "", ...rest }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={clsx(
            "h-12 text-xs tracking-tighter font-medium focus:outline-none w-full px-1  border-b  transition-colors duration-300",
            error
              ? "border-error  placeholder:text-error focus:border-error"
              : "border-gray-300  focus:placeholder:text-black focus:border-black",
            className
          )}
          {...rest}
        />
        {helperText && (
          <Label error={error} className="mx-3 mt-1">
            {helperText}
          </Label>
        )}
      </div>
    );
  }
);
TextField.displayName = "TextField";
export default TextField;
