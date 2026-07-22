import { FaGithub, FaLinkedin } from "react-icons/fa";
import Avatar from "../Avatar";
import { MdEmail, MdFileOpen } from "react-icons/md";
import Typewriter from "../Typewriter";

function Hero() {
    return (
        <section id="hero" className="bg-(--bg-gray-app)">
            <div className="w-full flex flex-col border border-zinc-700 rounded-xl">

                <div className="m-4 p-2 flex flex-col md:flex-row items-center gap-6">
                    <div className="flex flex-col items-center">
                        <Avatar />
                    </div>

                    <div className="flex flex-col items-center md:items-start gap-y-5">
                        <h2 className="font-family text-center md:text-start text-2xl md:text-4xl font-bold md:mb-4">Florencia Belen Gonzalez</h2>
                        <Typewriter />
                        <p className=" text-center md:text-start">Transformando la curiosidad en código y las ideas en experiencias digitales. Siempre aprendiendo, siempre creando y siempre en busca del próximo desafío.</p>
                        <ul className="flex gap-3 justify-center md:justify-start">
                            <li><a href="/cv-florencia-gonzalez.pdf" rel="noopener noreferrer" target="_blank" className="bg-sky-600 hover:bg-sky-700 cursor-pointer rounded-sm p-1.5 text-sm font-semibold flex justify-center items-center"><span><MdFileOpen /></span>Ver CV</a></li>
                            <li className="hover:scale-125 hover:animate-pulse"><a href="https://github.com/Florenciagonzalez" target="_blank"><FaGithub size={30} /></a></li>
                            <li className="hover:scale-125 hover:animate-pulse"><a href="https://www.linkedin.com/in/florencia-belen-gonzalez/" target="_blank"><FaLinkedin size={30} /></a></li>
                            <li className="hover:scale-125 hover:animate-pulse"><a href="mailto:florenciabgonzalez24@gmail.com"><MdEmail size={30} /></a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;