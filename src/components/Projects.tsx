import { projects } from '@/data/projects';
import { FaArrowRight } from 'react-icons/fa';

const Projects = () => {
  // Pastel colors matching your theme
  const pastelColors = [
    'var(--soft-purple)',
  ];

  return (
    <section id="projects" className="py-16 px-4">
      <h2>Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-between rounded-xl p-6 hover:shadow-lg transition"
            style={{ backgroundColor: pastelColors[index % pastelColors.length] }}
          >
            <div className="flex items-start gap-4">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-12 h-12 object-contain"
              />
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <a
                href={project.liveUrl || project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-[#6B4E31] hover:translate-x-1 transition-transform"
              >
                <FaArrowRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
