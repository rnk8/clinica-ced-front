import useAuth from "../../auth/useAuth";
import { authProvider } from "../../firebase/firebaseAuth";
import { useFormik } from "formik";
import * as Yup from "yup";

import TextValidator from "../../components/TextValidator";
import { Link, Navigate } from "react-router-dom";

const RegisterPage = () => {
  const UseAuth = useAuth();

  const customForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("nombre es requerido"),
      email: Yup.string()
        .required("correo es requerido")
        .email("correo no es valido"),
      password: Yup.string()
        .required("contraseña es requerida")
        .min(8, "minimo 8 caracteres"),
    }),
    onSubmit: (user) => handleSubmit(user),
  });

  const handleSubmit = (user) => {
    console.log(user);
    authProvider.register(user, UseAuth.setUser);
    UseAuth.createBitacora( user.email, "Escritura", "Creación de Usuario");
  };

  return (<>
    {UseAuth.isLogged() ? (
      <Navigate to="/" />
    ) : (
      <div className="flex flex-col md:flex-row w-full py-10 mt-8 md:mt-28 mx-2 md:mx-auto bg-white border">
        <div className="w-full md:w-1/2"></div>
        <div className="border-l-2 md:border-l-2"></div>
        <form className="flex flex-col mt-12 w-full md:w-2/3 mx-auto" onSubmit={customForm.handleSubmit}>
          <p className="text-lg font-bold text-black/80 py-2">Bienvenido, Registrarse</p>
          <input
            className="my-2 border border-black/80 py-2 px-2 rounded-sm"
            type="text"
            placeholder="Nombre"
            name="name"
            value={customForm.values.name}
            onChange={customForm.handleChange}
            onBlur={customForm.handleBlur}
          />
          {customForm.touched.name && customForm.errors.name && (
            <TextValidator title={customForm.errors.name} />
          )}
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
            Registrarse
          </button>
          <div className="text-center mt-4">
            <Link className="text-blue-600" to="/login">
              ¿Ya tienes una cuenta? Inicia sesión aquí
            </Link>
          </div>
        </form>
      </div>
    )}
  </>
  );
};

export default RegisterPage;
