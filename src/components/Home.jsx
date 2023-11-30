import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

// Icons
import { RiLineChartLine, RiHashtag } from "react-icons/ri";


const Home = () => {
  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
        <Header />
        {/* Section 1 */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
          {/* Card 1 */}
          <div className="bg-primary-100 p-8 rounded-xl text-gray-300 flex flex-col gap-6">
            <RiLineChartLine className="text-5xl" />
            <h4 className="text-2xl"></h4>
            <Link to="/PatientList">
  <button
    className="text-3xl text-white bg-transparent border-none cursor-pointer"
    onClick={() => {
      // Lógica para gestionar el odontograma al hacer clic
      console.log('Gestionar Odontograma clicado');
    }}
  >
    Gestionar Odontograma 🦷 
  </button>
</Link>

<span className="py-1 px-3 bg-primary-300/80 rounded-full">
  Ver citas
</span>

          </div>
          {/* Card 2 */}
          <div className="p-4 bg-white rounded-xl flex flex-col justify-between gap-4 drop-shadow-2xl">
            <div className="flex items-center gap-4 bg-primary-100/10 rounded-xl p-4">
              <span className="bg-primary-100 text-gray-300 text-2xl font-bold p-4 rounded-xl">
                29/10
              </span>
              <div>
                <h3 className="font-bold">Reserva Atención</h3>
                <p className="text-gray-500">Agendar</p>
              </div>
            </div>
            <div className="bg-primary-100/10 rounded-xl p-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary-100 text-gray-300 text-2xl font-bold p-4 rounded-xl">
                  32
                </span>
                <div>
                  <h3 className="font-bold">Nuestros Productos</h3>
                  <p className="text-gray-500">Renueva tu cepillo cada mes</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span className="bg-primary-100/20 py-1 px-4 rounded-full">
                  Comprar
                </span>
                <span className="bg-primary-100/20 py-1 px-4 rounded-full">
                 Carrito
                </span>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
            <h1 className="text-2xl font-bold mb-8">Recomendaciones</h1>
            <div className="bg-white p-8 rounded-xl shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <img
                  src="https://img.freepik.com/foto-gratis/hermosa-joven-doctora-mirando-camara-oficina_1301-7807.jpg?w=360&t=st=1698247022~exp=1698247622~hmac=9c7021b1383b83d49a06b4c394fcb0ddfc81ab5ec816f6b706e6bd8fecf30a1f"
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-bold">Para una mejor salud Bucal</h3>
                  <p className="text-gray-500">Evitar el tabaco...</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://img.freepik.com/foto-gratis/hermosa-joven-doctora-mirando-camara-oficina_1301-7807.jpg?w=360&t=st=1698247022~exp=1698247622~hmac=9c7021b1383b83d49a06b4c394fcb0ddfc81ab5ec816f6b706e6bd8fecf30a1f"
                  className="w-14 h-14 object-cover rounded-full"
                />
                <div>
                  <h3 className="font-bold">Toda la gente sonríe en un mismo idioma.</h3>
                  <p className="text-gray-500">Nada de lo que llevas es más importante que tu sonrisa</p>
                </div>
              </div>
              <div className="flex justify-end">
                <a
                  href="#"
                  className="hover:text-primary-100 transition-colors hover:underline"
                >
                  Leer todo...
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Section 2 */}
        <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
          <div>
            <h1 className="text-2xl font-bold mb-8">Citas Recientes</h1>
            <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
              {/* Card 1 */}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src="https://img.freepik.com/foto-gratis/doctor-vista-frontal-que-trabaja-clinica_23-2150165481.jpg?w=996&t=st=1698247244~exp=1698247844~hmac=ca3cf5c1f69b8f41e7d2ad84fda7f98ea6b71370dead74a1a4b8af0a25fd519b"
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">Dr. Alejandro</h3>
                    <p className="text-gray-500">Dentista</p>
                  </div>
                </div>
                <div>
                  <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">
                    Paid
                  </span>
                </div>
                <div>
                  <span className="font-bold"></span>
                </div>
              </div>
              {/* Card 2 */}
              <div className="grid grid-cols-1 xl:grid-cols-4 items-center gap-4 mb-4">
                <div className="col-span-2 flex items-center gap-4">
                  <img
                    src="https://img.freepik.com/foto-gratis/doctor-vista-frontal-que-trabaja-clinica_23-2150165481.jpg?w=996&t=st=1698247244~exp=1698247844~hmac=ca3cf5c1f69b8f41e7d2ad84fda7f98ea6b71370dead74a1a4b8af0a25fd519b"
                    className="w-14 h-14 object-cover rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">Dr. Alejandro</h3>
                    <p className="text-gray-500">Dentista</p>
                  </div>
                </div>
                <div>
                  <span className="bg-red-100 text-red-800 py-1 px-3 rounded-full font-medium">
                    Late
                  </span>
                </div>
                <div>
                  <span className="font-bold"></span>
                </div>
              </div>
            </div>
            <div className="bg-primary-900 text-gray-300 p-8 rounded-xl shadow-2xl flex items-center justify-between flex-wrap xl:flex-nowrap gap-8">
              <div>
                <RiHashtag className="text-4xl -rotate-12" />
              </div>
              <div>
                <h5 className="font-bold text-white">Engage with clients</h5>
                <h5>Join slack channel</h5>
              </div>
              <div className="w-full xl:w-auto">
                <button className="bg-primary-100 py-2 px-6 rounded-xl text-white w-full">
                  Join now
                </button>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-8">Citas Recomendadas</h1>
            <div className="bg-white p-8 rounded-xl shadow-2xl mb-8 flex flex-col gap-8">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src="https://img.freepik.com/foto-gratis/retrato-mujer-mayor-cerca_23-2149207185.jpg"
                    className="w-14 h-14 object-cover rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">Dra. Alicia</h3>
                    <p className="text-gray-500">Hace 2 minutos</p>
                  </div>
                </div>
                <div>
                  <span className="bg-primary-100 py-2 px-4 rounded-full text-white">
                    Opciones
                  </span>
                </div>
              </div>
              <div>
                <h5 className="text-lg font-bold">
                Comienza el día con una sonrisa, veras lo divertido que es ir por ahí desentonando con todo el mundo. 
                </h5>
                
              </div>
             
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home