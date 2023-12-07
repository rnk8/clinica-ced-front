import { forwardRef } from "react";
import ReactToPrint from "react-to-print";


const CardOdontograma = forwardRef(({ detalle }, ref) => {
  const today = new Date();
  const formattedDate = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

  return (
   
      <div >
        <div className="h-80 overflow-y-auto p-10 border border-gray-200 rounded-lg shadow sm:p-8 bg-slate-50-blue-900">
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold leading-none text-gray-900">
              {"Fecha: " + formattedDate}
              </h5>
              <ReactToPrint
                trigger={() => (
                  <a
                    href="#"
                    className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    <button className="w-20 py-2 px-3 bg-white rounded-md hover:bg-blue-400 hover:text-white">
                      Imprimir
                    </button>
                  </a>
                )}
                content={() => ref.current}
              />
            </div>
          
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700"
            >
                {detalle.map((tipo, index) => (

                  <li key={index} className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 text-3xl">🦷</div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Diente Nro:
                        </p>
                        <p className="text-gray-500 truncate dark:text-gray-400 text-md">
                        {tipo.numero}
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <p className="text-black">
                          detalles <span className="text-xl"> ↓ </span>{" "}
                        </p>
                      </div>
                    </div>
                    <div ref={ref}>
                      {tipo.Tipo_piezas.map((pieza, index2) => (
                        <div key={index2} className="px-10 ">
                          <div className="py-2 my-2 bg-blue-100 text-center rounded-md">
                            <p className="font-medium">
                            Pieza dental: 
                              <span className="font-normal">
                              {pieza.nombre} 🦷 
                              </span>
                            </p>
                            <p className="font-medium">
                             Estado: 
                              <span className="font-normal">
                              En tratamiento 
                              </span>
                            </p>
                            <p className="font-medium">
                             Tratamiento: 
                              <span className="font-normal">
                            {pieza.tratamiento} 
                              </span>
                            </p>
                          </div>
                        </div>
                      ))}
                      </div>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    
  );
});

export default CardOdontograma;