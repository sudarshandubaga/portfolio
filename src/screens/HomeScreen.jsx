import React from 'react'

const HomeScreen = () => {
    return (
        <div className='h-full container mx-auto'>
            <section className='lg:grid grid-cols-3 gap-20 items-center h-full p-10'>
                <div className='col-span-2'>
                    <h1 className='text-6xl text-white font-bold'>I'm <span className='text-yellow-400'>Sudarshan Dubaga</span>,</h1>
                    <h3 className='text-3xl'>a Full Stack Website Developer (MERN + Laravel)</h3>
                    <p className='my-5 text-lg text-gray-300'>
                        I am passionate about building scalable and efficient web applications using modern technologies. With experience in both frontend and backend development, I enjoy solving complex problems and delivering high-quality solutions. Let's work together to bring your ideas to life!
                    </p>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className='flex gap-5 items-center text-center text-white  '>
                            <div className='text-6xl font-bold text-yellow-400'>12+</div>
                            <div className='text-xl'>Years of Experience</div>
                        </div>
                        <div className='flex gap-5 items-center text-center text-white '>
                            <div className='text-6xl font-bold text-yellow-400'>100+</div>
                            <div className='text-xl'>Projects Completed</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='profile-pic'>
                        <img src={`${import.meta.env.BASE_URL}/my.jpg`} className='w-full aspect-[3/4] object-cover rounded object-top' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeScreen