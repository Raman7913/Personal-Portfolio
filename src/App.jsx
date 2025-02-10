import React, { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
const App = () => {
    const [loading, setLoading] = useState(true);
    return (
        <>
            {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
            <div
                className={`min-h-screen transition-opacity duration-1000 ${
                    loading ? "opacity-0" : "opacity-100"
                } bg-black text-gray-100`}
            >
                hello
            </div>
            <Navbar />
        </>
    );
};

export default App;
