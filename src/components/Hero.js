import React from 'react'
import logo from '../assets/zk-sync-full-dark.png'

const Hero = () => {
  return (
    <div className='w-full text-center pb-20'>
    <div className='mt-20 flex items-center justify-center p-5 mb-5'>
    <img src={logo} alt="Logo" height={200} width={200} />
    </div>
    <div className='inline-block text-7xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 text-transparent bg-clip-text text-center'>
       Unlimited Scaling 
    </div>
    <div className='pt-5 text-2xl'>
        Airdrop Is Now Claimable
    </div>
    <div className='p-10 mt-6'>
        <button className='bg-zk-darkblue p-4 rounded-full cursor-pointer'>Connect Wallet</button>
    </div>
    </div>
  )
}

export default Hero