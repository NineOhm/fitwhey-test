"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';

interface Image {
    src: string;
    alt: string;
}

interface Product {
    images: Image[];
}

interface ImageGalleryProps {
    product: Product;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ product }) => {
    const tierBackground = '/img/bg-tier.png';

    return (
        <div className="relative">
            <div className="absolute top-14 right-0 px-4 py-2 mt-4 z-50 rounded-l-lg text-xs text-white" style={{ backgroundImage: `url(${tierBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className='flex justify-center'>Your Tier</div>
                <span className="flex items-center font-bold">
                    <Image src="/icon/dumbbell-icon.svg" width={50} height={50} className="w-8 h-8 pr-2" alt="Tier Icon" />
                    Pro Member
                </span>
            </div>
            <Swiper
                pagination={{ type: 'fraction' }}
                modules={[Pagination]}
                loop
            >
                {product.images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={1000} height={1000}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageGallery;
