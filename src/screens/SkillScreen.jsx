import React from 'react'

const SkillScreen = () => {

    const [skills] = React.useState([
        {
            heading: 'Frontend Skills',
            skills: [
                "HTML5",
                "CSS3",
                "Javascript",
                "jQuery",
                "React",
                "Redux",
                "Axios/Fetch",
                "Bootstrap",
                "TailwindCSS",
                "AntDesign",
                "VueJS",
                "Socket.io"
            ]
        },
        {
            heading: 'Backend Skills',
            skills: [
                "NodeJS",
                "ExpressJS",
                "PrismaORM",
                "PHP",
                "Laravel",
                "Rest APIs",
                "Socket.io",
            ]
        },
        {
            heading: "Database Skills",
            skills: [
                "MySQL",
                "PostgreSQL",
                "MongoDB",
                "SQLite"
            ]
        },
        {
            heading: "Mobile Apps Skills",
            skills: [
                "React Native",
                "Socket.io",
            ]
        }
    ]);

    return (
        <section className='h-full p-10 content-center'>
            <div className="container mx-auto space-y-10 lg:grid grid-cols-2 gap-5 h-full">
                {
                    skills?.map((skillSection, index) => (

                        <div className='bg-white/10 border-2 border-white p-5 rounded-xl text-black h-full' key={index}>
                            <h3 className='bg-yellow-400 py-2 px-5 font-bold text-2xl inline-block rounded-full mb-5'>{skillSection.heading}</h3>
                            <div className='flex gap-2 flex-wrap'>
                                {
                                    skillSection.skills?.map((skill) => (
                                        <div className='my-3 bg-gray-200 rounded-full px-5 py-2 font-semibold' key={skill}>{skill}</div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default SkillScreen