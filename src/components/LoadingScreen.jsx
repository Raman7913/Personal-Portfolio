import React, { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "Welcome to my site";

    useEffect(() => {
        let index = 0;

        const loadingFucn = () => {
            if (index < fullText.length) {
                const currentLetter = fullText[index];
                setText((prevText) => {
                    return prevText + currentLetter;
                });
                index++;
            } else {
                setTimeout(() => {
                    onComplete();
                }, 500);
            }
        };
        const interval = setInterval(loadingFucn, 100);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col justify-center items-center">
            <div className="mb-4 text-4xl font-mono font-bold">
                {text}
                <span className="animate-blink ml-1"></span>
            </div>
            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
            </div>
        </div>
    );
};

export default LoadingScreen;
