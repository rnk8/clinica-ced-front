// AuthProvider.js
import { useContext, createContext, useState, useEffect } from 'react';
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

  const contextValue = {
    user,
    setUser,
    isLogged() {
      return JSON.parse(localStorage.getItem('user') || null) || logged;
    },
    changePassword,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
