import React from 'react'

const AboutScreen = () => {
    return (
        <section className='h-full p-10'>
            <div className="container mx-auto h-full content-center">
                <h1 className='text-6xl text-white font-bold'>I'm Sudarshan Dubaga</h1>
                <div className='text-2xl'>a Full Stack Website Developer (MERN | Laravel | Wordpress)</div>
                <hr className='my-10' />
                <h1 className='text-yellow-400 text-3xl'>Info</h1>
                <div className='border-b-4 border-yellow-400 w-24 mt-2 mb-5'></div>
                <p className='text-lg text-gray-300'>
                    I am passionate about building scalable and efficient web applications using modern technologies. With experience in both frontend and backend development, I enjoy solving complex problems and delivering high-quality solutions. Let's work together to bring your ideas to life!
                </p>


                <h1 className='text-yellow-400 text-3xl mt-10'>Education</h1>
                <div className='border-b-4 border-yellow-400 w-24 mt-2 mb-5'></div>
                <div>
                    <h2 className='font-bold'>B. Tech. in Computer Science Engineering</h2>
                    <p className='text-gray-400'>VIET Jodhpur &mdash; RTU | 2014</p>
                </div>
            </div>
        </section>
    )
}

export default AboutScreen