import Section from "./Section";

function About() {
    return (
        <Section id="about" title="Sobre mi">
            <div className="p-2">
                <p className="font-extralight p-2">
                    Soy Frontend Developer Jr, graduada de la Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas.
                    Me gusta desarrollar interfaces web modernas, funcionales y responsivas, combinando diseño y desarrollo para crear aplicaciones intuitivas.
                </p>
                <p className="font-extralight p-2">
                    Disfruto aprender nuevas herramientas, enfrentar desafíos y seguir creciendo profesionalmente, aportando soluciones funcionales y centradas en el usuario.
                </p>
            </div>
        </Section>

    );
}

export default About;