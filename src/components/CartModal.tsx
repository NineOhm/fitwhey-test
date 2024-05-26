"use client"
import { useState } from 'react';
import Image from 'next/image';

interface CartModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
    const [selectedSize, setSelectedSize] = useState('1lb');
    const [selectedFlavor, setSelectedFlavor] = useState('Vanilla');
    const [value, setValue] = useState(1);

    const handleSizeSelection = (size: string) => {
        setSelectedSize(size);
    };

    const handleFlavorSelection = (flavor: string) => {
        setSelectedFlavor(flavor);
    };

    const incrementValue = () => {
        setValue(value + 1);
    };

    const decrementValue = () => {
        if (value > 1) {
            setValue(value - 1);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 text-black flex items-end justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-lg md:max-w-2xl max-h-screen overflow-y-auto animate-slide-in-up">
                <div className="relative">
                    <button className="absolute top-2 right-2" onClick={onClose}>
                        <Image src="/icon/closing-icon.svg" alt="Close" width={10} height={10} />
                    </button>
                    <div className="flex flex-col md:flex-row gap-4">
                        <Image className="w-full md:w-1/3 object-cover" src="/img/product-mock3.png" alt="Product" width={300} height={300} />
                        <div className="flex flex-col space-y-2">
                            <span className="text-lg font-semibold">Baam My Whey Protein</span>
                            <p className="text-sm text-gray-600">Short description two sentences Lorem ipsum.</p>
                            <div className="flex items-center space-x-2">
                                <span className="text-xl font-bold text-red-500">฿1,600</span>
                                <span className="text-sm line-through text-gray-500">฿2,000</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="text-sm text-blue-500">🜲 200 points</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="border-t pt-4">
                            <div className="mb-2">
                                <div className="flex justify-between">
                                    <h3 className="text-sm font-semibold">Size <span className="text-gray-500">(Select 1)</span></h3>
                                    <div className="text-orange-500 text-sm">EXP:20/2021</div>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    <button className={`px-4 py-2 border rounded-md ${selectedSize === 'Sample' ? 'bg-blue-500 text-white' : ''}`} onClick={() => handleSizeSelection('Sample')}>Sample</button>
                                    <button className={`px-4 py-2 border rounded-md ${selectedSize === '250g' ? 'bg-blue-500 text-white' : ''}`} onClick={() => handleSizeSelection('250g')}>250g</button>
                                    <button className={`px-4 py-2 border rounded-md ${selectedSize === '1lb' ? 'bg-blue-500 text-white' : ''}`} onClick={() => handleSizeSelection('1lb')}>1lb</button>
                                    <button className="px-4 py-2 border rounded-md text-gray-400 cursor-not-allowed" disabled>3lb</button>
                                    <button className={`px-4 py-2 border rounded-md ${selectedSize === '5lb' ? 'bg-blue-500 text-white' : ''}`} onClick={() => handleSizeSelection('5lb')}>5lb</button>
                                    <button className={`px-4 py-2 border rounded-md ${selectedSize === '10lb' ? 'bg-blue-500 text-white' : ''}`} onClick={() => handleSizeSelection('10lb')}>10lb</button>
                                </div>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-sm font-semibold">Flavor / Selections <span className="text-gray-500">(Select 1)</span></h3>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    <button className={`px-4 py-2 border rounded-md ${selectedFlavor === 'Chocolate' ? 'bg-blue-500 text-white' : ''}`} onClick={() => handleFlavorSelection('Chocolate')}>Chocolate</button>
                                    <button className={`px-4 py-2 border rounded-md ${selectedFlavor === 'Matcha Green Tea' ? 'bg-blue-500 text-white' : ''}`} onClick={() => handleFlavorSelection('Matcha Green Tea')}>Matcha Green Tea</button>
                                    <button className={`px-4 py-2 border rounded-md ${selectedFlavor === 'Vanilla' ? 'bg-blue-500 text-white' : ''}`} onClick={() => handleFlavorSelection('Vanilla')}>Vanilla</button>
                                    <button className="px-4 py-2 border rounded-md text-gray-400 cursor-not-allowed" disabled>Cafe Mocha</button>
                                    <button className={`px-4 py-2 border rounded-md ${selectedFlavor === 'Orange Yuzu' ? 'bg-blue-500 text-white' : ''}`} onClick={() => handleFlavorSelection('Orange Yuzu')}>Orange Yuzu</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-between border-t pt-4">
                            <div className="flex items-center space-x-2">
                                <button className="px-2 py-1 border rounded-md" onClick={decrementValue}>
                                    <Image src="/icon/subtract-icon.svg" alt="Subtract" width={10} height={10} />
                                </button>
                                <span>{value}</span>
                                <button className="px-2 py-1 border rounded-md" onClick={incrementValue}>
                                    <Image src="/icon/add-icon.svg" alt="Add" width={10} height={10} />
                                </button>
                            </div>
                            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-4 md:mt-0">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Add to Cart</button>
                                <button className="px-4 py-2 border rounded-md">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
