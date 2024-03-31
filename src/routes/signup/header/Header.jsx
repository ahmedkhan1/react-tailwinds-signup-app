import React, {useState} from "react";

export default function Header() {
    const [lang, setLang] = useState("English");
    const [toggleLang, setToggleLang] = useState(false);

  return (
    <div>        
        {/* Language Dropdown */}
        <div className="cursor-pointer absolute top-0 left-[7px] m-4 flex items-center">
            <svg height="17" viewBox="0 0 20 20" width="17" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM9 17.9C5.1 17.4 2 14 2 10c0-.6.1-1.2.2-1.8L7 13v1c0 1.1.9 2 2 2v1.9zm6.9-2.5c-.3-.8-1-1.4-1.9-1.4h-1v-3c0-.6-.4-1-1-1H6V8h2c.6 0 1-.4 1-1V5h2c1.1 0 2-.9 2-2v-.4c2.9 1.2 5 4.1 5 7.4 0 2.1-.8 4-2.1 5.4z" fill="#5E5E5E" fillRule="evenodd"></path></svg>

                
            <button
                className="relative ml-2 group transition-all duration-200 w-max h-max overflow-hidden flex flex-row items-center justify-center bg-white gap-2 rounded-lg border-0">
                <span className="text-sm" onClick={()=>setToggleLang(!toggleLang)}>
                    {lang}
                </span>
                <svg 
                    onClick={()=>setToggleLang(!toggleLang)}
                    className="rotate-180" xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                    viewBox="0 0 24 24">
                    <path fill="currentColor"
                    d="m12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z" />
                </svg>
            </button>
            {
                toggleLang &&
                <div
                    className="absolute top-[30px] shadow-lg -bottom-40 left-0 w-[116px] text-center h-max bg-white border border-zinc-200 rounded-md flex flex-col gap-2">
                    <span onClick={()=>{ setLang("English"); setToggleLang(false);}} className="cursor-pointer text-center flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 py-3">
                        <p className="text-center w-full">English</p>
                    </span>
                    <span onClick={()=>{ setLang("Español"); setToggleLang(false);}} className="cursor-pointer text-center flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 py-3">
                        <p className="text-center w-full">Español</p>
                    </span>
                </div>
            }
        </div>

        {/* Login Button */}
        <div className="absolute top-0 right-0 m-4 flex items-center">
            <span className="text-sm mr-2">Already have an account?</span>
            <button className="border-2 border-solid border-black rounded-md text-xs px-[10px] py-[3px]">Login</button>
        </div>
    </div>
  )
}
