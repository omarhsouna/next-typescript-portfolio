import React from "react";
interface Props {
    children:React.ReactNode;
    isOpen:boolean;
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Drawer({ children, isOpen, setIsOpen }:Props) {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      
      <section
        className={
          " w-screen max-w-80p right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }

      >
         <button
          onClick={() => setIsOpen(false)}
          className="ml-auto flex flex-col items-center justify-center w-8 h-8 space-y-1 relative pr-3 pt-3">
          <span className="w-6 h-0.5 bg-black rotate-45 top-0 translate-x-[1px] translate-y-[6px]"></span>
          <span className="w-6 h-0.5 bg-black -rotate-45 bottom-0"></span>
         
        </button>
        <article className="relative w-[80%] max-w-80 p-7 flex flex-col space-y-6 h-full">
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
