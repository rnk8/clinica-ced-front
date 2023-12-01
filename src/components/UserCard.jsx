import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';

const OdontogramaPage = () => {
  const [detallesOdontograma, setDetallesOdontograma] = useState([]);
  const location = useLocation();
  const currentURL = location.pathname.split('/')[2];
  console.log(currentURL);
  useEffect(() => {
    // Hacer la llamada a la API para obtener los detalles del odontograma
    axios.get(`http://localhost:8081/api/odontograma/${currentURL}`)
      .then(response => {
        setDetallesOdontograma(response.data.detalles);
      })
      .catch(error => {
        console.error('Error fetching odontograma details:', error);
      });
  }, []);

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
    <Sidebar/>
    <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
      <Header />
    <div>
      <h1>Detalles del Odontograma del Paciente</h1>
      {detallesOdontograma.map((odontograma, index) => (
        <div key={index}>
          <h2>Pieza dental: {odontograma[0].nombre}</h2>
          <ul>
            {odontograma[0].Tipo_piezas.map((tipoPieza) => (
              <li key={tipoPieza.id}>
                {tipoPieza.nombre} - Estado: {tipoPieza.estado ? 'Activo' : 'Inactivo'}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </main>
    </div>
  );
};

export default OdontogramaPage;
