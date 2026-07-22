import ProjectCard from "../ProjectCard";
import Section from "./Section";
import { projects } from "../../data/projects";

function Projects(){
    return(
       <Section id={"projects"} title={"Proyectos"} className={"scroll-mt-42"}>
        {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
        ))}
       </Section>
    );
}

export default Projects;