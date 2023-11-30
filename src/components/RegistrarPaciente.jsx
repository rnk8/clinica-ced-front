import React, { useState, useEffect } from "react";
import useAuth from "../auth/useAuth";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import axios from "axios";

const RegisterPatient = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [pacientes, setPacientes] = useState([]);
  const { user } = useAuth();

  // Función para obtener la lista de pacientes
  const fetchPacientes = async () => {
    try {
      const response = await axios.get(`https://clinica-ced-server2.onrender.com/api/paciente`);
      console.log(response.data); // Imprime toda la respuesta
      setPacientes(response.data.paciente);
    } catch (error) {
      console.error("Error fetching pacientes:", error);
    }
  };
  
  
  // Llama a fetchPacientes cuando el componente se monta y cuando el usuario cambia
  useEffect(() => {
    fetchPacientes();
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Envia una solicitud POST para registrar un nuevo paciente
      await axios.post("https://clinica-ced-server2.onrender.com/api/paciente", {
        nombre,
        apellido,
        user_id: user.uid,
      });

      // Después de registrar, actualiza la lista de pacientes
      fetchPacientes();

      // Limpia los campos del formulario
      setNombre("");
      setApellido("");
    } catch (error) {
      console.error("Error al registrar paciente:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="col-span-1 lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-full overflow-y-scroll">
        <Header />
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Formulario para registrar paciente */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Apellido</label>
            <input
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-3 rounded"
            >
              Registrar Paciente
            </button>
          </div>
        </form>

        {/* Lista de Pacientes */}
<div>
  <h2 className="text-xl font-semibold mb-4">Lista de Pacientes</h2>
  <ul className="space-y-2">
    {pacientes.map((patient) => (
      <li key={patient.id} className="flex items-center justify-between cursor-pointer hover:bg-gray-200 p-2 rounded">
        <div>
          {`${patient.nombre} ${patient.apellido}`}
        </div>
        <Link to="/carduser">
        <button
          onClick={(e) => {
            e.stopPropagation();
            console.log("Botón clicado");
          }}
          className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-1 px-2 rounded shadow-md"
        >
          <i className="fas fa-edit"></i> Gestionar Odontograma
        </button>
        </Link>
      </li>
    ))}
  </ul>
</div>

      </main>
    </div>
  );
};

export default RegisterPatient;
