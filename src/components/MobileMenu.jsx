import { useEffect, useState } from "react";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <>
            <div
                className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex justify-center items-center flex-col 
                    transition-all duration-300 ease-in-out ${
                        menuOpen
                            ? "h-screen opacity-100 pointer-events-auto"
                            : "h-0 opacity-0 pointer-events-none"
                    }`}
            >
                <button
                    onClick={() => setMenuOpen(false)}
                    className="absolute top-4 right-7 text-white text-3xl focus:outline-none cursor-pointer"
                >
                    &times;
                </button>
                <a
                    href="#home"
                    className={`text-2xl font-semibold text-white my-4 transition-transform duration-200 ${
                        menuOpen
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-5"
                    } `}
                    onClick={() => setMenuOpen(false)}
                >
                    {" "}
                    Home{" "}
                </a>
                <a
                    href="#about"
                    className={`text-2xl font-semibold text-white my-4 transition-transform duration-200 ${
                        menuOpen
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-5"
                    } `}
                    onClick={() => setMenuOpen(false)}
                >
                    {" "}
                    About{" "}
                </a>
                <a
                    href="#projects"
                    className={`text-2xl font-semibold text-white my-4 transition-transform duration-200 ${
                        menuOpen
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-5"
                    } `}
                    onClick={() => setMenuOpen(false)}
                >
                    {" "}
                    Projects{" "}
                </a>
                <a
                    href="#contact"
                    className={`text-2xl font-semibold text-white my-4 transition-transform duration-200 ${
                        menuOpen
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-5"
                    } `}
                    onClick={() => setMenuOpen(false)}
                >
                    {" "}
                    Contact{" "}
                </a>
            </div>
        </>
    );
};

export default MobileMenu;
