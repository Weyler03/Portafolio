function Proyectos() {
  const proyectos = [
    {
      titulo: "Galasys",
      imagen: "/images/Galasys-removebg.png",
      enlace: "http://galasys.com.do",
    },
    {
      titulo: "Ventafiel",
      imagen: "/images/Ventafiel.png",
      enlace: "https://www.ventafiel.com",
    },
  ];

  return (
    <section id="proyectos" className="py-8 px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {proyectos.map((proyecto, index) => (
          <div
            key={index}
            className="relative bg-white p-4 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.4)] w-full max-w-sm mx-auto h-64 flex flex-col transform transition-transform duration-300 hover:scale-105"
          >
            <div className="h-28 flex items-center justify-center mb-3">
              <img
                src={proyecto.imagen}
                alt={`Vista previa de ${proyecto.titulo}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-800 text-center">{proyecto.titulo}</h3>

            <a
              href={proyecto.enlace}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-black px-4 py-2 text-sm rounded-lg hover:text-blue-700 border border-blue-700 transition"
            >
              Ver sitio 👀
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Proyectos;
