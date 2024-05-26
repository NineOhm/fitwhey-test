"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Image from 'next/image';

const BundleSet: React.FC = () => {

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Bundle Set</h2>
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
            >
                <SwiperSlide className='m-2'>
                    <div className="bg-white rounded-lg shadow-xl p-4">
                        <Image className="w-full h-auto mb-4" src="/img/product-mock3.png" alt="Product Image" width={300} height={300} />
                        <div className="text-center">
                            <h3 className="text-lg font-semibold mb-2">Baam Mass V1</h3>
                            <div className="mb-3 text-xl font-bold text-red-500">฿1,000 <span className="text-sm line-through text-gray-500">฿2,000</span></div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add to Cart</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='m-2'>
                    <div className="bg-white rounded-lg shadow-xl p-4">
                        <Image className="w-full h-auto mb-4" src="/img/product-mock3.png" alt="Product Image" width={300} height={300} />
                        <div className="text-center">
                            <h3 className="text-lg font-semibold mb-2">Baam Mass V1</h3>
                            <div className="mb-3 text-xl font-bold text-red-500">฿1,000 <span className="text-sm line-through text-gray-500">฿2,000</span></div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add to Cart</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='m-2'>
                    <div className="bg-white rounded-lg shadow-xl p-4">
                        <Image className="w-full h-auto mb-4" src="/img/product-mock3.png" alt="Product Image" width={300} height={300} />
                        <div className="text-center">
                            <h3 className="text-lg font-semibold mb-2">Baam Mass V1</h3>
                            <div className="mb-3 text-xl font-bold text-red-500">฿1,000 <span className="text-sm line-through text-gray-500">฿2,000</span></div>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add to Cart</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="mt-5 block w-full h-2.5 bg-gray-50"></div>
        </div>
    );
};

export default BundleSet;
