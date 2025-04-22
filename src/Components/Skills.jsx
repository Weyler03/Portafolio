function Skills() {
  const lenguajes = [
    { nombre: "C#", imagen: "/images/csharp.svg", color: "#68217A" },
    { nombre: "SQL", imagen: "/images/sql-server.svg", color: "#CC2927" },
    { nombre: "HTML", imagen: "/images/html5.svg", color: "#E34F26" },
    { nombre: "CSS", imagen: "/images/css.svg", color: "#1572B6" },
    { nombre: "JavaScript", imagen: "/images/javascript.svg", color: "#F7DF1E" },
    { nombre: "Java", imagen: "/images/java.svg", color: "#5382A1" },
    { nombre: "Python", imagen: "/images/python.svg", color: "#3776AB" },
    { nombre: "React", imagen: "/images/React.svg", color: "#61DAFB" },
    { nombre: "NextJs", imagen: "/images/nextjs_icon_dark.svg", color: "#000000" },
    { nombre: "Tailwind", imagen: "/images/tailwindcss.svg", color: "#38BDF8" },
    { nombre: ".Net", imagen: "/images/dotNet.svg", color: "#512BD4" },
    { nombre: "Postman", imagen: "/images/postman.svg", color: "#FF6C37" },
    { nombre: "Git", imagen: "/images/git.svg", color: "#F05032" },
    { nombre: "Figma", imagen: "/images/figma.svg", color: "#F24E1E" }
  ]

  return (
    <section id="skills" className="py-8 px-4 sm:px-6 lg:px-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Mis Habilidades</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {lenguajes.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 lg:w-60 lg:h-60 md:w-50 md:h-50 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105"
            style={{
              boxShadow: `0 10px 15px -3px ${skill.color}66`, // 66 = transparencia
              border: `2px solid ${skill.color}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 15px 25px -5px ${skill.color}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 10px 15px -3px ${skill.color}66`;
            }}
          >
            <img
              src={skill.imagen}
              alt={skill.nombre}
              className="w-20 h-20 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-700 text-center">{skill.nombre}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
