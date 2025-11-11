import { Phone, Mail, MapPin, Instagram, Github, FileDown } from 'lucide-react';

function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg relative">
        {/* Botón para descargar/imprimir en PDF */}
        <div className="absolute top-4 right-4 print:hidden">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md shadow hover:bg-gray-700 transition-colors"
          >
            <FileDown size={18} />
            Descargar CV (PDF)
          </button>
        </div>

        {/* Header */}
        <div className="bg-gray-100 p-8 border-b-4 border-gray-800">
          <div className="flex items-start gap-6">
            <img
              src="https://cdn.discordapp.com/avatars/1017257245421088818/0da750c34e095f6b3fe410783cc44e8b.png?size=4096"
              alt="Octavio Morales"
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-800 tracking-wide">
                OCTAVIO MORALES
              </h1>
              <p className="text-lg text-gray-600 mt-1 uppercase tracking-wider">
                Estudiante
              </p>
              <p className="text-sm text-gray-600 mt-1">
                19 años • Nacido el 24/09/2006
              </p>

              <div className="flex flex-wrap gap-6 mt-4 text-sm text-gray-700">
                {/* WhatsApp */}
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-gray-600" />
                  <a
                    href="https://wa.me/584223033333"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-green-600 transition-colors"
                  >
                    +58 422 3033333 (Solo WhatsApp)
                  </a>
                </div>

                {/* Llamadas */}
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-gray-600" />
                  <a
                    href="tel:+56948093720"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    +56 948 093 720 (Llamadas)
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-gray-600" />
                  <span>777leog@gmail.com</span>
                </div>

                {/* Dirección */}
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-gray-600" />
                  <span>Providencia, Beltran 381</span>
                </div>

                {/* Instagram */}
                <div className="flex items-center gap-2">
                  <Instagram size={16} className="text-gray-600" />
                  <a
                    href="https://www.instagram.com/FEKANOLLEKA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    @FEKANOLLEKA
                  </a>
                </div>

                {/* GitHub */}
                <div className="flex items-center gap-2">
                  <Github size={16} className="text-gray-600" />
                  <a
                    href="https://github.com/fekanolleka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    fekanolleka
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="p-8 border-b border-gray-200 bg-white">
          <h2 className="text-xl font-bold text-gray-800 mb-3 uppercase tracking-wide">Perfil Profesional</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Estudiante de Contabilidad con sólidos conocimientos en programación y desarrollo tecnológico.
            Destaco por mi capacidad de adaptación, proactividad y orientación al aprendizaje continuo.
            Cuento con experiencia práctica en desarrollo web, automatización y atención al cliente.
            Busco aplicar mis habilidades técnicas y blandas en un entorno profesional que valore
            la innovación y el trabajo colaborativo.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Column */}
          <div className="p-8 border-r border-gray-200">
            {/* Education */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 uppercase tracking-wide">
                Educación
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1 font-semibold">2024 - Actualidad</p>
                  <h3 className="font-bold text-gray-800 text-lg">Liceo Comercial A-24</h3>
                  <p className="text-gray-700 mt-1">Técnico Medio en Contabilidad</p>
                </div>
              </div>
            </section>

            {/* Work Experience */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 uppercase tracking-wide">
                Experiencia y Proyectos
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    Desarrollo Web con Sistema de Monetización
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 italic">Proyecto Independiente</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Diseñé e implementé una plataforma web con sistema de recompensas basado en visualización de anuncios,
                    integrando APIs de publicidad y gestión de usuarios con base de datos.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    Automatización y Bots para Videojuegos
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 italic">Desarrollo de Software</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Desarrollé aplicaciones automatizadas para optimización de procesos en videojuegos,
                    implementando scripts con Python y manejo de APIs. Producto comercializado exitosamente.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="p-8 bg-gray-50">
            {/* Skills */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 uppercase tracking-wide">
                Habilidades
              </h2>

              {/* Soft Skills */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Habilidades Blandas</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-800 mr-2">•</span>
                    <span className="text-gray-700">Atención al cliente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-800 mr-2">•</span>
                    <span className="text-gray-700">Proactividad</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-800 mr-2">•</span>
                    <span className="text-gray-700">Responsabilidad</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-800 mr-2">•</span>
                    <span className="text-gray-700">Trabajo en equipo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-800 mr-2">•</span>
                    <span className="text-gray-700">Organización</span>
                  </li>
                </ul>
              </div>

              {/* Technical Skills */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Habilidades Técnicas</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-gray-800 mr-2">•</span>
                    <span className="text-gray-700">Contabilidad básica</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-800 mr-2">•</span>
                    <span className="text-gray-700">Desarrollo web (React, TypeScript, HTML, CSS, JavaScript)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-800 mr-2">•</span>
                    <span className="text-gray-700">Frameworks y herramientas (Vite, Tailwind CSS, Git/GitHub)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-800 mr-2">•</span>
                    <span className="text-gray-700">Desarrollo de bots y automatización (Python, APIs)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-800 mr-2">•</span>
                    <span className="text-gray-700">Bases de datos (Supabase)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-800 mr-2">•</span>
                    <span className="text-gray-700">Buenas prácticas de ciberseguridad en entornos administrativos</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-100 text-center text-sm text-gray-600 border-t border-gray-200">
          <p>Última actualización: 30/10/2025</p>
        </div>
      </div>
    </div>
  );
}

export default App;
