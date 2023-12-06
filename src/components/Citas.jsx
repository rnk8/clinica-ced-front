import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import useAuth from '../auth/useAuth';

function DentalAppointmentForm() {
  const [selectedPaciente, setSelectedPaciente] = useState('');
  const [selectedOdontologo, setSelectedOdontologo] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [appointments, setAppointments] = useState([]);
  const [showGenerator, setShowGenerator] = useState(true);
  const [pacientes, setPacientes] = useState([]);
  const [odontologos, setOdontologos] = useState([]);

  const UseAuth = useAuth();
  const loadPacientesOdontologos = async () => {
    try {
      const pacientesResponse = await fetch('https://clinica-ced-server2.onrender.com/api/paciente');
      const pacientesData = await pacientesResponse.json();
      setPacientes(pacientesData.paciente);

      const odontologosResponse = await fetch('https://clinica-ced-server2.onrender.com/api/odontologo');
      const odontologosData = await odontologosResponse.json();
      setOdontologos(odontologosData.odontologo);
    } catch (error) {
      console.error('Error al cargar pacientes y odontólogos:', error);
    }
  };

  const loadAppointments = async () => {
    try {
      const response = await fetch('https://clinica-ced-server2.onrender.com/api/citas');
      const data = await response.json();
      setAppointments(data.citas);
    } catch (error) {
      console.error('Error al cargar citas:', error);
    }
  };

  useEffect(() => {
    loadPacientesOdontologos();
    loadAppointments(); // Cargar citas al montar el componente
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newAppointment = {
        fecha: date,
        hora: time,
        nota: notes,
        paciente_id: selectedPaciente,
        odontologo_id: selectedOdontologo,
      };

      const response = await fetch('https://clinica-ced-server2.onrender.com/api/agendar_cita', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAppointment),
      });

      if (response.ok) {
        const data = await response.json();
        setAppointments([...appointments, data]);
        setSelectedPaciente('');
        setSelectedOdontologo('');
        setDate('');
        setTime('');
        setNotes('');
        console.log(UseAuth.user)
        UseAuth.createBitacora( UseAuth.user.email, "Escritura", "Registro Cita");
      } else {
        console.error('Error al enviar la solicitud');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Utiliza appointments para filtrar las citas
  const citasDelPaciente = appointments.filter(
    (appointment) => appointment.PacienteId === selectedPaciente
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="col-span-1 lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-full overflow-y-scroll">
        <Header />
        <form onSubmit={handleSubmit} className="space-y-4">
          
        <div>
            <label className="block text-sm font-medium text-gray-700">Seleccionar Paciente</label>
            <select
              value={selectedPaciente}
              onChange={(e) => setSelectedPaciente(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Selecciona un paciente</option>
              {pacientes.map((paciente) => (
                <option key={paciente.id} value={paciente.id}>
                  {`${paciente.nombre} ${paciente.apellido}`}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Seleccionar Odontologo</label>
            <select
              value={selectedOdontologo}
              onChange={(e) => setSelectedOdontologo(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Selecciona un odontologo</option>
              {odontologos.map((odontologo) => (
                <option key={odontologo.id} value={odontologo.id}>
                  {`${odontologo.nombre} ${odontologo.apellido}`}
                </option>
              ))}
            </select>
          </div>

          {showGenerator && (
            <div className="bg-white p-4 rounded-md shadow">
              <h2 className="text-lg font-medium text-gray-700 mb-2">Generador de Citas</h2>
              <label>
                Fecha de la cita:
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
              </label>
              <label>
                Hora de la cita:
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
              </label>
              <label>
                Notas:
                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
              </label>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-3 rounded"
              >
                Programar cita
              </button>
            </div>
          )}
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-700 mb-2">Citas del Paciente:</h2>
            {citasDelPaciente.length > 0 ? (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fecha
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Hora
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nota
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Paciente ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Odontólogo ID
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {citasDelPaciente.map((appointment) => (
                    <tr key={appointment.id}>
                      <td className="pxe-6 py-4 whitespace-nowrap">{appointment.fecha}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{appointment.hora}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{appointment.nota}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{appointment.PacienteId}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{appointment.odontologo_id}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No hay citas programadas para este paciente.</p>
            )}
          </div>
        </form>
      </main>
    </div>
  );
}

export default DentalAppointmentForm;

