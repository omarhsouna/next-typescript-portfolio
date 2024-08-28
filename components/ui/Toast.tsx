import React, { useEffect } from "react";
import clsx from "clsx";

interface Props {
  message: string;
  show: boolean;
  severity: "success" | "error";
  duration?: number;
  onClose: () => void;
}

const Toast = ({
  message,
  show,
  duration = 3000,
  onClose,
  severity,
}: Props) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  return (
    <div
      className={clsx(
        "flex gap-3 items-center fixed top-[74px] z-50 right-5 text-white px-4 py-2 rounded shadow-lg transform transition-transform duration-300 ease-in-out",
        show ? "translate-x-0  opacity-100" : "translate-x-full  opacity-0",
        severity === "success" ? "bg-green-500" : "bg-red-500"
      )}
    >
      <span>{message}</span>
      <svg
        onClick={onClose}
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 cursor-pointer hover:text-gray-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};

export default Toast;
