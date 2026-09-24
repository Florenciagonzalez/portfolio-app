import ProjectCard from "../ProjectCard";
import Section from "./Section";
import { projects } from "../../data/projects";

function Projects(){
    return(
       <Section id={"projects"} title={"Proyectos"} className={"scroll-mt-42"}>
        <div className="flex flex-col gap-4">
            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
       </Section>
    );
}

export default Projects;