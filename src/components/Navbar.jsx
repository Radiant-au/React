import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark , faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import Profile from "./nav_componets/Profile"


export default function Navbar() {
    return (
        <header className="header bg-none text-white sticky top-0 flex items-center justify-between px-8 py-02">
            
            <h1 className="w-3/12">
                <a href="">LOGO</a>
            </h1>

            
            <nav className="nav font-semibold text-lg">
                <ul className="flex items-center">
                    <li className="p-4 border-b-2 border-purple-500 border-opacity-0 hover:border-opacity-100 hover:text-purple-500 duration-200 cursor-pointer">
                        <a href="">Home</a>
                    </li>
                    <li className="p-4 border-b-2 border-purple-500 border-opacity-0 hover:border-opacity-100 hover:text-purple-500 duration-200 cursor-pointer">
                        <a href="">Jobs</a>
                    </li>
                    <li className="p-4 border-b-2 border-purple-500 border-opacity-0 hover:border-opacity-100 hover:text-purple-500 duration-200 cursor-pointer">
                        <a href="">Companies</a>
                    </li>
                    <li className="p-4 border-b-2 border-purple-500 border-opacity-0 hover:border-opacity-100 hover:text-purple-500 duration-200 cursor-pointer">
                        <a href="">Contact</a>
                    </li>
                </ul>
            </nav>


            <div className="w-3/12 flex justify-end items-center">
                <FontAwesomeIcon icon={faCalendarDays} className='cursor-pointer text-xl hover:text-purple-500 duration-200 mr-10' />
                <FontAwesomeIcon icon={faBookmark} className='cursor-pointer text-xl hover:text-purple-500 duration-200 mr-10' />
                <Profile></Profile>
            </div>
        </header>
    )
}
