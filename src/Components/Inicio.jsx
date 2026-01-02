import React from 'react';

const Inicio = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-gray-100 min-h-[60vh]">
      {/* Información personal */}
      <div className="md:w-1/2 mb-8 md:mb-0 lg:px-14">
        <h1 className="text-4xl font-bold text-gray-800 mb- text-left mb-2">Hola, soy Weyler Cáceres</h1>
        <p className="text-lg text-gray-600 mb-2 text-left">
          Soy un desarrollador de software graduado, responsable y creativo, con actitud proactiva y orientación al aprendizaje continuo.
        </p>
        <p className="text-lg text-gray-600 mb-2 text-left">
          Tengo experiencia en el desarrollo de aplicaciones web y móviles usando tecnologías como ASP.NET, C#, Java, React, Tailwind CSS y NextJs.
        </p>
        <p className="text-lg text-gray-600 text-left">
          Además, he trabajado en plataformas como Microsoft Dynamics 365 Business Central y Finance & Operations, desarrollando soluciones con AL y X++, y cuento con formación complementaria en Big Data, testing y bases de datos.
        </p>
      </div>

      {/* Avatar + Redes */}
      <div className="md:w-1/3 flex justify-center">
        <div className="bg-white shadow-[0_0_15px_rgba(59,130,246,0.4)] rounded-xl p-6 w-72 h-auto flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105">
          <img
            src="/images/Weyler-removebg-copy.png"
            alt="Avatar"
            className="rounded-full w-40 h-40 mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold text-gray-700">Weyler Cáceres</h2>
          <p className="text-sm text-gray-500 text-center mb-4">Desarrollador FullStack</p>

          {/* Botones */}
          <div className="flex gap-2">
          <a
  href="https://www.linkedin.com/in/weylercaceres"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-1 border border-blue-600 px-2 py-1 rounded text-sm text-blue-600 hover:bg-blue-50 hover:text-blue-600 transition"
>
  <img src="/images/linkedin.svg" alt="LinkedIn" className="w-4 h-4" />
  LinkedIn
</a>

<a
  href="https://github.com/Weyler03"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-1 border border-gray-700 px-2 py-1 rounded text-sm text-gray-700 dark:text-gray-300 hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 transition"
>
  <img
    src="/images/github_light.svg"
    alt="GitHub Light"
    className="w-4 h-4 block dark:hidden"
  />
  <img
    src="/images/github_dark.svg"
    alt="GitHub Dark"
    className="w-4 h-4 hidden dark:block"
  />
  GitHub
</a>

            <a
              href="https://drive.google.com/file/d/1ECxOnu_g5xCQsbPrJDQBxkylt67DdrUr/view?usp=drive_link"
              download
              className="flex items-center gap-1 border border-green-600 px-2 py-1 rounded text-sm text-green-600 hover:text-green-600 hover:bg-green-50 transition"
            >
              <img src="/images/download.svg" alt="CV" className="w-4 h-4" />
              CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
