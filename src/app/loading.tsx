"use client";
import Image from 'next/image';

const LoadPage = () => 
<div className='w-full h-full bg-bluegray-600'>
    <div className='flex w-full h-full'>
        <div className="m-auto">
            <Image className="w-36 h-36 mx-auto" alt="YOURLOGO" src="/LOGO.png" width={400} height={400} />
        </div>
    </div>
</div>
export default LoadPage;