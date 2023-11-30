// AuthProvider.js
import { createContext, useState, useEffect } from 'react';
import { authProvider } from '../firebase/firebaseAuth';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    authProvider.authState(setUser, setLogged);
  }, [user]);

  const changePassword = async (newPassword) => {
    try {
      const currentUser = authProvider.getCurrentUser();
      await currentUser.updatePassword(newPassword);
      alert('Contraseña cambiada exitosamente');
    } catch (error) {
      alert('Error al cambiar la contraseña: ' + error.message);
    }
  };

  const registerPaciente = async (nombre, apellido) => {
    try {
      const currentUser = authProvider.getCurrentUser();
      const token = await currentUser.getIdToken();

      const response = await fetch('https://clinica-ced-server2.onrender.com/api/registrar_paciente', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          nombre,
          apellido,
        }),
      });

      if (response.ok) {
        console.log('Paciente registrado exitosamente');
      } else {
        const errorData = await response.json();
        console.error('Error al registrar paciente:', errorData.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const contextValue = {
    user,
    setUser,
    isLogged() {
      return JSON.parse(localStorage.getItem('user') || null) || logged;
    },
    changePassword,
    registerPaciente,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
