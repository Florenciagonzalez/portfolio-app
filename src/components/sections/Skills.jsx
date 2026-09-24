import Section from "./Section";
import { FaHtml5, FaJs, FaReact, FaCss3Alt, FaGitAlt, FaGithub, FaFigma, FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri"
import { SiSpringboot, SiSpringsecurity, SiHibernate } from "react-icons/si"

const skillCategories = [
    {
        category: "Backend",
        items: [
            { name: "Java", icon: <FaJava /> },
            { name: "Spring Boot", icon: <SiSpringboot /> },
            { name: "Spring Security", icon: <SiSpringsecurity /> },
            { name: "Spring Data JPA", icon: <SiHibernate /> },
        ]
    },
    {
        category: "Frontend",
        items: [
            { name: "HTML", icon: <FaHtml5 /> },
            { name: "CSS", icon: <FaCss3Alt /> },
            { name: "JavaScript", icon: <FaJs /> },
            { name: "React.js", icon: <FaReact /> },
            { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
        ]
    },
    {
        category: "Herramientas",
        items: [
            { name: "Git", icon: <FaGitAlt /> },
            { name: "GitHub", icon: <FaGithub /> },
            { name: "Figma", icon: <FaFigma /> },
        ]
    },
];

function Skills() {
    return (
        <Section id="skills" title={"Tecnologías"}>
            <div className="p-2 flex flex-col gap-4">
                {skillCategories.map(group => (
                    <div key={group.category}>
                        <h3 className="text-sm font-semibold text-sky-600 uppercase tracking-wide mb-2">{group.category}</h3>
                        <ul className="flex flex-wrap gap-2">
                            {group.items.map(skill => (
                                <li key={skill.name} className="flex justify-center items-center p-1 border-2 border-gray-500 rounded-lg">
                                    {skill.name}
                                    <span className="ml-1">{skill.icon}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}

export default Skills;
