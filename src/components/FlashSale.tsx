"use client"
import { useEffect, useState } from 'react';
import { BoltIcon } from '@heroicons/react/20/solid';

const FlashSale: React.FC = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2024-06-01T00:00:00') - +new Date();
        let timeLeft = {
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!isMounted) {
        return null; // Render nothing on the server
    }

    return (
        <div className="bg-red-500 pl-4 text-white items-center justify-between flex">
            <span className="text-2xl font-bold inline-flex">
                Flash Sale <BoltIcon className="h-6 w-6" />
            </span>
            <div className="p-2">
                <ul className="flex font-mono">
                    <li className="bg-white text-red-500 px-2 py-1 rounded">{String(timeLeft.hours).padStart(2, '0')}</li>:
                    <li className="bg-white text-red-500 px-2 py-1 rounded">{String(timeLeft.minutes).padStart(2, '0')}</li>:
                    <li className="bg-white text-red-500 px-2 py-1 rounded">{String(timeLeft.seconds).padStart(2, '0')}</li>
                </ul>
            </div>
        </div>
    );
};

export default FlashSale;
