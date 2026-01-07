import { ExternalLink } from "lucide-react";
import { Github } from "lucide-react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Education platform",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/skillpath.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 2,
    title: "Ecommerce platform",
    description:
      "Interactive Ecommerce webpage using html css and javascript. ",
    image: "/projects/cara.png",
    tags: ["HTML", "CSS", "javascript"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 3,
    title: "Infoshard Webpage",
    description:
      "Interactive and responsive webpage using html, css and bootstrap. ",
    image: "/projects/infoshard.png",
    tags: ["HTML", "CSS", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 4,
    title: "Amazone Clone",
    description: "creating my first webpage amazon clone using html and css. ",
    image: "/projects/amazon.png",
    tags: ["HTML", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
];
export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          featured <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each projects was carefully
          crafted with attention to details, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover  "
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4 ">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20}></ExternalLink>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20}></Github>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/sonam10115"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
