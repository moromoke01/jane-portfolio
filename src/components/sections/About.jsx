export const About = () => {

    const frontendSkills = ["Html", "CSS", "Js", "React", "Nextjs", "Tailwindcss"];
     const softSkills = ["Teamwork", "Communication", "Collaboration", "Leadership", "Creativity"];

  return (
    <section
      id="#about"
      className="min-h-screen flex items-center justify-center py-5"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-800 to-blue-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="glass rounded-xl p-8 border-white/10 border hover:-transtion-y-1 transtion-all">
          <p className="text-gray-300 text-sm md:text-lg text-justify mb-6">
            Janet is a passionate Frontend Developer with a strong eye for design and
            a love for turning ideas into interactive, user-friendly experiences
            on the web. I specialize in building responsive and accessible
            interfaces using HTML, CSS, JavaScript, and modern frameworks like
            React. I enjoy crafting clean, scalable code and collaborating with
            teams to bring intuitive user interfaces to life. 
             I create seamless digital experiences that not only look good but also perform well. 
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transtion-all">
                <h3 className="text-xl font-bold mb-4">Frontend Skills</h3>
                <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((tech, key) => (
                        <span key={key}
                              className="bg-purple-500/50 text-white-500/10 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                {tech}
                              </span>
                    ))}
                </div>
            </div>
         

         
            <div className="rounded-xl p-6 hover:-translate-y-1 transtion-all">
                <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                    {softSkills.map((skill, key) => (
                        <span key={key}
                              className="bg-purple-500/50 text-purple-500 py-l px-3 rounded-full text-sm hover:bg-purple-500/10 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                {skill}
                              </span>
                    ))}
                </div>
            </div>
        </div>
       
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

       </div>

        </div>
      </div>
    </section>
  );
};
