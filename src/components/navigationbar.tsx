'use client';

import { 
    useState,
    useEffect
} from 'react';
import {
    Transition
} from '@headlessui/react';

import Image from "next/image";
import Link from "next/link";

import {
    IoMdMail
} from 'react-icons/io';
import {
    FaDiscord,
    FaGithub
} from 'react-icons/fa';
import {
    BsFillMoonStarsFill,
    BsSunFill
} from 'react-icons/bs';
import {
    GiHamburgerMenu
} from 'react-icons/gi';
import {
    IoCloseOutline
} from 'react-icons/io5';

import {
    useTheme
} from 'next-themes';

export default function NavigationBar() {

    const {theme, setTheme} = useTheme();

    const Links = [
        {
            text: "Home",
            href: "/"
        },
        {
            text: "About",
            href: "/about"
        },
        {
            text: "Contact",
            href: "/contact"
        },
    ];

    const [menuState, setMenuState] = useState(false);

    useEffect(() => {
        if(menuState) {
            document.body.classList.add('overflow-y-hidden');
            document.body.classList.remove('overflow-y-auto');
        }
        else {
            document.body.classList.add('overflow-y-auto');
            document.body.classList.remove('overflow-y-hidden');
        }
        
    })
    return (
        <>
            <div className="fixed sm:static w-full top-0 z-50">
                <header className="w-full bg-slate-300 dark:bg-bluegray-600">
                    <div className="max-w-screen-2xl mx-auto px-4 py-2">
                        <div className="flex items-center justify-between">
                            <ul className="flex items-center justify-between">
                                <li>
                                    <Link href="#" className="flex items-center space-x-2">
                                        <IoMdMail className="w-6 h-6"/>
                                        <span> yourmail@mailhost.com </span>
                                    </Link>
                                </li>
                            </ul>

                            <ul className="flex items-center justify-between space-x-5">
                                <li>
                                    <Link href="#" className="flex items-center space-x-2 hover:brightness-50">
                                        <FaDiscord className="w-6 h-6"/>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="#" className="flex items-center space-x-2 hover:brightness-50">
                                        <FaGithub className="w-6 h-6"/>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
                <nav className="w-full bg-slate-50 dark:bg-bluegray-700 shadow-xl">
                    <div className="max-w-screen-2xl mx-auto px-4 py-2">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="duration-300 flex items-center space-x-2 sm:space-x-4 dark:hover:brightness-50 drop-shadow">
                                <Image 
                                    src="/LOGO.png" 
                                    alt="LOGO" 
                                    draggable={false}
                                    className="w-16 h-16 sm:w-20 sm:h-20"
                                    width={800} 
                                    height={800} 
                                />
                                <span className="max-w-[40px] text-xl sm:text-3xl font-bold">
                                    YOUR LOGO
                                </span>
                            </Link>
                            <ul className="hidden sm:flex items-center justify-between space-x-4">
                                {Links.map((link, i) => 
                                    <li key={i}> 
                                        <Link href={link.href} className="px-5 py-3 rounded-lg bg-slate-300 hover:bg-slate-400 dark:bg-bluegray-200/50 dark:hover:bg-bluegray-200"> 
                                            {link.text}
                                        </Link>  
                                    </li>
                                )}

                                <li>
                                    <button 
                                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
                                        className="p-2 bg-slate-400/30 hover:bg-slate-400 dark:hover:bg-slate-600 focus:border focus:border-black dark:focus:border-white rounded-xl ml-2"
                                    >
                                        {theme === "dark" ? <BsFillMoonStarsFill className="w-6 h-6"/> : <BsSunFill className="w-6 h-6" /> }
                                    </button>
                                </li>
                            </ul>

                            <button onClick={() => setMenuState(s => !s)} className="duration-100 block rounded-lg sm:hidden p-2 hover:scale-110 focus:bg-slate-400/50 focus:border-black focus:border">
                                {menuState ? <IoCloseOutline className="w-6 h-6 stroke-[8px]"/> : <GiHamburgerMenu className="w-6 h-6"/>}
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="block sm:hidden">     
                <Transition
                    as="div"
                    onClick={() => menuState ? setMenuState(s => !s) : {}} 
                    className="fixed top-0 left-0 z-30 w-full h-full bg-white/40 dark:bg-black/60 backdrop-blur-xl"
                    show={menuState}
                    enter="duration-75" enterFrom="opacity-0" enterTo="opacity-100"
                    leave="duration-75" leaveFrom="opacity-100" leaveTo="opacity-0"    
                />
                
                <menu className={`transition-transform fixed top-0 right-0 z-40 h-full w-64 bg-white dark:bg-bluegray-600 ${menuState ? "translate-x-0" : "translate-x-[100%]"}`}>
                    <div className="pt-32 px-4">
                        <ul className="py-5 flex-col space-y-3">
                            {
                                Links.map((link, i) => 
                                    <li key={i}> 
                                        <Link href={link.href} className="w-full bg-slate-200 hover:bg-slate-300 dark:bg-bluegray-800 dark:hover:bg-bluegray-700 rounded-lg text-right font-bold px-6 py-3 flex justify-end items-center space-x-2"> 
                                            <span>{link.text}</span>
                                        </Link>  
                                    </li>
                                )
                            }

                            <li>
                                <button 
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
                                    className="w-full bg-slate-200 hover:bg-slate-300 dark:bg-bluegray-800 dark:hover:bg-bluegray-700 
                                    rounded-lg text-right font-bold px-6 py-3 flex justify-end items-center space-x-2
                                    focus:border focus:border-black dark:focus:border-white"
                                >
                                    <span> Theme </span>
                                    {theme === "dark" ? <BsFillMoonStarsFill className="w-6 h-6"/> : <BsSunFill className="w-6 h-6" /> }
                                </button>
                            </li>
                        </ul>
                    </div>
                </menu>
            </div>
        </>
    )
}