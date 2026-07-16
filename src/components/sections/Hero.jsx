import { FaGithub, FaLinkedin } from "react-icons/fa";
import Avatar from "../Avatar";
import { MdEmail } from "react-icons/md";

function Hero() {
    return (
        <section id="hero" className="bg-(--bg-gray-app)">
            <div className="w-full flex flex-col border border-zinc-700 rounded-xl mt-4">

                <div className="m-4 p-2 flex flex-col md:flex-row items-center gap-6">
                    <Avatar />
                    <div className="flex flex-col gap-y-2">
                        <h2 className="font-family text-center md:text-start text-2xl md:text-4xl font-bold ">Florencia Belen Gonzalez</h2>
                        <h3 className="text-center md:text-start ">| Frontend Developer Jr</h3>
                        <p className="font-extralight text-center md:text-start">Turning curiosity into code and ideas into impactful digital experiences. Always learning, always building, and always chasing the next challenge.</p>
                        <ul className="flex gap-3 justify-center md:justify-start">
                            <li className="hover:scale-125 hover:animate-pulse hover:ease-in-out"><a href="https://github.com/Florenciagonzalez" target="_blank"><FaGithub size={30} /></a></li>
                            <li className="hover:scale-125 hover:animate-pulse"><a href="https://www.linkedin.com/in/florencia-belen-gonzalez/" target="_blank"><FaLinkedin size={30}/></a></li>
                            <li className="hover:scale-125 hover:animate-pulse"><a href="mailto:florenciabgonzalez24@gmail.com"><MdEmail size={30}/></a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;