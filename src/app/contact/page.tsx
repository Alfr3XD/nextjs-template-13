"use client";

import { 
    useState,
    ChangeEvent,
    FormEvent,
    Fragment
} from 'react';
import { Transition } from '@headlessui/react';

import {
    IoMail,
    IoPerson,
    IoChatboxEllipses
} from 'react-icons/io5';
import {
    BsEnvelopeCheckFill
} from 'react-icons/bs';

export default function Contact() {

    const [modalState, setModalState] = useState(false);
    const [disableButton, setDisableButton] = useState(false);

    const [form, setForm] = useState({
        name: '',
        mail: '',
        issue: '',
        message: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((Form) => ({
            ...Form,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setDisableButton(true);
        setModalState(true)


    }
    return (
        <>

        <Transition
            className="fixed top-0 w-full h-full bg-white/80 dark:bg-black/80 z-[999] px-5 backdrop-blur-md"
            as="div"
            show={modalState}
            enter="transform transition duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className='flex w-full h-full'>
                <div className='m-auto'>
                    <menu className='max-w-lg container max-h-96 bg-slate-100 dark:bg-bluegray-800 border border-black/20 dark:border-white/20 px-20 pt-6 pb-10 rounded-lg'>
                        <h2 className='font-bold text-center'> Sent Content </h2>   
                        <BsEnvelopeCheckFill className='w-14 h-14 my-10 mx-auto' />

                        <button 
                            onClick={() => {
                                setModalState(false);
                                setDisableButton(false);
                            }}
                            className='block w-fit px-8 py-4 rounded-lg mt-5 text-center font-bold text-white mx-auto bg-blue-700 hover:bg-blue-900'
                        >
                            Close Modal
                        </button>
                    </menu>
                </div>
            </div>

        </Transition>

        <main>
            <section className='max-w-screen-2xl mx-auto text-center px-4'>
                <h1> CONTACT PAGE </h1>
                <h3 className='opacity-80 pl-2 pt-2'> Path to fill in a form </h3>
            </section>

            <section className='max-w-4xl mx-auto px-4'>
                <form onSubmit={handleSubmit}>
                    <label  className="block mb-2 font-medium pt-4"> Email </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <IoMail className="w-5 h-5"/>
                        </div>
                        <input 
                            type='email'
                            className="bg-slate-100 dark:bg-bluegray-700 border border-black/10 dark:border-white/10 text-sm rounded block w-full pl-10 p-2.5 "
                            required
                            value={form.mail}
                            name="mail"
                            onChange={handleChange}
                            placeholder="yourmail@hostmail.com"
                        />
                    </div>

                    <label  className="block mb-2 font-medium pt-4"> Username </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <IoPerson className="w-5 h-5"/>
                        </div>
                        <input 
                            type="text"
                            className="bg-slate-100 dark:bg-bluegray-700 border border-black/10 dark:border-white/10 text-sm rounded block w-full pl-10 p-2.5 "
                            required
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Alfr3XD_Nextjs@13"
                        />
                    </div>

                    <label  className="block mb-2 font-medium pt-4"> Issue </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <IoChatboxEllipses className="w-5 h-5"/>
                        </div>
                        <input 
                            type="text"
                            className="bg-slate-100 dark:bg-bluegray-700 border border-black/10 dark:border-white/10 text-sm rounded block w-full pl-10 p-2.5 "
                            name="issue"
                            value={form.issue}
                            onChange={handleChange}
                            placeholder="My issue message"
                        />
                    </div>

                    <label className="block mb-2 font-medium pt-4"> Message </label>
                    <div className="relative">
                        <textarea
                            className="bg-slate-100 dark:bg-bluegray-700 border border-black/10 dark:border-white/10 text-sm rounded block w-full p-2.5 h-20 min-h-[40px] max-h-56"
                            maxLength={900}
                            required
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Message Content here..."
                            name="message"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={disableButton}
                        className={`
                            w-fit block mt-8 px-8 py-4 
                            bg-blue-700 hover:bg-blue-900 
                            rounded shadow-xl
                            ${disableButton ?  "brightness-75" : ""}
                            text-white
                        `}
                    >
                        Send Form
                    </button>
                </form>
            </section>
        </main>
        </>
    )
}

