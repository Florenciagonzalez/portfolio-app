import Section from "./Section";
import { FaHtml5, FaJs, FaReact, FaCss3Alt, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri"

const skills = [
    {
        name: "HTML",
        icon: <FaHtml5 />
    },
    {
        name: "CSS",
        icon: <FaCss3Alt />
    },
    {
        name: "JavaScript",
        icon: <FaJs />
    },
    {
        name: "React.js",
        icon: <FaReact />
    },
    {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill />
    },
    {
        name: "Git",
        icon: <FaGitAlt />
    },
    {
        name: "GitHub",
        icon: <FaGithub />
    },
    {
        name: "Figma",
        icon: <FaFigma />
    },
];

function Skills() {
    return (
        <Section id="skills" title={"Tecnologías"}>
            <div className="p-2">
                <ul className="flex flex-wrap gap-2">
                    {skills.map(skill => (
                        <li key={skill.name} className="flex justify-center items-center p-1 border-2 border-gray-500 rounded-lg">
                            {skill.name}
                            <span className="ml-1">{skill.icon}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    );
}

export default Skills;