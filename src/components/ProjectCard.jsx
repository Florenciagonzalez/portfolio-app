import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
    return (
        <div className="p-2 md:p-5 border border-zinc-700 rounded-xl">
            <h3 className="font-bold text-lg md:text-2xl">{project.title}</h3>
            <div className="mt-2 flex flex-col-reverse md:flex-row justify-between items-start gap-4">
                <div className="font-extralight text-sm md:text-base md:w-1/2">
                    <p className="mr-2">{project.details}</p>
                    <ul className="flex flex-wrap items-start md:flex-row mt-2 mb-2">
                        {project.tecnologies.map(tecnology => (
                            <li key={tecnology} className="p-1 m-1 text-sky-600 border border-sky-600 rounded-md">{tecnology}</li>
                        ))}
                    </ul>
                </div>

                {project.img ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="relative block overflow-hidden rounded-lg group w-full h-48 md:h-auto md:w-5/12">
                        <img src={project.img} alt="" className="w-full h-full object-cover cursor-pointer" />
                        <div className="absolute inset-0 flex items-center justify-center gap-1 transition-all duration-300 bg-black/60">
                            <span className="text-lg font-semibold">
                                Ver proyecto
                            </span>
                            <MdArrowOutward />
                        </div>
                    </a>
                ) : (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 w-full md:w-5/12 aspect-video border border-zinc-700 rounded-lg bg-black/20 hover:bg-black/30 transition-colors duration-300 cursor-pointer">
                        <FaGithub size={40} />
                        <span className="text-lg font-semibold">Ver en GitHub</span>
                    </a>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;
