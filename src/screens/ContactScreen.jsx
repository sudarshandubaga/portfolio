import React from 'react'
import { BiEnvelope, BiLogoGithub, BiLogoLinkedin, BiMapPin, BiPhone } from 'react-icons/bi'

const ContactScreen = () => {
    return (
        <section className='h-full'>
            <div className="container mx-auto h-full content-center">
                <div className="lg:grid lg:grid-cols-2 gap-10">
                    <div>
                        <div className='my-5 flex gap-5 items-center'>
                            <div className='lg:text-8xl text-5xl text-yellow-400'>
                                <BiEnvelope />
                            </div>
                            <a href='mailto:sudarshandubaga@gmail.com' className='lg:text-2xl'>
                                <div className='font-bold text-white'>Mail Me:</div>
                                <div>sudarshandubaga@gmail.com</div>
                            </a>
                        </div>
                        <div className='my-5 flex gap-5 items-center'>
                            <div className='lg:text-8xl text-5xl text-yellow-400'>
                                <BiPhone />
                            </div>
                            <a href='tel:919636150842' className='lg:text-2xl'>
                                <div className='font-bold text-white'>Call Me:</div>
                                <div>+91 96361 50842</div>
                            </a>
                        </div>
                        <div className='my-5 flex gap-5 items-center'>
                            <div className='lg:text-8xl text-5xl text-yellow-400'>
                                <BiMapPin />
                            </div>
                            <div className='lg:text-2xl'>
                                <div className='font-bold text-white'>Address:</div>
                                <div>Ratanada, Jodhpur &mdash; 342011.</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='my-5 flex gap-5 items-center'>
                            <div className='lg:text-8xl text-5xl text-yellow-400'>
                                <BiLogoLinkedin />
                            </div>
                            <a href='https://www.linkedin.com/in/sudarshan-dubaga/' target='_blank' className='lg:text-2xl'>
                                <div className='font-bold text-white'>Linkedin:</div>
                                <div>https://www.linkedin.com/in/sudarshan-dubaga/</div>
                            </a>
                        </div>
                        <div className='my-5 flex gap-5 items-center'>
                            <div className='lg:text-8xl text-5xl text-yellow-400'>
                                <BiLogoGithub />
                            </div>
                            <a href='https://github.com/sudarshandubaga' target='_blank' className='lg:text-2xl'>
                                <div className='font-bold text-white'>Github:</div>
                                <div>https://github.com/sudarshandubaga</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactScreen