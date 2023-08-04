"use client";
import Image from 'next/image';

const LoadPage = () => 
    <div className='flex w-full h-full'>
        <div className="m-auto">
            <Image className="w-36 h-36 animate-spin mx-auto" alt="YOURLOGO" src="/LOGO.png" width={400} height={400} />
            <span className='text-2xl text-center block mt-5'> Loading... </span>
        </div>
    </div>

export default LoadPage;