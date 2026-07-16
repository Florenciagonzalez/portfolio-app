
import { MdArrowOutward } from "react-icons/md";
function ProjectCard({ project }) {
    return (
        <>
            <div className="p-5 border border-zinc-700 rounded-xl">
                <h3 className="font-bold text-2xl">{project.title}</h3>
                <div className="p-2 flex flex-col md:flex-row justify-between items-start">
                    <div className="font-extralight md:w-1/2">
                        <p className="mr-2">{project.details}</p>
                        <ul className="flex flex-wrap items-start md:flex-row mt-2 mb-2">
                            {project.tecnologies.map(tecnology => (
                                <li key={tecnology} className="p-1 m-1 text-emerald-500 font-semibold border border-emerald-500 rounded-md">{tecnology}</li>
                            ))}
                        </ul>

                    </div>
                    <a href="https://caadi.vercel.app/" target="_blank" className="relative block overflow-hidden group md:w-5/12">
                        <img src={project.img} alt="" className=" cursor-pointer transition-transform duration-500"/>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/60">
                            <span className="text-lg opacity-0 font-semibold transition-opacity duration-300 group-hover:opacity-100">
                                Ver proyecto 
                            </span>
                            <MdArrowOutward />
                        </div>
                    </a>
                </div>
            </div>

        </>
    );
}

export default ProjectCard;