import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const PatientList = ({ onSelectPatient }) => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState('');

  // Cargar la lista de pacientes al montar el componente
  useEffect(() => {
    loadPatients();
  }, []);

  // Función para cargar la lista de pacientes desde la API
  const loadPatients = async () => {
    try {
      const response = await fetch('https://clinica-ced-server2.onrender.com/api/paciente');
      const data = await response.json();
      setPatients(data.paciente);
    } catch (error) {
      console.error('Error al cargar pacientes:', error);
    }
  };

  // Función para manejar la selección de un paciente
  const handleSelectPatient = (e) => {
    setSelectedPatient(e.target.value);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="col-span-1 lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-full overflow-y-scroll">
        <Header />
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Seleccionar Paciente
            </label>
            <select
              value={selectedPatient}
              onChange={handleSelectPatient}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Selecciona un paciente</option>
              {patients &&
                patients.map((patient) => (
                  <option key={patient.id} value={patient.id}>
                    {`${patient.nombre} ${patient.apellido}`}
                  </option>
                ))}
            </select>
          </div>

          {selectedPatient ? (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Gestionar Odontograma</h3>
              {/* Link al odontograma */}
              <Link
                to={`/odontograma/${selectedPatient}`}
                className="block p-2 bg-blue-500 text-white rounded"
              >
                Gestionar Odontograma
              </Link>
            </div>
          ) : (
            <p className="text-gray-500 mt-4">
              Selecciona un paciente para gestionar el odontograma.
            </p>
          )}

          <div>
            <h2 className="text-xl font-semibold mb-4">Lista de Pacientes</h2>
            <ul className="space-y-2">
              {patients &&
                patients.map((patient) => (
                  <li
                    key={patient.id}
                    className="cursor-pointer hover:bg-gray-200 p-2 rounded"
                    onClick={() => onSelectPatient(patient)}
                  >
                    {`${patient.nombre} ${patient.apellido}`}
                  </li>
                ))}
            </ul>
          </div>
        </form>
      </main>
    </div>
  );
};

export default PatientList;
