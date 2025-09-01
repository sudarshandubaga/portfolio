import React from 'react'
import { portfolio_data } from './portfolios_data';
import { CgClose } from 'react-icons/cg';

const PortfolioScreen = () => {
    const [portfolios] = React.useState(portfolio_data);
    const [selected, setSelected] = React.useState(null);

    return (
        <section className='h-full p-10'>
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-x-5 text-black">
                    {
                        portfolios?.map((portfolio, index) => (
                            <div
                                className='bg-gray-200 rounded overflow-hidden mb-5 cursor-pointer hover:shadow-lg transition'
                                key={index}
                                onClick={() => setSelected(portfolio)}
                            >
                                <div className='aspect-video bg-white'>
                                    <img src={portfolio.image} alt="" className='aspect-video object-cover object-top' loading='lazy' />
                                </div>
                                <div className='p-5'>
                                    <div className='flex gap-1 flex-wrap text-xs lg:text-base'>
                                        {
                                            portfolio.technologies?.map((tech) => (
                                                <div className='inline-block bg-gray-500 text-white px-2 rounded-full' key={tech}>{tech}</div>
                                            ))
                                        }
                                    </div>
                                    <div className='lg:text-2xl font-bold'>{portfolio.name}</div>
                                    <div className='lg:text-lg text-xs text-gray-500'>{portfolio.tagline}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* Modal */}
            {selected && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg max-w-3xl w-full shadow-lg relative overflow-hidden">
                        <button
                            className="absolute top-2 right-2 text-white cursor-pointer text-2xl bg-gray-500 rounded-full p-1 hover:bg-black"
                            onClick={() => setSelected(null)}
                            aria-label="Close"
                        >
                            <CgClose />
                        </button>
                        <div className="items-center">
                            <div className="aspect-[3/2] bg-gray-100 rounded-t-lg">
                                <img src={selected.image} alt="" className="aspect-[3/2] object-cover object-top w-full" />
                            </div>
                            <div className="p-6 ">
                                <div className="text-3xl font-bold mb-1 text-black">{selected.name}</div>
                                <div className="flex gap-2 flex-wrap mb-3">
                                    {selected.technologies?.map((tech) => (
                                        <div className="inline-block bg-gray-500 text-white px-2 rounded-full text-xs" key={tech}>{tech}</div>
                                    ))}
                                </div>
                                <div className="text-lg text-gray-500 mb-4">{selected.tagline}</div>
                                <p className='text-gray-700 mb-4'>{selected.description}</p>
                                {selected.url && (
                                    <a
                                        href={selected.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-2 text-gray-700 border px-5 py-2 rounded-full hover:bg-gray-700 hover:text-white"
                                    >
                                        Visit Website
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default PortfolioScreen