import React, { useState } from 'react'
import pfp from '../../assets/images.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser ,faRightToBracket , faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function Profile() {

    const [dropdownOpen, setdropdownOpen] = useState(false)

    const handleDropdownToggle = () => {
        setdropdownOpen(!dropdownOpen)
    }

    return (
        <>
            <img className='w-10 h-10 rounded ring-2 ring-purple-500 cursor-pointer' src={pfp} alt="Profile_img" onClick={handleDropdownToggle} />
            {dropdownOpen && (
                <div className="absolute top-full right-0 bg-gray-700 shadow-md p-4 w-48">
                    <ul>
                        <li className='flex items-center border-b-4 hover:text-purple-500 border-purple-500 border-opacity-0 duration-200 hover:border-opacity-100'>
                            <FontAwesomeIcon icon={faCircleUser} className='cursor-pointer text-xl mr-4' />
                            <a href="#" className="block py-2 ">View Profile</a>
                        </li>
                        <li className='flex items-center border-b-4 hover:text-red-500 border-red-500 border-opacity-0 duration-200 hover:border-opacity-100'>
                            <FontAwesomeIcon icon={faRightFromBracket} className='cursor-pointer text-xl mr-4' />
                            <a href="#" className="block py-2">Sign Out</a>
                        </li>
                        <li className='flex items-center border-b-4 hover:text-green-500 border-green-500 border-opacity-0 duration-200 hover:border-opacity-100'>
                            <FontAwesomeIcon icon={faRightToBracket} className='cursor-pointer text-xl mr-4' />
                            <a href="#" className="block py-2">Sign In</a>
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}
