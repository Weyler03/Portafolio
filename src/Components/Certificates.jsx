import { useState } from 'react';

function Certificates() {
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const certificates = [
      { nombre: "Diseño de Paginas Web", imagen: "/images/CertificadoDPW.svg", color: "#000066" },
      { nombre: "Manejo Basico de Big Data", imagen: "/images/Certificado-MBBD.svg", color: "#000066" },
      { nombre: "Curador de datos", imagen: "/images/Curador-de-datos.svg", color: "#19aba3" },
      { nombre: "Administrador de Bases de Datos", imagen: "/images/DB-admin.svg", color: "#19aba3" },
      { nombre: "Finder", imagen: "/images/Finder.svg", color: "#19aba3" },
      { nombre: "Diseñador de Peticiones IA", imagen: "/images/Prompt-designer.svg", color: "#19aba3" },
      { nombre: "Tester", imagen: "/images/Tester.svg", color: "#19aba3" }
    ];
  
    const openModal = (certificate) => {
      setSelectedCertificate(certificate);
      setIsModalOpen(true);
      // Prevenir scroll del body cuando el modal está abierto
      document.body.style.overflow = 'hidden';
    };
  
    const closeModal = () => {
      setSelectedCertificate(null);
      setIsModalOpen(false);
      // Restaurar scroll del body
      document.body.style.overflow = 'unset';
    };
  
    // Cerrar modal con la tecla Escape
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
  
    return (
      <>
        <section id="certificates" className="py-8 px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Certificados</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {certificates.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 lg:w-60 lg:h-60 md:w-50 md:h-50 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 cursor-pointer"
                style={{
                  boxShadow: `0 10px 15px -3px ${skill.color}66`,
                  border: `2px solid ${skill.color}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 15px 25px -5px ${skill.color}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 10px 15px -3px ${skill.color}66`;
                }}
                onClick={() => openModal(skill)}
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
  
        {/* Modal/Popup */}
        {isModalOpen && selectedCertificate && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <div 
              className="bg-white rounded-xl max-w-4xl max-h-[90vh] w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Contenido del modal */}
              <div className="p-6">
                <img
                  src={selectedCertificate.imagen}
                  alt={selectedCertificate.nombre}
                  className="w-full h-auto object-contain max-h-[70vh]"
                />
                <h3 className="text-2xl font-bold text-center mt-4 text-gray-800">
                  {selectedCertificate.nombre}
                </h3>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
  
  export default Certificates;