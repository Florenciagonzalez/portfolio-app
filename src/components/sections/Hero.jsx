import Avatar from "../Avatar";

function Hero() {
    return (
        <section className="bg-(--bg-gray-app)">
            <div className="w-full flex flex-col border border-zinc-700 rounded-xl mt-4">

                <div className="m-4 p-2 flex flex-col md:flex-row items-center gap-6">
                    <Avatar />
                    <div className="">
                        <h2 className="font-family text-2xl md:text-4xl font-bold p-2">Florencia Belen Gonzalez</h2>
                        <p className="font-extralight p-2">Turning curiosity into code and ideas into impactful digital experiences. Always learning, always building, and always chasing the next challenge.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;