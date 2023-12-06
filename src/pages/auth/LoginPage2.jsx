import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import useAuth from '../../auth/useAuth'
import { authProvider } from '../../firebase/firebaseAuth'

import { useFormik } from 'formik'
import * as Yup from 'yup'
import TextValidator from '../../components/TextValidator';


const LoginPage = () => {
    const UseAuth = useAuth();

    const customForm = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                    .required('correo es obligatorio')
                    .email('correo no es valido'),
            password: Yup.string()
                    .required('contraseña es requerida')
                    .min(8, 'minimo 8 caracteres')
        }),
        onSubmit: (user)=> handleSubmit(user)
    });

    const handleSubmit = (user) => {
        console.log('login..')
        authProvider.login(user, UseAuth.setUser)
        UseAuth.createBitacora( user.email, "Lectura", "Inicio de Sesión");
    }

  return (
    <>
    {UseAuth.isLogged() ? (
      <Navigate to="/" />
    ) : (
      <div className="flex flex-col w-full py-4 mt-8 mx-2 md:mx-auto bg-white border">
        <form
          className="flex flex-col mt-8 w-full md:w-2/3 mx-auto"
          onSubmit={customForm.handleSubmit}
        >
          <p className="text-lg font-bold text-black/80 py-2">Bienvenido, Iniciar Sesión</p>
          <input
            className="my-2 border border-black/80 py-2 px-2 rounded-sm"
            type="email"
            placeholder="Correo"
            name="email"
            value={customForm.values.email}
            onChange={customForm.handleChange}
            onBlur={customForm.handleBlur}
          />
          {customForm.touched.email && customForm.errors.email && (
            <TextValidator title={customForm.errors.email} />
          )}
          <input
            className="my-2 border border-black/80 py-2 px-2 rounded-sm"
            type="password"
            placeholder="Contraseña"
            name="password"
            value={customForm.values.password}
            onChange={customForm.handleChange}
            onBlur={customForm.handleBlur}
          />
          {customForm.touched.password && customForm.errors.password && (
            <TextValidator title={customForm.errors.password} />
          )}
          <button
            type="submit"
            className="my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Iniciar Sesión
          </button>

          <div className="text-center mt-4">
            <Link className="text-blue-600" to="/register">
              ¿No tienes una cuenta? Regístrate aquí
            </Link>
          </div>
        </form>
      </div>
    )}
  </>
  )
}

export default LoginPage