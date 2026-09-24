import Section from "./Section";

function About() {
    return (
        <Section id="about" title="Sobre mi">
            <div className="">
                <p className="p-2">
                    Soy Backend Developer, graduada de la Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas. 
                    Me especializo en el ecosistema Spring (Spring Boot, Spring Security, Data JPA), diseñando APIs robustas y arquitecturas basadas en microservicios.
                </p>
                <p className="p-2">
                    Disfruto aprender nuevas herramientas, enfrentar desafíos técnicos y seguir creciendo profesionalmente, aportando soluciones sólidas del lado del servidor.
                </p>
            </div>
        </Section>

    );
}

export default About;