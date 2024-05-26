import React from 'react';

const QAContent = () => {
    return (
        <>
            <h4 className="text-lg font-bold mb-4">Q & A</h4>
            <div className="grid gap-4">
                <QAPair
                    question="What is the difference between whey A and whey B?"
                    answer="Lorem ipsum dolor sit met, consecterur adipiscing elit, ed Do eius mod tempor incididut ut labore te nosrud exerci Ullamcanco labori snidi ut aliquip exa ead commonde"
                />
            </div>
        </>
    );
};

const QAPair = ({ question, answer }: { question: string; answer: string }) => {
    return (
        <div className="bg-gray-100 p-4 rounded-md">
            <div className="flex items-center mb-2">
                <span className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2">Q</span>
                <p className="font-bold">{question}</p>
            </div>
            <div className="flex items-center">
                <span className="bg-green-500 text-white px-2 py-1 rounded-md mr-2">A</span>
                <p>{answer}</p>
            </div>
        </div>
    );
};

export default QAContent;
