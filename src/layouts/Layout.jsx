import React from 'react'
import { Link, NavLink, Outlet } from 'react-router'

const Layout = () => {
    return (
        <div className='bg-gray-900 text-gray-300 h-screen flex flex-col'>
            <header className='py-5 '>
                <ul className='navbar'>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about"}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio">Portfolios</NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills">Skills</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contacts</NavLink>
                    </li>
                </ul>
            </header>
            <main className='grow overflow-auto'>
                <Outlet />
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Layout