'use client';
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

import Footer from "@Components/Footer";
import NavigationBar from "@Components/navigationbar";
import LoadingPage from '@Components/LoadingPage'

export default function PagesTemplate({
    children,
}: {
    children: React.ReactNode
}) {
    const [loaded, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoading(true), 120);
    })

    return (
        <ThemeProvider defaultTheme='dark' attribute='class' disableTransitionOnChange>
        
            <Transition className={`fixed top-0 left-0 min-w-screen min-h-screen w-full h-full bg-slate-100 dark:bg-bluegray-600`}
                show={!loaded}
                leave="duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <LoadingPage/>
            </Transition>

            {
                loaded ? 
                <>
                    <NavigationBar />
                    {children}
                    <Footer />
                </>
                :
                <></>
            }

        </ThemeProvider>
    )
}