import ProjectCard from "../ProjectCard";
import Section from "./Section";
import { projects } from "../../data/projects";

function Projects(){
    return(
       <Section id={"projects"} title={"Proyectos"}>
        {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
        ))}
       </Section>
    );
}

export default Projects;