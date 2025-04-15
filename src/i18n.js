import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Home": "Home",
      "About me": "About me",
      "Projects": "Projects",
      "My stack": "My stack",
      "Contact": "Contact",
      "Full-stack web developer": "Full-stack web developer",
      "AboutMe": "AboutMe",
      "description": "description",
      "years_old": "years_old",
      "location": "location",

      "Show more": "Show more",
      "Show less": "Show less",

      "aboutDescription": "After spending a few years programming small projects as a hobby, I decided to formalize my knowledge by taking courses that taught a full set of cohesive skills. I'm excited to demonstrate my abilities and collaborate on innovative projects.",
      
      "eCommerceDescription": "E-commerce with basic features like login/register (incluiding Google auth), adding products to cart, Stripe's checkout, check orders, and more.\n\nThis was my first full-stack project, which used different deployments for the frontend and server, as well as a SQL database in the cloud, all powered by Render.\n\nThis project helped me better understand concepts like integrating different parts of the application, handling error and loading states, authentication, input security, and much more.",
      "Note": "Note",
      "RenderNote": "Render servers take some time to load at first due inactivity.",

      "MovieRecoDescription": "Movie recommendation app.\nIt has features like movie sections (top rated, upcoming, popular, etc.), search bar, modal with details about selected movies, and of course, recommendations based on your choices.\n\nThis project particularly helped me sharpen my knowledge of TypeScript, Tailwind, and Redux.",

      "RedditsignDescription": "A reddit clone with a neon twist! You can retrieve post from differents subreddits including comments, videos, galleries and more!",
      "This is one of my first projects.": "This is one of my first projects.",

      "Go Live": "Go Live",
      "MyStack": "MyStack",

      "Message sent successfully!": "Message sent successfully!",
      "Failed to send message. Please try again.": "Failed to send message. Please try again.",
      "Contact Me": "Contact Me",
      "Your email": "Your email",
      "Your name": "Your name",
      "Your message": "Your message",
      "Send": "Send",
    }
  },
  es: {
    translation: {
      "Home": "Inicio",
      "About me": "Sobre mí",
      "Projects": "Proyectos",
      "My stack": "Mi stack",
      "Contact": "Contacto",
      "Full-stack web developer": "Desarrollador web full-stack",
      "AboutMe": "SobreMí",
      "description": "descripción",
      "years_old": "edad",
      "location": "ubicación",

      "Show more": "Mostrar más",
      "Show less": "Mostrar menos",

      "aboutDescription": "Tras pasar unos años programando pequeños proyectos como hobby, decidí consolidar formalmente mis conocimientos con cursos que me enseñaron un conjunto completo de habilidades cohesivas. Estoy preparado y ansioso de poder demostrar mis habilidades y colaborar en proyectos innovadores.",
      
      "eCommerceDescription": "E-commerce  con funciones básicas como iniciar sesión/registrarse (incluido Google auth), agregar productos al carrito, comprar con Stripe, ver pedidos y más.\n\nEste fue mi primer projecto full-stack, en el cual usé distintos deploys para el frontend y el server, además de una base de datos SQL en la nube, todo con Render.\n\nEste projecto me ayudó  a entender mejor conceptos como la integración de distintas partes de la aplicación, manejo de estados de error y carga, autentificación, seguridad de los inputs, y mucho más.",
      "Note": "Nota",
      "RenderNote": "Los servidores de Render tardan en cargar al inicio por inactividad.",

      "MovieRecoDescription": "App de recomendaciones de películas.\nCuenta con características como secciones de películas (mejores valoradas, próximamente, populares, etc.), buscador, modal con detalles sobre películas seleccionadas y, por supuesto, recomendaciones basada en tus elecciones.\n\nEste proyecto me ayudó particularmente a afilar mis conocimientos de TypeScript, Tailwind y Redux.",

      "RedditsignDescription": "Un clon de Reddit con un toque de neón.\nPuedes ver publicaciones de diferentes subreddits, incluyendo comentarios, videos y galerías, además de poder buscar publicaciones.\n\nEste es uno de mis primeros proyectos usando una API externa y el primero en el que implementé Redux, por lo que me fue útil para ganar un mejor entendimiento de cómo funcionan los estados, las peticiones a una API, la lógica de parte del servidor, y más.",

      "This is one of my first projects.": "Este es uno de mis primeros proyectos.",

      "Go Live": "Sitio en vivo",
      "MyStack": "MiStack",

      "Message sent successfully!": "Mensaje enviado con éxito!",
      "Failed to send message. Please try again.": "Error al enviar el mensaje. Por favor intenta de nuevo.",
      "Contact Me": "Contáctame",
      "Your email": "Tu email",
      "Your name": "Tu nombre",
      "Your message": "Tu mensaje",
      "Send": "Enviar",
      
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
