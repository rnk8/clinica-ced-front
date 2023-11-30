import React, { useState, useEffect } from "react";
import useAuth from "../auth/useAuth";
import Sidebar from "./Sidebar";
import Header from "./Header";
import axios from "axios";

const GestionarOdontologo = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [odontologos, setOdontologos] = useState([]);
  const [usuariosFirebase, setUsuariosFirebase] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const { user } = useAuth();

  // Obtener la lista de usuarios de Firebase
  const fetchUsuariosFirebase = async () => {
    try {
      const response = await axios.get("https://tu-api-de-usuarios-de-firebase");
      setUsuariosFirebase(response.data);
    } catch (error) {
      console.error("Error fetching usuarios de Firebase:", error);
    }
  };

  // Función para obtener la lista de odontólogos
  const fetchOdontologos = async () => {
    try {
      const response = await axios.get("https://clinica-ced-server2.onrender.com/api/odontologo");
      setOdontologos(response.data.odontologo);
    } catch (error) {
      console.error("Error fetching odontólogos:", error);
    }
  };

  useEffect(() => {
    fetchOdontologos();
    fetchUsuariosFirebase(); // Llamar a la función para obtener usuarios de Firebase
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Verificar si el selectedUserId es válido
    const isValidUserId = (userId) => {
        return usuariosFirebase.some((usuario) => usuario.id === userId);
      };
      
  
    try {
      await axios.post("https://clinica-ced-server2.onrender.com/api/odontologo", {
        nombre,
        apellido,
        user_id: selectedUserId || user.uid,
      });
  
      fetchOdontologos();
  
      setNombre("");
      setApellido("");
      setSelectedUserId("");
    } catch (error) {
      console.error("Error al registrar odontólogo:", error);
    }
  };
  

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="col-span-1 lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-full overflow-y-scroll">
        <Header />
        <form onSubmit={handleSubmit} className="space-y-4">
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
          <div>
            <label className="block text-sm font-medium text-gray-700">Seleccionar Usuario</label>
            <select
              value={selectedUserId}
              onChange={(e) => setSelectedUserId(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Seleccionar...</option>
              {usuariosFirebase.map((usuario) => (
                <option key={usuario.id} value={usuario.id}>
                  {usuario.displayName || usuario.email}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-3 rounded"
            >
              Gestionar Odontólogo
            </button>
          </div>
        </form>

        <div>
          <h2 className="text-xl font-semibold mb-2"> Lista de Odontólogos </h2>
          <ul className="space-y-2">
            {odontologos.map((odontologo) => (
              <li key={odontologo.id} className="cursor-pointer hover:bg-gray-200 p-2 rounded">
                {`${odontologo.nombre} ${odontologo.apellido}`}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default GestionarOdontologo;
