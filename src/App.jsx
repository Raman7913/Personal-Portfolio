import React, { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
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
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </>
    );
};

export default App;
