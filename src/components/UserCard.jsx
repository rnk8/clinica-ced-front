import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";
import CardOdontograma from "./CardOdontograma";

const OdontogramaPage = () => {
  const [detallesOdontograma, setDetallesOdontograma] = useState([]);
  const [pacientee, setPaciente] = useState("");
  const location = useLocation();
  const currentURL = location.pathname.split("/")[2];
  console.log(currentURL);
  useEffect(() => {
    // Hacer la llamada a la API para obtener los detalles del odontograma
    axios
      .get(`https://clinica-ced-server2.onrender.com/api/odontograma/${currentURL}`)
      .then((response) => {
        console.log(response);
        setDetallesOdontograma(response.data.detalles);
        setPaciente(response.data.paciente);
      })
      .catch((error) => {
        console.error("Error fetching odontograma details:", error);
      });
  }, []);

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
        <Header />
        <p className="font-semibold text-2xl my-4">
          {"Paciente: " + pacientee}
        </p>
        <div className="grid grid-cols-2 gap-6 w-full">
          {detallesOdontograma.map((odontograma, index) => (
            <div key={index} className="w-full">
              <CardOdontograma key={index} detalle={odontograma} />
            
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default OdontogramaPage;
