import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../auth/useAuth";

const Bitacora = () => {
  const [bitacoras, setBitacoras] = useState([]);
  const [fechaIni, setFechaIni] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const UseAuth = useAuth();


  // Llama a fetchPacientes cuando el componente se monta y cuando el usuario cambia
  useEffect(() => {
    UseAuth.getAllBitacoras(setBitacoras);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( fechaIni !== "" && fechaFin !== "" ) {
        console.log(fechaIni, fechaFin)
        UseAuth.getAllBitacorasFilter(setBitacoras,  fechaIni, fechaFin)
    }
  }

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
        <Header />
        <p className="mt-10 font-bold text-2xl"> Lista de Bitacora </p>
        <div className="my-2 flex">
          <div className="mr-10 border border-2 p-2 rounded-md border-black/60">
            <label className="font-medium"> Fecha Inicial: </label>
            <input type="date" 
            onChange={ (e) => setFechaIni(e.target.value)}
            />
          </div>
          <div className="mr-10 border border-2 p-2 rounded-md border-black/60">
            <label className="font-medium"> Fecha Final: </label>
            <input type="date" 
              onChange={ (e) => setFechaFin(e.target.value)}
            />
          </div>
          <button className="border w-32 rounded-md bg-blue-600 text-white shadow-md hover:bg-blue-800" 
            onClick={ handleSubmit }
          > Filtrar </button>
        </div>
        <div className="container mx-auto my-8">
          <table className="min-w-full bg-white border border-gray-300 shadow-md h-96 overflow-y-scrooll">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 text-left border-b">ID</th>
                <th className="py-3 px-4 text-left border-b">Fecha</th>
                <th className="py-3 px-4 text-left border-b">Hora</th>
                <th className="py-3 px-4 text-left border-b">Usuario</th>
                <th className="py-3 px-4 text-left border-b">Tipo</th>
                <th className="py-3 px-4 text-left border-b">Descripción</th>
              </tr>
            </thead>
            <tbody className="h-96 ">
              {bitacoras.map((dato) => (
                <tr key={dato.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{dato.id}</td>
                  <td className="py-2 px-4 border-b">{dato.fecha}</td>
                  <td className="py-2 px-4 border-b">{dato.hora}</td>
                  <td className="py-2 px-4 border-b">{dato.usuario}</td>
                  <td className="py-2 px-4 border-b">{dato.tipo}</td>
                  <td className="py-2 px-4 border-b">{dato.descripcion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Bitacora;
