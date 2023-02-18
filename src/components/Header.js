import React from 'react'
import logo from '../assets/zk-sync-full-dark.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faMedium,faTelegram } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
let links = [
    {name:"Docs", link:"/"},
    {name:"Claim", link:"/"},
    {name:"Information", link:"/"},
    {name:"About", link:"/"}
];

let socials = [
    {name:"Twitter", link:"/", logo:<FontAwesomeIcon icon={faTwitter} />},
    {name:"Medium", link:"/",logo:<FontAwesomeIcon icon={faMedium} />},
    {name:"Email", link:"/",logo:<FontAwesomeIcon icon={faEnvelope} />},
    {name:"Telegram", link:"/",logo:<FontAwesomeIcon icon={faTelegram} />},
]

  return (
    <div className='w-full md:flex justify-between p-10'>
        <div>
        <img src={logo} alt="Logo" height={120} width={120} />
        </div>
        <div className='ml-20'>
        <ul className='md:flex md:items-center md:pb-0'>
        {links.map(link=>(
            <li key={link.name} className="md:mx-4 text-xl md:my-0 my-7">
                <a href={link.link}>{link.name}</a>
            </li>
        ))}
        </ul>
        </div>
        <div className='p-2'>
        <ul className='flex md:items-center pb-0'>
        {socials.map(item=>(
            <li key={item.name} className="md:ml-8 text-xl pr-6 md:pr-0 md:my-0 my-7">
                <a href={item.link}>{item.logo}</a>
            </li>
        ))}
        </ul>
        </div>
    </div>
  )
}

export default Header