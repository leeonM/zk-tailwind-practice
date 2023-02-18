import React from 'react'

const Elegibility = () => {
let items = [
    {name:"usage", content:"Airdrop Depending on $ETH Usage"},
    {name:"amount", content:"Average Airdrop of $3000"},
    {name:"elegibility", content:"Be one of the first to claim $ZKS"}
]
  return (
    <div className='w-full text-center p-10 md:flex items-center justify-center'>
        {items.map(item=>(
            <div key={item.name} className='bg-gray-900 text-center rounded-md m-4 p-20 font-semibold text-4xl'>
            {item.content}
        </div>
        ))}
    </div>
  )
}

export default Elegibility