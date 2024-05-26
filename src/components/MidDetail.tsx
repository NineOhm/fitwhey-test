"use client"
import React, { useState } from 'react';
import Image from 'next/image';

import OverviewContent from '@/data/overview';
import BenefitContent from '@/data/benefit';
import QAContent from '@/data/qa';

type Tab = 'Overview' | 'Benefit' | 'Direction' | 'Storage Method' | 'Cautions' | 'Q & A';

const MidDetail: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('Overview');

    const renderContent = () => {
        switch (activeTab) {
            case 'Overview':
                return <OverviewContent />;
            case 'Benefit':
                return <BenefitContent />;
            case 'Direction':
                return (
                    <div className="px-4">
                        <h4 className="text-lg font-bold">Directions</h4>
                        <Image src="/img/baam-directions.png" width={1000} height={1000} alt='directions' />
                    </div>
                );
            case 'Storage Method':
                return (
                    <div className="px-4">
                        <h4 className="text-lg font-bold">Storage</h4>
                        <ul className="list-disc pl-5">
                            <li>เก็บในที่ที่แห้ง และ เย็น (ไม่เกิน 25 - 30 °C) และไม่โดนแสงแดด</li>
                            <li>เมื่อเปิดแล้ว ต้องปิดให้สนิททุกครั้ง</li>
                            <li>ล้างมือให้สะอาด และเช็ดมือให้แห้งทุกครั้ง ก่อนตักผง</li>
                            <li>หมั่นเขย่าเมื่อตั้งทิ้งไว้เป็นเวลานาน เพื่อป้องกันการแยกชั้น และลดโอกาสการจับตัวกันเป็นก้อนของผง</li>
                        </ul>
                    </div>
                );
            case 'Cautions':
                return (
                    <div className="px-4">
                        <h4 className="text-lg font-bold">Cautions</h4>
                        <p>Optional</p>
                    </div>
                );
            case 'Q & A':
                return <QAContent />;
            default:
                return null;
        }
    };

    return (
        <div className="w-full bg-white shadow-md">
            <div className="overflow-x-auto">
                <div className="flex space-x-0 p-4">
                    {['Overview', 'Benefit', 'Direction', 'Storage Method', 'Cautions', 'Q & A'].map((tab, index) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as Tab)}
                            className={`flex-1 whitespace-nowrap px-4 py-2 font-medium ${index !== 0 ? 'border-l border-gray-200' : ''} ${activeTab === tab ? 'bg-gray-200 text-blue-600' : 'bg-white'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
            <div className="p-4 min-h-[1000px] overflow-y-auto">
                {renderContent()}
            </div>

            <div className="block w-full h-2.5 bg-gray-50"></div>
        </div>
    );
};

export default MidDetail;
