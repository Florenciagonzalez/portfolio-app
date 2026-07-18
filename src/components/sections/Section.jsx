function Section({id, title, children, className }) {
    return (
        <>
            <section id={id} className={`w-full border border-zinc-700 p-8 rounded-xl mt-4 bg-(--bg-gray-app) ${className}`}>
                
                <h2 className="font-bold text-2xl">{title}</h2>
                  <div className="flex-1 h-px bg-linear-to-r from-gray-600 via-gray-800 to-transparent mt-2 mb-4" />
                {children}
            </section>
        </>

    );
}

export default Section;