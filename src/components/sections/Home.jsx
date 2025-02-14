import React from "react";

const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen items-center justify-center flex relative"
        >
            <div className="text-center px-4 z-10">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                    Hi, I am Raman Maharjan
                </h1>
                <p className="text-gray-400 mb-8 max-w-lg text-lg mx-auto">
                    A Student & Web Developer Specializing in React & Next.js
                    I'm passionate about technology and love learning new
                    things. As a student, I focus on improving my skills, with
                    an emphasis on user experience and solving real-world
                    problems.
                </p>
                <div className="flex justify-center space-x-4">
                    <a
                        href="#projects"
                        className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition-all relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    >
                        View Projects
                    </a>
                    <a
                        href="#projects"
                        className="border border-blue-500/50 py-3 px-6 rounded font-medium transition-all duration-100 relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
