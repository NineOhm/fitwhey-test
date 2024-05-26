"use client"
import React, { useState } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import Button from './options/Button';

const ProductHeadingInfo: React.FC = () => {
    const [activeButton, setActiveButton] = useState<string>('Sample');

    const buttons = [
        { label: 'Sample', value: 'Sample' },
        { label: '250g', value: '250g' },
        { label: '2lb', value: '2lb' },
        { label: '5lb', value: '5lb' },
        { label: '10lb', value: '10lb' },
        { label: '12lb', value: '12lb' },
    ];

    return (
        <div>
            <div className="font-bold p-2 text-xl">BAAM 100% MY WHEY</div>
            <div className="flex items-center mx-2 pb-2 justify-between border-b border-gray-200">
                <div className="flex items-center">
                    <div className="text-yellow-500 text-lg">★★★★★</div>
                    <div className="text-gray-500 ms-2">(200 Reviews)</div>
                </div>
                <div className="text-blue-600">🜲 500</div>
            </div>

            <div className="flex m-2 text-base">
                <div>
                    <div className="sub-text">Price</div>
                    <div className="text-2xl font-bold text-red-500">฿1,800<span className="text-base ml-1 line-through text-gray-400">฿2,000</span></div>
                </div>
                <div className="border-l ml-4 pl-4">
                    <div className="sub-text flex items-center">
                        Your Price
                        <ExclamationCircleIcon className="h-4 w-4 text-sm ml-1" />
                    </div>
                    <div className="text-2xl font-bold text-red-500">฿1,600</div>
                </div>
            </div>

            <div className="flex m-4 flex-wrap">
                {buttons.map((button) => (
                    <Button
                        key={button.value}
                        isActive={activeButton === button.value}
                        onClick={() => setActiveButton(button.value)}
                    >
                        {button.label}
                    </Button>
                ))}
            </div>

            <div className="m-2 ">
                <button className="w-full text-gray-400 hover:text-white border border-gray-400 hover:bg-gray-400 font-medium rounded-sm text-base px-5 py-2.5 text-center me-2 mb-2">View Supplement Fact</button>
            </div>

            <div className="block w-full h-2.5 bg-gray-50"></div>
        </div>
    );
}

export default ProductHeadingInfo;
