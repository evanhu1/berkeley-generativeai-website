import React from 'react';
import { Open_Sans } from 'next/font/google';

const font = Open_Sans({ subsets: ['latin'], weight: '500' });

const metrics = [
    { number: '4', label: 'Projects Completed' },
    { number: '71', label: 'Active members' },
];


const MetricsSection = () => {
    return (
        <div className="flex justify-around items-center py-8">
            {metrics.map((metric, index) => (
                <div key={index} className="text-center space-y-2">
                    <div className="w-4" style={{ marginLeft: '12rem' }}></div>
                    <div className="text-4xl font-bold" style={{ fontFamily: font }}>
                        {metric.number}
                    </div>
                    <div className="text-base text-gray-700">{metric.label}</div>
                </div>
            ))}
        </div>
    );
};

export default function Metrics() {
    return <MetricsSection />;
}
