import img1 from "../../assets/jane-pic.jpg";

export const Home = () =>{
    return (
        <section id="home" className="min-h-screen flex items-center pb-10 mb-15 justify-center relative">
            <div className="text-center z-10 px-10">
                <div className="relative py-6 px-10 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center">
                            <div className="relative inline-block mt-15 mb-0">
                                <img src={img1}
                                alt="headshot"
                                className=" w-48 h-48 rounded-full mx-auto object-cover shadow-2xl border-4 border-purple-400"/>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-700 to-blue-400 opacity-20 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent leading-right mt-0">
                    I'm Janet Bello
                </h1>

                <p className="text-gray-400 text-md md:text-lg mb-8 max-w-lg mx-auto md:text-justify">
                    A dedicated frontend developer with a passion for creating exceptional user experiences. With expertise in modern web technologies, I transform ideas into interactive, responsive, and visually appealing applications that users love to interact with.
                </p>

                <div className="flex justify-center space-x-4">
                    <a href= "#projects"
                       className="bg-gradient-to-r from-purple-900 to-blue-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246,0.4)]">View Project</a>

                       <a href= "#contact"
                       className="border border-purple-500/50 text-purple-500 py-3 px-6 rounded font-medium hover:translate transition-all duration-200-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246,0.4)] hover:bg-purple-500/10"> Contact Me</a>

                </div>
            </div>
        </section>
    )
}