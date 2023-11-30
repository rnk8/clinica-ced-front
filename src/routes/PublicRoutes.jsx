import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Asegúrate de importar BrowserRouter y Routes
import LoginPage2 from '../pages/auth/LoginPage2';
import RegisterPage2 from '../pages/auth/RegisterPage2';
import Home from '../components/Home';
import Lista from '../components/Lista';
import Perfil from '../components/Perfil';
import Citas from '../components/Citas';
import useAuth from '../auth/useAuth';
import PrivateRoute from './PrivateRoute';
import Listapaciente from '../components/Listapaciente'
import Odontogramapage from '../pages/Odontograma/Odontogramapage';
import RegistrarPaciente from '../components/RegistrarPaciente'

const PublicRoutes = () => {
  const UseAuth = useAuth();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <PrivateRoute state={ UseAuth.isLogged() }> <Home/> </PrivateRoute> } />
          <Route path="/register" element={<RegisterPage2/>} />
          <Route path="/login" element={<LoginPage2 />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Lista" element={<Lista />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/citas" element={<Citas />} />
          <Route path="/PatientList" element={<Listapaciente/>} />
          <Route path="/odontograma/:id" element={<Odontogramapage />} />
          <Route path="/Registrar" element={<RegistrarPaciente/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default PublicRoutes;



