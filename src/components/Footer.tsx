"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from "flowbite-react";
import CartModal from './CartModal';

const Footer: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <footer className="footer-menu-common bg-white text-white py-4 fixed bottom-0 w-full z-50 shadow-lg border-t border-gray-100">
            <div className="menu-btn flex px-4">
                <Button className="flex-none w-14 border-0">
                    <Image src="icon/favorite-btn.svg" alt="Favorite" width={25} height={25} />
                </Button>
                <Button className="flex-grow bg-blue-600 text-white" onClick={handleOpenModal}>Add to Cart</Button>
            </div>
            <CartModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </footer>
    );
};

export default Footer;
