import PixelSnow from "../components/background/PixelSnow";
import Navbar from "../components/Navbar";
import About from "../components/sections/About";
import Education from "../components/sections/Education";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
function Home() {

    return (
        <>
            <div className="relative min-h-screen m-4">
                <div className="fixed inset-0 -z-10">
                    <PixelSnow
                        color="#ffffff"
                        flakeSize={0.01}
                        minFlakeSize={1.25}
                        pixelResolution={200}
                        speed={1.25}
                        density={0.3}
                        direction={125}
                        brightness={1}
                        depthFade={8}
                        farPlane={20}
                        gamma={0.4545}
                        variant="square"
                    />
                </div>
                <div className="min-h-screen flex flex-col items-center mb-5">

                    <div className="w-full sm:w-4/5 lg:w-3/5">
                        <Navbar />
                        <div className="w-full border border-zinc-700 rounded-xl mt-4">                            
                            <div className="p-2">
                                <Hero />
                                <About />
                                <Projects />
                                <Education />
                                <Skills />
                                
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;