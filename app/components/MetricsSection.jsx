import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
// Assume Open_Sans has been imported elsewhere as needed


const metrics = [
    { number: 4, label: 'Clients so far' },
    { number: 71, label: 'Members' },
];

const MetricsSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div ref={ref} className="flex flex-row justify-around md:px-64 items-center bg-[#1a1a1a] w-full pb-16">
            {metrics.map((metric, index) => (
                <div key={index} className="text-center space-y-2" style={{marginLeft: '1rem'}}>
                    <div className="text-4xl font-bold text-white" style={{ fontFamily: '"Open Sans", sans-serif' }}>
                        {inView ? (
                            <CountUp end={metric.number} duration={2} />
                        ) : (
                            '0'
                        )}
                    </div>
                    <div className="text-base text-white" style={{ fontFamily: '"Open Sans", sans-serif' }}>{metric.label}</div>
                </div>
            ))}
        </div>
    );
};

export default MetricsSection;
