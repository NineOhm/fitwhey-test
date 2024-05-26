import React from 'react';
import Image from 'next/image';

const ProductReviews: React.FC = () => {
    return (
        <div className='p-4'>
            <div className="flex justify-between items-center mb-8">
                <div className="items-center">
                    <div className="text-xl font-bold">Customer Review</div>
                    <label className="text-2xl mr-1 text-yellow-400">★★★★★</label>
                    <span className="text-xl font-bold text-yellow-400">4/5</span>
                    <span className="text-gray-500 ml-2">(200 Reviews)</span>
                </div>
                <div>
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Write Review</button>
                </div>
            </div>
            <div className="overflow-hidden">
                <ul className="">
                    <li className="flex">
                        <Image src="/img/profile-placeholder.png" alt='profile' width={48} height={48} className="w-12 h-12 rounded-full" />
                        <div className="px-4 w-full">
                            <div className="flex justify-between items-center mb-2">
                                <div>
                                    <div className="font-bold">Barack Obama</div>
                                    <div className="font-bold text-yellow-400">★★★★★</div>
                                </div>
                                <div className="text-gray-500 flex text-xs">
                                    <Image src="/icon/like-icon.svg" alt='like-icon' width={15} height={15} />
                                    <span className='ms-3'>0</span>
                                </div>
                            </div>
                            <div className='text-xs mb-2'>
                                <span className="mr-2 text-gray-500">12 March 2022</span>
                                <span className='text-green-500'>
                                    <Image src="/icon/verify-icon.svg" alt='verify-icon' width={10} height={10} className="inline-block" /> Verified Buyer
                                </span>
                            </div>
                            <div className="text-xs mb-2 border-s-8 border-red-400 text-gray-500 ps-1">Vanilla Milkshake</div>
                            <p className='text-gray-700'>
                                Lorem ipsum dolor sit met, consecterur adipiscing elit, ed Do eius mod tempor incididut ut labore te dfdf dfsdfdf
                            </p>
                            <div className="mb-2 py-2">
                                <ul className="flex space-x-3">
                                    <li>
                                        <Image src="/img/place-holder3.png" alt='place-holder3' width={100} height={100} />
                                    </li>
                                    <li>
                                        <Image src="/img/place-holder3.png" alt='place-holder3' width={100} height={100} />
                                    </li>
                                    <li>
                                        <Image src="/img/place-holder3.png" alt='place-holder3' width={100} height={100} />
                                    </li>
                                </ul>
                            </div>
                            <div className="flex justify-end text-sm text-orange-400">
                                <span className='pr-1'>Order ID: 0123456 |</span>
                                <span>Product 1 of 2</span>
                            </div>
                        </div>
                    </li>
                    <hr className='my-4' />
                    <li className="flex">
                        <Image src="/img/profile-placeholder.png" alt='profile' width={48} height={48} className="w-12 h-12 rounded-full" />
                        <div className="px-4 w-full">
                            <div className="flex justify-between items-center mb-2">
                                <div>
                                    <div className="font-bold">Onitsuka Tiger</div>
                                    <div className="font-bold text-yellow-400">★★★★★</div>
                                </div>
                                <div className="text-gray-500 flex text-xs">
                                    <Image src="/icon/like-icon.svg" alt='like-icon' width={15} height={15} />
                                    <span className='ms-3'>0</span>
                                </div>
                            </div>
                            <div className='text-xs mb-2'>
                                <span className="mr-2 text-gray-500">12 March 2022</span>
                            </div>
                            <p className='text-gray-700'>
                                Lorem ipsum dolor sit met, consecterur adipiscing elit, ed Do eius mod tempor incididut ut labore te dfdf dfsdfdf
                            </p>
                        </div>
                    </li>
                    <hr className='my-4' />
                    <li className="flex">
                        <Image src="/img/profile-placeholder.png" alt='profile' width={48} height={48} className="w-12 h-12 rounded-full" />
                        <div className="px-4 w-full">
                            <div className="flex justify-between items-center mb-2">
                                <div>
                                    <div className="font-bold">Steve Jobs</div>
                                    <div className="font-bold text-yellow-400">★★★★★</div>
                                </div>
                                <div className="text-gray-500 flex text-xs">
                                    <Image src="/icon/like-icon-active.svg" alt='like-icon' width={15} height={15} />
                                    <span className='ms-3'>3</span>
                                </div>
                            </div>
                            <div className='text-xs mb-2'>
                                <span className="mr-2 text-gray-500">12 March 2022</span>
                                <span className='text-green-500'>
                                    <Image src="/icon/verify-icon.svg" alt='verify-icon' width={10} height={10} className="inline-block" /> Verified Buyer
                                </span>
                            </div>
                            <p className='text-gray-700'>
                                Lorem ipsum dolor sit met, consecterur adipiscing elit, ed Do eius mod tempor incididut ut labore te dfdf dfsdfdf
                            </p>
                            <div className="flex justify-end text-sm text-orange-400">
                                <span>Order ID: 0123456</span>
                            </div>
                        </div>
                    </li>
                    <hr className='my-4' />
                    <li className="flex">
                        <Image src="/img/profile-placeholder.png" alt='profile' width={48} height={48} className="w-12 h-12 rounded-full" />
                        <div className="px-4 w-full">
                            <div className="flex justify-between items-center mb-2">
                                <div>
                                    <div className="font-bold">Steve Jobs</div>
                                    <div className="font-bold text-yellow-400">★★★★★</div>
                                </div>
                                <div className="text-gray-500 flex text-xs">
                                    <Image src="/icon/like-icon-active.svg" alt='like-icon' width={15} height={15} />
                                    <span className='ms-3'>3</span>
                                </div>
                            </div>
                            <div className='text-xs mb-2'>
                                <span className="mr-2 text-gray-500">12 March 2022</span>
                                <span className='text-green-500'>
                                    <Image src="/icon/verify-icon.svg" alt='verify-icon' width={10} height={10} className="inline-block" /> Verified Buyer
                                </span>
                            </div>
                            <p className='text-gray-700'>
                                Lorem ipsum dolor sit met, consecterur adipiscing elit, ed Do eius mod tempor incididut ut labore te dfdf dfsdfdf
                            </p>
                            <div className="flex justify-end text-sm text-orange-400">
                                <span className='pr-1'>Order ID: 0123456 |</span>
                                <span>Product 1 of 2</span>
                            </div>
                        </div>
                    </li>
                    <hr className='my-4' />
                </ul>
            </div>
            <div className="sm-btn-wrap text-center">
                <button className="text-blue-500 px-4 py-2 font-bold hover:text-blue-600">See More</button>
            </div>
        </div>
    );
};

export default ProductReviews;
