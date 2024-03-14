import { client, urlFor } from '@/lib/sanity-util'
import Image from 'next/image'
import React from 'react'

async function getData(){
    const query = "*[_type == 'heroImage'][0]"
    const data = await client.fetch(query)
    return data
}
const Hero = async () => {

    const data = await getData()
  return (
    <section className='mb-12 flex w-full md:mb-16 lg:w-2/3'> 
        <div className='overflow-hidden rounded-lg bg-gray-100 shadow-lg'>
            <Image src={urlFor(data.image1).url()} alt="great photo" width={500} height={500}/>
        </div>
        <div className='overflow-hidden rounded-lg bg-gray-100 shadow-lg'>
            <Image src={urlFor(data.image2).url()} alt="great photo" width={500} height={500}/>
        </div>

    </section>
  )
}

export default Hero