import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { RiLineChartLine, RiHashtag } from "react-icons/ri";

const Lista = () => {
  const [showList, setShowList] = useState(false);
  const toggleList = () => setShowList(!showList);
  const [searchTerm, setSearchTerm] = useState('');

  const patients = [
    { id: 1, name: 'Juan Pérez', age: 35, gender: 'Masculino', email: 'juan.perez@example.com' },
    { id: 2, name: 'María García', age: 28, gender: 'Femenino', email: 'maria.garcia@example.com' },
    { id: 3, name: 'Pedro Rodríguez', age: 42, gender: 'Masculino', email: 'pedro.rodriguez@example.com' },
    { id: 4, name: 'Ana López', age: 31, gender: 'Femenino', email: 'ana.lopez@example.com' },
  ];

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="col-span-1 lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-full overflow-y-scroll">
        <Header />
        <section className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-4">Registro de Pacientes</h1>
          <form id="patientForm" className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">Nombre:</label>
              <input type="text" id="name" className="form-input border-gray-400 rounded-md py-2 px-3" required />
            </div>
            <div>
              <label htmlFor="age" className="block text-gray-700 font-medium">Edad:</label>
              <input type="number" id="age" className="form-input border-gray-400 rounded-md py-2 px-3" required />
            </div>
            <div>
              <label htmlFor="gender" className="block text-gray-700 font-medium">Género:</label>
              <select id="gender" className="form-select border-gray-400 rounded-md py-2 px-3" required>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">Correo Electrónico:</label>
              <input type="email" id="email" className="form-input border-gray-400 rounded-md py-2 px-3" required />
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Registrar Paciente
              </button>
            </div>
          </form>
        </section>
        <div className="flex justify-between items-center mt-4">
          <div className="relative">
            <input type="text" id="search" className="form-input border-gray-400 rounded-md py-2 px-3 pl-8" placeholder="Buscar paciente" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-5-5 5-5" />
              </svg>
            </div>
          </div>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={toggleList}>
            {showList ? 'Registrar' : 'Lista'}
          </button>
        </div>
        {showList ? (
          <table className="mt-4 w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Nombre</th>
                <th className="px-4 py-2">Edad</th>
                <th className="px-4 py-2">Género</th>
                <th className="px-4 py-2">Correo Electrónico</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map(patient => (
                <tr key={patient.id}>
                  <td className="border px-4 py-2">{patient.id}</td>
                  <td className="border px-4 py-2">{patient.name}</td>
                  <td className="border px-4 py-2">{patient.age}</td>
                  <td className="border px-4 py-2">{patient.gender}</td>
                  <td className="border px-4 py-2">{patient.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <ul id="patientList" className="mt-4 list-disc pl-8 ml-8">
            {/* Render patient list items here */}
          </ul>
        )}
      </main>
    </div>
  )
}

export default Lista;