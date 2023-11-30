import React, { useState } from "react";
import { Link } from "react-router-dom";

import useAuth from "../auth/useAuth";
import { authProvider } from "../firebase/firebaseAuth";
// Icons
import {
  RiHome3Line,
  RiFileCopyLine,
  RiWalletLine,
  RiPieChartLine,
  RiMore2Fill,
  RiCloseFill,
  RiPieChart2Fill,
  RiPictureInPictureLine,
} from "react-icons/ri";

const Sidebar = () => {
  const UseAuth = useAuth();
  console.log(UseAuth.user);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div
        className={`bg-primary-900 h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
          <img
            src="https://img.freepik.com/psd-gratis/ilustracion-3d-estomatologia-odontologia_23-2150033481.jpg?w=740&t=st=1698247428~exp=1698248028~hmac=171d57fa5fed1047d1c290d3dad62eeb899d9e14bd47c638f9a1558de621bac2"
            className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-300"
          />

          <h1 className="text-x2 text-white font-bold">
            {UseAuth.user ? UseAuth.user.email : " "}
          </h1>
          <p className="bg-primary-100 py-2 px-4 rounded-full text-white">
            Paciente
          </p>
        </div>
        {/* Nav */}
        <div className="bg-primary-300 p-8 rounded-tr-[100px] h-[70vh] overflow-y-scroll flex flex-col justify-between gap-8">
          <nav className="flex flex-col gap-8">
          <Link
            to="/home"
            className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
          >
            <RiHome3Line /> Inicio
          </Link>
          <Link
            to="/PatientList"
            className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
          >
            <RiWalletLine /> Gestionar Odontograma
          </Link>
           
            <Link
              to="/perfil"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiWalletLine /> Perfil
            </Link>
            <a
              href="citas"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiFileCopyLine /> Agendar Citas
            </a>
         

            <a
              href="#"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiPieChartLine /> Reportes
            </a>
            <Link
            to="/Registrar"
            className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
          >
            <RiPictureInPictureLine /> Registrar Paciente
          </Link>
          <Link
            to="/RegistrarOdontologo"
            className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
          >
            <RiPictureInPictureLine /> Gestionar Odontologo
          </Link>
            <button
              onClick={() => authProvider.logOut()}
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiMore2Fill /> Cerra Sesión
            </button>
          </nav>
          <div className="bg-primary-900/50 text-white p-4 rounded-xl">
            <p className="text-gray-400">Servicio al Cliente</p>
            <a href="#">Contactanos</a>
          </div>
        </div>
      </div>
      {/* Button mobile */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-white z-50"
      >
        {showMenu ? <RiCloseFill /> : <RiMore2Fill />}
      </button>
    </>
  );
};
export default Sidebar;
