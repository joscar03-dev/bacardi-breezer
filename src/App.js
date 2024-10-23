import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import logo from "./assets/images/log.png";
import bottle from "./assets/images/Bacardi-Breezer-bottle.webp";
import portada from "./assets/images/portada.webp";
import limonElectrico from './assets/images/limon-electrico.webp';
import naranjaExplosiva from './assets/images/naranja-explosiva.webp';
import piñaTropical from './assets/images/piña-tropical.webp';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const flavors = [
    { name: "Limón Eléctrico", image: limonElectrico },
    { name: "Naranja Explosiva", image: naranjaExplosiva },
    { name: "Piña Tropical", image: piñaTropical },
  ];

  const valuePropositions = [
    "Sabor Intenso",
    "Calidad Premium",
    "Variedad Única",
    "Experiencia Refrescante",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-pink-500">
      <header className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <img src={logo} alt="Bacardi Breezer Logo" className="h-10" />
          <nav className="hidden md:flex space-x-6">
            {valuePropositions.map((prop, index) => (
              <a
                key={index}
                href="#"
                className="text-purple-700 hover:text-pink-500 transition-colors font-semibold"
              >
                {prop}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-purple-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white px-4 py-2">
            {valuePropositions.map((prop, index) => (
              <a
                key={index}
                href="#"
                className="block py-2 text-purple-700 hover:text-pink-500 transition-colors font-semibold"
              >
                {prop}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main className="pt-20">
        <section className="container mx-auto px-4 py-16">
          <div className="relative mb-16">
            <img
              src={portada}
              alt="Bacardi Breezer Lifestyle"
              className="w-full h-[70vh] object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-50 rounded-lg"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 shadow-text">
                Descubre la Intensidad
              </h1>
              <p className="text-2xl md:text-3xl text-white mb-8 shadow-text">
                Bacardi Breezer: Una Explosión de Sabor
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-3 px-8 rounded-full transition-colors text-lg shadow-lg">
                Explora los Sabores
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                La Revolución del Sabor
              </h2>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                Bacardi Breezer redefine la experiencia de las bebidas listas
                para tomar. Nuestra combinación única de sabores intensos y la
                calidad inigualable de Bacardi te transportará a un mundo de
                frescura y diversión. Perfecta para cualquier ocasión, desde
                relajadas tardes de verano hasta emocionantes noches de fiesta.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors font-semibold text-lg"
              >
                Descubre nuestra historia <ChevronRight className="ml-2" />
              </a>
            </div>
            <div className="relative">
              <img
                src={bottle}
                alt="Bacardi Breezer Bottle"
                className="w-full rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-purple-900 font-bold py-2 px-4 rounded-full shadow-lg">
                ¡Nuevo Sabor!
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-purple-700 mb-16">
              Nuestros Sabores Intensos
            </h2>
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {['Limón Eléctrico', 'Naranja Explosiva', 'Piña Tropical'].map((flavor, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-8 shadow-xl hover:shadow-2xl transition-shadow">
                  <img src={`/placeholder.svg?height=250&width=250&text=${flavor}`} alt={`${flavor} Breezer`} className="w-full h-64 object-cover rounded-md mb-6 shadow-lg" />
                  <h3 className="text-2xl font-semibold text-purple-700 mb-4">{flavor}</h3>
                  <p className="text-gray-700 mb-6">Sumérgete en la intensidad del {flavor.toLowerCase()}. Una experiencia única que despertará tus sentidos.</p>
                  <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
                    Pruébalo ahora
                  </button>
                </div>
              ))}
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {flavors.map((flavor, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-8 shadow-xl hover:shadow-2xl transition-shadow"
                >
                  <img
                    src={flavor.image}
                    alt={`${flavor.name} Breezer`}
                    className="w-full h-64 object-cover rounded-md mb-6 shadow-lg"
                  />
                  <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                    {flavor.name}
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Sumérgete en la intensidad del {flavor.name.toLowerCase()}.
                    Una experiencia única que despertará tus sentidos.
                  </p>
                  <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
                    Pruébalo ahora
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-purple-600 to-pink-500 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Únete a la Revolución del Sabor
            </h2>
            <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto">
              No te pierdas nuestras últimas novedades, eventos exclusivos y
              ofertas especiales. ¡Sé el primero en probar nuestros nuevos
              sabores!
            </p>
            <form className="flex flex-col md:flex-row justify-center items-center gap-4">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="px-6 py-3 rounded-full text-purple-900 w-full md:w-96"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-3 px-8 rounded-full transition-colors">
                Suscríbete
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-purple-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Bacardi Breezer</h3>
              <p className="text-gray-300">Refrescando el mundo desde 1988</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Nuestros Productos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Dónde Comprar
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Eventos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Sobre Nosotros
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li className="text-gray-300">info@bacardibreezer.com</li>
                <li className="text-gray-300">+1 (555) 123-4567</li>
                <li className="text-gray-300">123 Breezer Street, Miami, FL</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-300">
            <p>
              &copy; 2023 Bacardi Breezer. Todos los derechos reservados. Bebe
              con responsabilidad.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
