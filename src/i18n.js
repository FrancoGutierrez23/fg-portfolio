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
      "After spending a few years programming small projects as a hobby, I decided to formalize my knowledge by taking courses that taught a full set of cohesive skills. I'm excited to demonstrate my abilities and collaborate on innovative projects.": "After spending a few years programming small projects as a hobby, I decided to formalize my knowledge by taking courses that taught a full set of cohesive skills. I'm excited to demonstrate my abilities and collaborate on innovative projects.",
      
      "E-commerce with basic features like login/register (including Google auth), add to cart, buy with Stripe, orders, and more!": "E-commerce with basic features like login/register (incluiding Google auth), add to cart, buy with Stripe, orders, and more!",
      "Note": "Note",
      "Render servers may take some time to load at first.": "Render servers may take some time to load at first.",
      "A reddit clone with a neon twist! You can retrieve post from differents subreddits including comments, videos, galleries and more!": "A reddit clone with a neon twist! You can retrieve post from differents subreddits including comments, videos, galleries and more!",
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
      "After spending a few years programming small projects as a hobby, I decided to formalize my knowledge by taking courses that taught a full set of cohesive skills. I'm excited to demonstrate my abilities and collaborate on innovative projects.": "Tras pasar unos años programando pequeños proyectos como hobby, decidí consolidar mis conocimientos con cursos que me enseñaron un conjunto completo de habilidades cohesivas. Me entusiasma demostrar mis habilidades y colaborar en proyectos innovadores.",
      
      "E-commerce with basic features like login/register (including Google auth), add to cart, buy with Stripe, orders, and more!": "E-commerce  con funciones básicas como iniciar sesión/registro (incluida la autenticación de Google), agregar al carrito, comprar con Stripe, pedidos y más!",
      "Note": "Nota",
      "Render servers may take some time to load at first.": "Es posible que los servidores de Render tarden un tiempo en cargarse al principio.",
      "A reddit clone with a neon twist! You can retrieve post from differents subreddits including comments, videos, galleries and more!": "¡Un clon de Reddit con un toque de neón! Puedes recuperar publicaciones de diferentes subreddits, incluyendo comentarios, videos, galerías y más!",
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
