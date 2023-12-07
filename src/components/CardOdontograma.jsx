import React, { forwardRef } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import ReactToPrint from "react-to-print";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {},
});
const CardOdontograma = forwardRef(({ detalle }, ref) => {
  const today = new Date();
  const formattedDate = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

  return (
    <Document>
      <Page size="A4" style={styles.page} ref={ref}>
        <div className="h-80 overflow-y-auto p-10 border border-gray-200 rounded-lg shadow sm:p-8 bg-slate-50-blue-900">
          <View style={styles.section}>
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                <Text>{"Fecha: " + formattedDate}</Text>
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
          </View>
          <div className="flow-root">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700"
            >
              <View style={styles.section}>
                {detalle.map((tipo, index) => (
                  <li key={index} className="py-3 sm:py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 text-3xl">🦷</div>
                      <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          <Text>Diente Nro:</Text>
                        </p>
                        <p className="text-gray-500 truncate dark:text-gray-400 text-md">
                          <Text>{tipo.numero}</Text>
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <p className="text-black">
                          detalles <span className="text-xl"> ↓ </span>{" "}
                        </p>
                      </div>
                    </div>
                    <div>
                      {tipo.Tipo_piezas.map((pieza, index2) => (
                        <div key={index2} className="px-10 ">
                          <div className="py-2 my-2 bg-blue-100 text-center rounded-md">
                            <p className="font-medium">
                              <Text>Pieza dental: </Text>
                              <span className="font-normal">
                                <Text>{pieza.nombre} 🦷 </Text>
                              </span>
                            </p>
                            <p className="font-medium">
                              <Text> Estado: </Text>
                              <span className="font-normal">
                                <Text>En tratamiento </Text>
                              </span>
                            </p>
                            <p className="font-medium">
                              <Text> Tratamiento: </Text>
                              <span className="font-normal">
                              <Text>{pieza.tratamiento} </Text>
                              </span>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    </li>
                ))}
              </View>
            </ul>
          </div>
        </div>
      </Page>
    </Document>
  );
});

export default CardOdontograma;