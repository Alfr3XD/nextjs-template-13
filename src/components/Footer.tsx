import Image from "next/image";
import Link from "next/link";

export default function Footer() {
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
    ]

    const Conditions = [
        {
            text: "Mit",
            href: "#"
        },
        {
            text: "License",
            href: "#"
        },
        {
            text: "Template",
            href: "#"
        },
    ]
    return (
        <footer className="w-full bg-slate-200 dark:bg-bluegray-800 mt-16">
            <div className="max-w-screen-2xl mx-auto px-4 py-8">
                <div className="flex flex-wrap gap-5 text-center justify-between">
                    <div className="max-w-xs">
                        <div className="flex items-center space-x-3">
                            <Image 
                                src="/LOGO.png" 
                                alt="LOGO" 
                                draggable={false}
                                className="w-16 h-16"
                                width={800} 
                                height={800} 
                            />
                            <span className="text-2xl font-bold">
                                YOUR LOGO
                            </span>
                        </div>
                        <p className="text-start opacity-80 text-sm mt-4"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos quae vel laboriosam culpa maiores reprehenderit eaque laborum sit tempora aliquid minima, id, saepe pariatur. Molestias dignissimos doloribus nihil enim velit? </p>
                    </div>

                    <ul className="flex-col space-y-2 text-start">
                        <li>
                            <span className="py-3 text-xl font-bold">
                                Links
                            </span>
                        </li>

                        {Links.map((link, i) => 
                            <li key={i}> 
                                <Link href={link.href} className="hover:underline"> 
                                    {link.text}
                                </Link>  
                            </li>
                        )}

                    </ul>

                    <ul className="flex-col space-y-2 text-start">
                        <li>
                            <span className="py-3 text-xl font-bold">
                                Conditions
                            </span>
                        </li>

                        {Conditions.map((link, i) => 
                            <li key={i}> 
                                <Link href={link.href} className="hover:underline"> 
                                    {link.text}
                                </Link>  
                            </li>
                        )}
                    </ul>

                    <ul className="flex-col space-y-2 text-start">
                        <li>
                            <span className="py-3 text-xl font-bold">
                                Contact
                            </span>
                        </li>

                        {Conditions.map((link, i) => 
                            <li key={i}> 
                                <span>
                                    contact +00phone?@mail?ubication
                                </span>
                            </li>
                        )}
                    </ul>
                </div>
                <span className="block pt-8 text-md font-light opacity-60"> ©Alfr3XD / template ? logo - 2023 </span>
            </div>
        </footer>
    )
}