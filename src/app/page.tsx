import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section className='max-w-screen-2xl mx-auto text-center'>
        <h1> YOUR HEADER PAGE </h1>
        <h4 className='opacity-80 pl-2 pt-2'> Nextjs@13 (App Routes) Template by @Alfr3XD </h4>

        <div className='flex gap-4 items-center justify-center text-xl font-semibold mt-8'>
          <Link href="#" className='block w-fit px-6 py-3 rounded-lg shadow-lg bg-blue-700 hover:bg-blue-900 text-white'>
            Learn More
          </Link>

          <Link href="#" className='block w-fit px-6 py-3 bg-transparent border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white rounded-lg shadow-lg'>
            Alfr3XD
          </Link>
        </div>
      </section>

      <section className='mt-20 bg-blue-900/20 dark:bg-bluegray-400/20 w-full'>
        <div className='max-w-screen-2xl mx-auto px-4 py-10'>
          <div className="flex flex-wrap lg:flex-nowrap gap-5 items-center justify-around lg:justify-between">

            <div className='max-w-md max-h-[440px] h-[440px] p-4 bg-slate-100 dark:bg-bluegray-600 container rounded-lg border border-black/40 dark:border-white/20 shadow-xl'>
              <Image 
                src="/background.png"
                className='w-full h-40 rounded'
                alt="BG" 
                width={1200}
                height={1200}  
              />
              <h2 className='font-bold pt-4'> YOUR INFO </h2>
              <p className='mt-4 py-2 max-h-28 h-28 overflow-y-auto'> 
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, atque quis? Temporibus voluptatum nihil quidem cupiditate in quas aperiam est, qui repudiandae rerum perferendis neque suscipit, exercitationem ex ut rem.
              </p>
              <Link href="#" className='block w-fit px-6 py-3 mt-4 rounded-lg shadow-lg bg-blue-700 hover:bg-blue-900 text-white'>
                Learn More
              </Link>
            </div>

            <div className='max-w-md max-h-[440px] h-[440px] p-4 bg-slate-100 dark:bg-bluegray-600 container rounded-lg border border-black/40 dark:border-white/20 shadow-xl'>
              <Image 
                src="/background.png"
                className='w-full h-40 rounded'
                alt="BG" 
                width={1200}
                height={1200}  
              />
              <h2 className='font-bold pt-4'> YOUR INFO </h2>
              <p className='mt-4 py-2 max-h-28 h-28 overflow-y-auto'> 
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, atque quis? Temporibus voluptatum nihil quidem cupiditate in quas aperiam est, qui repudiandae rerum perferendis neque suscipit, exercitationem ex ut rem.
              </p>
              <Link href="#" className='block w-fit px-6 py-3 mt-4 rounded-lg shadow-lg bg-blue-700 hover:bg-blue-900 text-white'>
                Learn More
              </Link>
            </div>

            <div className='max-w-md max-h-[440px] h-[440px] p-4 bg-slate-100 dark:bg-bluegray-600 container rounded-lg border border-black/40 dark:border-white/20 shadow-xl'>
              <Image 
                src="/background.png"
                className='w-full h-40 rounded'
                alt="BG" 
                width={1200}
                height={1200}  
              />
              <h2 className='font-bold pt-4'> YOUR INFO </h2>
              <p className='mt-4 py-2 max-h-28 h-28 overflow-y-auto'> 
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, atque quis? Temporibus voluptatum nihil quidem cupiditate in quas aperiam est, qui repudiandae rerum perferendis neque suscipit, exercitationem ex ut rem.
              </p>
              <Link href="#" className='block w-fit px-6 py-3 mt-4 rounded-lg shadow-lg bg-blue-700 hover:bg-blue-900 text-white'>
                Learn More
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
