import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        about: 'Nosotros',
        contact: 'Contacto'
      },
      hero: {
        title: 'PetroEnergy',
        subtitle: 'Soluciones Energéticas de Calidad Mundial',
        description: 'Líder en la industria petrolera con más de 30 años de experiencia, ofreciendo productos de la más alta calidad para satisfacer sus necesidades energéticas'
      },
      products: {
        title: 'Nuestros Productos',
        subtitle: 'Catálogo completo de productos petrolíferos y derivados',
        search: 'Buscar productos...',
        consult: 'Consultar',
        showing: 'Mostrando {{count}} de {{total}} productos',
        noResults: 'No se encontraron productos que coincidan con tu búsqueda.',
        all: 'Todos'
      },
      cta: {
        title: '¿Necesitas una Cotización?',
        subtitle: 'Contáctanos hoy y nuestro equipo te ayudará a encontrar la mejor solución',
        button: 'Contáctanos Ahora'
      },
      footer: {
        description: 'Líder en soluciones energéticas y productos derivados del petróleo, comprometidos con la calidad y la excelencia operativa.',
        quickLinks: 'Enlaces Rápidos',
        contact: 'Contacto',
        followUs: 'Síguenos',
        rights: 'Todos los derechos reservados.',
        developedBy: 'Desarrollado por'
      },
      welcome: {
        title: 'Bienvenido a PetroEnergy',
        message: 'Este es un sitio web de demostración desarrollado por Sarai Herrera como parte de su portafolio profesional. El proyecto fue creado para mostrar habilidades en desarrollo web moderno, incluyendo React, TypeScript, Tailwind CSS, y sistemas de internacionalización (i18n).',
        note: 'Nota: Este sitio es únicamente con fines demostrativos y no representa una empresa real.',
        button: 'Entendido'
      },
      about: {
        title: 'Nosotros',
        subtitle: 'Líderes en la Industria Energética',
        ourStory: 'Nuestra Historia',
        story1: 'Desde 1995, PetroEnergy se ha consolidado como uno de los principales proveedores de productos petrolíferos y derivados en la región. Nuestra trayectoria está marcada por un compromiso inquebrantable con la calidad, la innovación y la satisfacción del cliente.',
        story2: 'Comenzamos como una pequeña distribuidora local y, gracias a la confianza de nuestros clientes y al trabajo dedicado de nuestro equipo, hemos crecido hasta convertirnos en una empresa con presencia internacional, operando en más de 15 países y atendiendo a diversos sectores industriales.',
        story3: 'Hoy en día, contamos con instalaciones de refinación y almacenamiento de última generación, un equipo de más de 2,000 profesionales altamente capacitados, y una red de distribución que garantiza entregas puntuales y eficientes a todos nuestros clientes.',
        stats: {
          experience: 'Años de Experiencia',
          clients: 'Clientes Satisfechos',
          products: 'Productos Especializados',
          countries: 'Países de Operación'
        },
        ourValues: 'Nuestros Valores',
        values: {
          excellence: {
            title: 'Excelencia',
            description: 'Comprometidos con los más altos estándares de calidad en todos nuestros productos y servicios'
          },
          integrity: {
            title: 'Integridad',
            description: 'Actuamos con transparencia y ética en todas nuestras operaciones empresariales'
          },
          sustainability: {
            title: 'Sostenibilidad',
            description: 'Desarrollamos prácticas responsables con el medio ambiente y las comunidades'
          },
          innovation: {
            title: 'Innovación',
            description: 'Invertimos constantemente en tecnología para mejorar nuestros procesos'
          }
        },
        mission: 'Misión',
        missionText: 'Proveer soluciones energéticas de la más alta calidad, garantizando el suministro confiable de productos petrolíferos que impulsen el desarrollo económico de nuestros clientes y contribuyan al progreso de las comunidades donde operamos, siempre con responsabilidad social y ambiental.',
        vision: 'Visión',
        visionText: 'Ser reconocidos como la empresa líder en el sector energético, destacando por nuestra innovación, sostenibilidad y compromiso con la excelencia. Aspiramos a expandir nuestra presencia global mientras mantenemos nuestros valores fundamentales y contribuimos a un futuro energético más limpio y eficiente.',
        ourTeam: 'Nuestro Equipo',
        teamText: 'Profesionales comprometidos trabajando cada día para ofrecerte las mejores soluciones energéticas'
      },
      contact: {
        title: 'Contáctanos',
        subtitle: 'Estamos aquí para ayudarte',
        address: 'Dirección',
        phone: 'Teléfono',
        email: 'Email',
        schedule: 'Horario',
        scheduleDetails: 'Lunes - Viernes\n8:00 AM - 6:00 PM\nSábados: 9:00 AM - 2:00 PM',
        sendMessage: 'Envíanos un Mensaje',
        messageSent: '¡Mensaje Enviado!',
        thankYou: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
        form: {
          fullName: 'Nombre Completo',
          email: 'Email',
          phone: 'Teléfono',
          company: 'Empresa',
          message: 'Mensaje',
          namePlaceholder: 'Juan Pérez',
          emailPlaceholder: 'juan@ejemplo.com',
          phonePlaceholder: '+1 (555) 123-4567',
          companyPlaceholder: 'Nombre de tu empresa',
          messagePlaceholder: 'Cuéntanos cómo podemos ayudarte...',
          submit: 'Enviar Mensaje'
        },
        findUs: 'Encuéntranos',
        additionalInfo: 'Información Adicional',
        info: {
          delivery: 'Contamos con servicio de entrega a nivel nacional e internacional',
          consulting: 'Asesoría técnica especializada sin costo adicional',
          discounts: 'Descuentos especiales para compras al por mayor',
          certifications: 'Certificaciones internacionales de calidad'
        },
        cta: {
          title: '¿Tienes un proyecto en mente?',
          subtitle: 'Nuestro equipo de expertos está listo para ayudarte a encontrar la mejor solución para tus necesidades energéticas',
          button: 'Llámanos Ahora'
        }
      },
      categories: {
        Crudo: 'Crudo',
        Aviación: 'Aviación',
        Gas: 'Gas',
        Lubricantes: 'Lubricantes',
        Ceras: 'Ceras',
        'Combustibles Sólidos': 'Combustibles Sólidos',
        Petroquímicos: 'Petroquímicos'
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        contact: 'Contact'
      },
      hero: {
        title: 'PetroEnergy',
        subtitle: 'World-Class Energy Solutions',
        description: 'Leader in the oil industry with over 30 years of experience, offering the highest quality products to meet your energy needs'
      },
      products: {
        title: 'Our Products',
        subtitle: 'Complete catalog of petroleum products and derivatives',
        search: 'Search products...',
        consult: 'Inquire',
        showing: 'Showing {{count}} of {{total}} products',
        noResults: 'No products found matching your search.',
        all: 'All'
      },
      cta: {
        title: 'Need a Quote?',
        subtitle: 'Contact us today and our team will help you find the best solution',
        button: 'Contact Us Now'
      },
      footer: {
        description: 'Leader in energy solutions and petroleum-derived products, committed to quality and operational excellence.',
        quickLinks: 'Quick Links',
        contact: 'Contact',
        followUs: 'Follow Us',
        rights: 'All rights reserved.',
        developedBy: 'Developed by'
      },
      welcome: {
        title: 'Welcome to PetroEnergy',
        message: 'This is a demonstration website developed by Sarai Herrera as part of her professional portfolio. The project was created to showcase skills in modern web development, including React, TypeScript, Tailwind CSS, and internationalization systems (i18n).',
        note: 'Note: This site is for demonstration purposes only and does not represent a real company.',
        button: 'Got it'
      },
      about: {
        title: 'About Us',
        subtitle: 'Leaders in the Energy Industry',
        ourStory: 'Our Story',
        story1: 'Since 1995, PetroEnergy has established itself as one of the leading suppliers of petroleum products and derivatives in the region. Our trajectory is marked by an unwavering commitment to quality, innovation, and customer satisfaction.',
        story2: 'We started as a small local distributor and, thanks to the trust of our customers and the dedicated work of our team, we have grown to become a company with an international presence, operating in more than 15 countries and serving various industrial sectors.',
        story3: 'Today, we have state-of-the-art refining and storage facilities, a team of more than 2,000 highly trained professionals, and a distribution network that guarantees timely and efficient deliveries to all our customers.',
        stats: {
          experience: 'Years of Experience',
          clients: 'Satisfied Clients',
          products: 'Specialized Products',
          countries: 'Countries of Operation'
        },
        ourValues: 'Our Values',
        values: {
          excellence: {
            title: 'Excellence',
            description: 'Committed to the highest quality standards in all our products and services'
          },
          integrity: {
            title: 'Integrity',
            description: 'We act with transparency and ethics in all our business operations'
          },
          sustainability: {
            title: 'Sustainability',
            description: 'We develop responsible practices with the environment and communities'
          },
          innovation: {
            title: 'Innovation',
            description: 'We constantly invest in technology to improve our processes'
          }
        },
        mission: 'Mission',
        missionText: 'To provide the highest quality energy solutions, guaranteeing the reliable supply of petroleum products that drive the economic development of our customers and contribute to the progress of the communities where we operate, always with social and environmental responsibility.',
        vision: 'Vision',
        visionText: 'To be recognized as the leading company in the energy sector, standing out for our innovation, sustainability and commitment to excellence. We aspire to expand our global presence while maintaining our core values and contributing to a cleaner and more efficient energy future.',
        ourTeam: 'Our Team',
        teamText: 'Committed professionals working every day to offer you the best energy solutions'
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'We are here to help you',
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        schedule: 'Schedule',
        scheduleDetails: 'Monday - Friday\n8:00 AM - 6:00 PM\nSaturdays: 9:00 AM - 2:00 PM',
        sendMessage: 'Send Us a Message',
        messageSent: 'Message Sent!',
        thankYou: 'Thank you for contacting us. We will get in touch with you soon.',
        form: {
          fullName: 'Full Name',
          email: 'Email',
          phone: 'Phone',
          company: 'Company',
          message: 'Message',
          namePlaceholder: 'John Doe',
          emailPlaceholder: 'john@example.com',
          phonePlaceholder: '+1 (555) 123-4567',
          companyPlaceholder: 'Your company name',
          messagePlaceholder: 'Tell us how we can help you...',
          submit: 'Send Message'
        },
        findUs: 'Find Us',
        additionalInfo: 'Additional Information',
        info: {
          delivery: 'We offer national and international delivery service',
          consulting: 'Specialized technical consulting at no additional cost',
          discounts: 'Special discounts for bulk purchases',
          certifications: 'International quality certifications'
        },
        cta: {
          title: 'Have a project in mind?',
          subtitle: 'Our team of experts is ready to help you find the best solution for your energy needs',
          button: 'Call Us Now'
        }
      },
      categories: {
        Crudo: 'Crude',
        Aviación: 'Aviation',
        Gas: 'Gas',
        Lubricantes: 'Lubricants',
        Ceras: 'Waxes',
        'Combustibles Sólidos': 'Solid Fuels',
        Petroquímicos: 'Petrochemicals'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
