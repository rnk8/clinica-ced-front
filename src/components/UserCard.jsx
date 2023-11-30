import React, { useState, useContext, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { AuthContext } from '../auth/AuthProvider';

const Perfil = () => {
  const { user, updateUser, changePassword } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    password: '',
    name: user ? user.displayName : '',
    email: user ? user.email : '',
    phone: user ? user.phone : '',
    address: user ? user.address : '',
    avatar: user && user.photoURL ? user.photoURL : 'https://img.freepik.com/psd-gratis/ilustracion-3d-estomatologia-odontologia_23-2150033481.jpg?w=740&t=st=1698247428~exp=1698248028~hmac=171d57fa5fed1047d1c290d3dad62eeb899d9e14bd47c638f9a1558de621bac2',
  });

  useEffect(() => {
    setEditedUser({
      name: user ? user.displayName : '',
      email: user ? user.email : '',
      phone: user ? user.phone : '',
      address: user ? user.address : '',
      avatar: user && user.photoURL ? user.photoURL : 'https://img.freepik.com/psd-gratis/ilustracion-3d-estomatologia-odontologia_23-2150033481.jpg?w=740&t=st=1698247428~exp=1698248028~hmac=171d57fa5fed1047d1c290d3dad62eeb899d9e14bd47c638f9a1558de621bac2',
    });
  }, [user]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    updateUser({
      displayName: editedUser.name,
      email: editedUser.email,
      phone: editedUser.phone,
      address: editedUser.address,
      photoURL: editedUser.avatar,
    });
  };

  const handleChangePassword = async () => {
    if (editedUser.password) {
      await changePassword(editedUser.password);
    } else {
      alert('Por favor, introduce una nueva contraseña válida');
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="col-span-1 lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-full overflow-y-scroll">
        <Header />
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
          <div className="bg-gray-200 h-48 w-full flex items-center justify-center">
            <img src={editedUser.avatar} alt={editedUser.name} className="h-32 w-32 rounded-full" />
          </div>
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-2">{editedUser.name}</h1>
            <p className="text-gray-700 text-base mb-4">{editedUser.email}</p>
            <div className="mb-4">
              <h2 className="text-lg font-bold mb-2">Información de Contacto</h2>
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={editedUser.phone}
                    onChange={(e) => setEditedUser({ ...editedUser, phone: e.target.value })}
                    className="border border-gray-400 p-2 mb-2"
                    placeholder="Teléfono"
                  />
                  <input
                    type="text"
                    value={editedUser.address}
                    onChange={(e) => setEditedUser({ ...editedUser, address: e.target.value })}
                    className="border border-gray-400 p-2 mb-2"
                    placeholder="Dirección"
                  />
                </>
              ) : (
                <>
                  <p className="text-gray-700 text-base">{editedUser.phone}</p>
                  <p className="text-gray-700 text-base">{editedUser.address}</p>
                </>
              )}
            </div>
            {isEditing ? (
              <>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={handleSave}
                >
                  Guardar
                </button>
                <button
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={handleChangePassword}
                >
                  Cambiar Contraseña
                </button>
              </>
            ) : (
              <button
                className="bg-blue-500 hover.bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={handleEdit}
              >
                Editar
              </button>
            )}
            <div className="mb-4">
              <h2 className="text-lg font-bold mb-2">Contraseña</h2>
              {isEditing ? (
                <>
                  <input
                    type="password"
                    value={editedUser.password}
                    onChange={(e) => setEditedUser({ ...editedUser, password: e.target.value })}
                    className="border border-gray-400 p-2 mb-2"
                    placeholder="Nueva Contraseña"
                  />
                </>
              ) : null}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Perfil;
