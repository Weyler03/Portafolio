import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow">
      <h3 className="lg:text-3xl md:text-xl sm:text-md font-bold lg:px-14">Weyler Caceres</h3>
      <ul className="flex space-x-6 lg:px-24">
        <li><a href="#inicio" className="hover:text-gray-300 lg:text-3xl md:text-xl sm:text-l text-white">Inicio</a></li>
        <li><a href="#proyectos" className="hover:text-gray-300 lg:text-3xl md:text-xl sm:text-l text-white">Proyectos</a></li>
        <li><a href="#skills" className="hover:text-gray-300 lg:text-3xl md:text-xl sm:text-l text-white">Habilidades</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
