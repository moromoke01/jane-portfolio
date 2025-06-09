import { ExternalLink, Github } from 'lucide-react';
import ecommerceImg from '../../assets/e-commerce.png';
import healthImg from '../../assets/health-site.png';
import farmImg from '../../assets/farm-link.png';
import adminImg from '../../assets/admin-dashboard.png';
import mealpalImg from '../../assets/mealpal.png';

export const Projects = () => {
  const myProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with React, and modern UI components.",
      tech: ["React", "Tailwind CSS"],
      link: "https://github.com/moromoke01/ecommerce-task5",
      demo: "https://ecommerce-one-alpha-73.vercel.app/",
      image: ecommerceImg
    },
    {
      title: "Medprompt (HealthTech)",
      description: "A medical appointment scheduling web app.",
      tech: ["React", "nodejs", "Material-UI", "Redux"],
      link: "https://github.com/moromoke01/virtualHealthConsultation",
      demo: "https://virtual-health-consultation.vercel.app/",
      image: healthImg
    },
    {
      title: "Farm link(AgricTech)",
      description: "A platform connecting farmers with resources and markets (team work).",
      tech: ["React", "Tailwind CSS", "Chartjs"],
      link: "https://github.com/moromoke01/farmlink-fe-int",
      demo: "https://farmlink-fe-int.vercel.app/",
      image: farmImg
    },
    {
      title: "Admin Dashboard",
      description: "Admin dashboard showing sales flow.",
      tech: ["React", "Tailwind CSS", "Chartjs"],
      link: "https://github.com/moromoke01/admin-dasboard",
      demo: "https://admin-dasboard-nu.vercel.app/",
      image: adminImg
    }, 
    {
      title: "Meal Planner App",
      description: "A web app to plan meals and track wellness (team work).",
      tech: ["React", "Vite", "Tailwind CSS"],
      link: "https://github.com/moromoke01/c8Project",
      demo: "https://c8-project.vercel.app/",
      image: mealpalImg
    },
    {
      title: "Internship Recommendation",
      description: "A modern, responsive portfolio website connecting students with industries.",
      tech: ["Html", "css", "js"],
      link: "https://github.com/moromoke01/Skill-Innov8",
      demo: "https://skill-innov8.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20" data-aos='fade-up'>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {myProjects.map((project) => (
            <div
              key={project.title}
              className="group p-6 rounded-lg shadow-lg border-2px border-purple-500 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
    {project.image && (
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover rounded-md mb-4"
    />
  )}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white-500/10 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 group-hover:text-purple-500 transition-colors mt-2">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 bg-gray-100 rounded border border-gray-300 text-gray-800">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => window.open(project.link, '_blank')}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded hover:bg-purple-50 hover:border-purple-600 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </button>

                <button
                  onClick={() => window.open(project.demo, '_blank')}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded hover:from-purple-700 hover:to-blue-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
