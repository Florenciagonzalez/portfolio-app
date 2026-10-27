export const projects = [
    {
        id: 1,
        title: "Sistema de Monopatines",
        details: "Arquitectura de microservicios para la gestión de un sistema de alquiler de monopatines: API Gateway, servicios independientes de usuarios, monopatines, paradas, administración y mantenimiento, persistencia en MongoDB y despliegue con Docker Compose.",
        tecnologies: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "MongoDB", "Docker"],
        github: "https://github.com/Florenciagonzalez/TPE_ArquitecturasWeb"
    },
    {
        id: 2,
        title: "Home Appliance Store — Sistema de compras basado en microservicios",
        details: "Backend de e-commerce desarrollado con Java, Spring Boot y Spring Cloud, basado en una arquitectura de microservicios para la gestión de productos, carritos de compra y ventas. Implementa comunicación entre servicios con OpenFeign, descubrimiento con Eureka Server y despliegue mediante Docker.",
        tecnologies: ["Java", "Spring Boot", "Spring Cloud OpenFeign", "Netflix Eureka", "Spring Cloud LoadBalancer", "MySQL", "Maven", "Docker"],
        github: "https://github.com/Florenciagonzalez/home-appliance-store"
    },
    {
        id: 3,
        title: "Social Network — Microservicios con Spring Cloud",
        details: "Proyecto de práctica orientado a la comunicación entre microservicios, utilizando Spring Boot, Spring Cloud OpenFeign y Netflix Eureka para el registro y descubrimiento de servicios, con balanceo de carga.",
        tecnologies: ["Java", "Spring Boot", "Spring Cloud OpenFeign", "Netflix Eureka"],
        github: "https://github.com/Florenciagonzalez/socialnetwork"
    },
    {
        id: 4,
        title: "CAADi — plataforma web accesible",
        details: "Diseño e implementación de plataforma web accesible que centraliza información administrativa y de servicios para personas con discapacidad, con navegación responsiva, mapa interactivo y panel de administración.",
        img: "/images/caadi-project.png",
        tecnologies: ["React.js", "Tailwind CSS", "JavaScript", "Figma"],
        link: "https://caadi.vercel.app/"
    }

    

];