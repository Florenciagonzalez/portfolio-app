import Section from "./Section";

function About() {
    return (
        <Section id="about" title="Sobre mi">
            <div className="">
                <p className="p-2">
                    Soy Backend Developer, graduada de la Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas. Me enfoco en el desarrollo backend con Java y Spring, trabajando en la construcción de APIs REST y arquitecturas de microservicios.
                </p>
                <p className="p-2">
                    Me motiva resolver desafíos técnicos, escribir código claro y mantenible, y seguir ampliando mis conocimientos para desarrollar soluciones cada vez mejores.
                </p>
            </div>
        </Section>

    );
}

export default About;