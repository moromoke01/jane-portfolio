import { useEffect, useState } from "react";

export const LoadingScreen =({onComplete}) => {
    const [text, setText] = useState("");
    const fullText = "Janeworld!";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index ));
            index++; // Increment index to type one character at a time

            // If the index exceeds the length of the full text, clear the interval
            if (index > fullText.length) {
                clearInterval(interval);

               setTimeout (() => {
                    onComplete(); // Call the onComplete function after typing is done
               }, 1000); // Adjust the delay before calling onComplete (in milliseconds)
            }
        }, 100); // Adjust the speed of the typing effect here (in milliseconds)



        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [onComplete]);

    return (
           <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center content-center min-h-screen">    
            <div className="mb-4 text-4xl font-mono font-bold text-center">
                {text} <span className="animate-blink ml-1"></span>
            </div>
                <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                    <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"> {" "}</div>
                </div>
            </div>
    );
}