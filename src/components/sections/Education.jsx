import Section from "./Section";

function Education (){
    return(
        <Section id={"education"} title={"Educación"}>
            <div className="p-2">
                <h3 className="text-lg">Técnica Universitaria en Desarrollo de Aplicaciones Informáticas</h3>
                <span className="text-sky-600 font-extralight">Universidad Nacional del Centro de la Provincia de Buenos Aires</span>
            </div>
        </Section>
    );
}

export default Education;