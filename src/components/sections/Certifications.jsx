import Section from "./Section";
import { certifications } from "../../data/certifications";

function Certifications() {
    return (
        <Section id={"certifications"} title="Certificaciones">
            <div className="flex flex-col gap-4">
                {certifications.map(certification => (
                    <div key={certification.id}>
                        <h3 className="font-extrabold text-lg">{certification.title} </h3>
                        <p>{certification.details}
                            <span className="ml-1">
                                <a className="text-sky-600 font-extralight border-b" href={certification.certificate} target="_blank">
                                    Certificado {certification.institution}
                                </a>
                            </span>
                        </p>
                    </div>
                ))}

            </div>

        </Section>
    );
}

export default Certifications;