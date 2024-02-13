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
        <div ref={ref} className="flex justify-around items-center py-8">
            {metrics.map((metric, index) => (
                <div key={index} className="text-center space-y-2" style={{marginLeft: '1rem'}}>
                    {/* Removed the marginLeft style for clarity; adjust as needed */}
                    <div className="text-4xl font-bold text-black" style={{ fontFamily: '"Open Sans", sans-serif' }}>
                        {inView ? (
                            <CountUp end={metric.number} duration={2} />
                        ) : (
                            '0'
                        )}
                    </div>
                    <div className="text-base text-gray-700" style={{ fontFamily: '"Open Sans", sans-serif' }}>{metric.label}</div>
                </div>
            ))}
        </div>
    );
};

export default MetricsSection;
