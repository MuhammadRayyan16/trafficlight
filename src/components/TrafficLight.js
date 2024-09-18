import { useState, useEffect } from 'react';

const TrafficLight = () => {
    const [activeLight, setActiveLight] = useState(0); // 0 = red, 1 = yellow, 2 = green

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveLight((prevLight) => (prevLight + 1) % 3);
        }, 3000); // Change every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-black p-4 rounded-lg">
                <div className={`w-16 h-16 mb-4 rounded-full ${activeLight === 0 ? 'bg-red-500' : 'bg-red-900'}`}></div>
                <div className={`w-16 h-16 mb-4 rounded-full ${activeLight === 1 ? 'bg-yellow-500' : 'bg-yellow-900'}`}></div>
                <div className={`w-16 h-16 mb-4 rounded-full ${activeLight === 2 ? 'bg-green-500' : 'bg-green-900'}`}></div>
            </div>
        </div>
    );
};

export default TrafficLight;
