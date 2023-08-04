import Image from 'next/image'

export default function About() {
    return (
        <main>
            <section>
                <div className='max-w-screen-2xl mx-auto px-4 py-2 text-center'>
                    <h1> ABOUT PAGE </h1>
                </div>
            </section>

            <section>
                <div className='max-w-screen-2xl mx-auto px-4 py-2 mt-20'>
                    <h2 className='font-bold text-center lg:text-start'> ¿New Content? </h2>
                    <div className='flex gap-5 flex-wrap lg:flex-nowrap items-center justify-around lg:justify-between mt-4'>

                        <Image 
                            src="/background.png"
                            alt="BG"
                            className='max-w-xl container h-96 object-cover rounded-lg border-2 border-bluegray-700 dark:border-white'
                            width={1200}
                            height={1200}
                        />

                        <p className='max-w-3xl text-justify lg:text-start'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti amet, a nihil rem nam ea velit culpa molestias nemo ex maiores, corporis totam reprehenderit quisquam ipsa doloribus nobis modi adipisci.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet itaque at temporibus delectus repellendus. Ad perspiciatis facilis consequatur natus quaerat eveniet, ut maiores libero dolore hic, odit provident dolores fugiat.  
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nam fugit, voluptate mollitia amet molestias neque omnis dolores eius repudiandae. Eius dicta, similique nesciunt culpa odit aut quaerat quos ipsam.
                        </p>

                    </div>
                </div>
            </section>
        </main>
    )
}
