"use client";

import { client, urlFor } from '@/lib/sanity-util'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface HeroImageData {
    image1: string;
    image2: string;
}

const HeroImage = () => {
    const [images, setImages] = useState<HeroImageData[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const query = "*[_type == 'heroImage'][0]";
                const data = await client.fetch(query);
                setImages([data.image1, data.image2]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <section className='mb-12 flex w-full md:mb-16 lg:w-2/3'>
            {images.map((image, index) => (
                <div key={index} className='overflow-hidden rounded-lg bg-gray-100 shadow-lg'>
                    <Image src={urlFor(image).url()} alt="great photo" width={500} height={500}/>
                </div>
            ))}
        </section>
    );
}

export default HeroImage;
