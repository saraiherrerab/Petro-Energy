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
