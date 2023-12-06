import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function Bitacora() {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [fecha, setFecha] = useState('');
  const [bitacora, setBitacora] = useState([]);

  useEffect(() => {
    // Simulación de carga de la bitácora al montar el componente
    const fakeBitacora = [
      { id: 1, titulo: 'Reunión de equipo', contenido: 'Discutimos los objetivos del próximo sprint.', fecha: '2023-05-01' },
      { id: 2, titulo: 'Entrenamiento de React', contenido: 'Estudiamos los conceptos avanzados de React.', fecha: '2023-05-03' },
      { id: 3, titulo: 'Lanzamiento de la nueva función', contenido: 'Publicamos la última función en el sitio web.', fecha: '2023-05-05' },
    ];

    setBitacora(fakeBitacora);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulación de envío de una nueva entrada a la bitácora
    const nuevaEntrada = {
      id: bitacora.length + 1,
      titulo,
      contenido,
      fecha,
    };

    setBitacora([...bitacora, nuevaEntrada]);
    setTitulo('');
    setContenido('');
    setFecha('');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="col-span-1 lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-full overflow-y-scroll">
        <Header />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Título</label>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Contenido</label>
            <textarea
              value={contenido}
              onChange={(e) => setContenido(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Fecha</label>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-3 rounded"
          >
            Agregar entrada
          </button>
        </form>

        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-700 mb-2">Bitácora:</h2>
          {bitacora.length > 0 ? (
            <ul className="space-y-4">
              {bitacora.map((entrada) => (
                <li key={entrada.id} className="bg-white p-4 rounded-md shadow">
                  <h3 className="text-lg font-medium text-gray-700">{entrada.titulo}</h3>
                  <p className="text-gray-600">{entrada.contenido}</p>
                  <p className="text-sm text-gray-500">{entrada.fecha}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay entradas en la bitácora.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default Bitacora;
