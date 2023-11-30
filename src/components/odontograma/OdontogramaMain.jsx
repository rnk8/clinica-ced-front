import { useState } from "react";
import Odontogram from "./odontogram";
import axios from "axios";
import { useLocation } from "react-router";

function OdontogramaMain() {
  const [data, setData] = useState([]);
 // Obtener la ubicación actual usando useLocation
  const location = useLocation();
  const currentURL = location.pathname.split('/')[2];
  console.log(currentURL);

  const handleSubmitData = async (e) => {
    e.preventDefault();
    if (!(data.length > 0)) {
      window.alert("Odontograma vacio");
      return;
    }
    const datos = orderDataOdontogram(data);
     await axios.post("http://localhost:8081/api/odontograma", {
        piezas: datos,
        paciente_id: currentURL,
      }).then( (res ) => {
        console.log(res);
        window.alert("Odontograma Registrado");
      })
      .catch( err => console.log(err));

  };

  const orderDataOdontogram = (data) => {
    let piezas = [];
    data.forEach((elemento) => {
      if (!existDataOdontograma(piezas, elemento.zone)) {
        const pieza = {
          nombre: elemento.zone,
          numero: elemento.zone,
          tipo_piezas: [],
        };
        piezas.push(pieza);
        data.forEach((elem) => {
          if (elem.zone === elemento.zone) {
            pieza.tipo_piezas.push({ nombre: elem.label, estado: true });
          }
        });
      }
    });
    return piezas;
  };

  const existDataOdontograma = (data, numero) => {
    let state = false;
    data.forEach((elem) => {
      if (elem.numero === numero) state = true;
    });
    return state;
  };

  return (
    <div className="App">
      <Odontogram
        tooth={(labelT, zoneT, idT) => {
          setData((oldArray) => [
            ...oldArray,
            {
              label: labelT,
              zone: zoneT,
              id: idT,
            },
          ]);
        }}
        rtooth={(id) => {
          setData((current) =>
            current.filter((obj) => {
              return obj.id !== id;
            })
          );
        }}
      />
      <div
        style={{ padding: "1rem", display: "flex", justifyContent: "center" }}
      >
        {/* <button
          onClick={() => {
            console.log(data);
          }}
          style={{
            backgroundColor: "#FF6363",
            border: "4px solid #543864",
            width: "10rem",
            borderRadius: "1rem",
            padding: "0.5rem",
            color: "#f1f1f1",
            fontSize: 18,
            cursor: "pointer",
          }}
        >
          Click for save data (Console.log)
        </button> */}
        <div>
          <button
            className="bg-blue-600 text-white py-3 w-60 rounded-md font-semibold hover:bg-blue-800"
            onClick={handleSubmitData}
          >
            Registrar Tratamiento
          </button>
        </div>
      </div>
    </div>
  );
}

export default OdontogramaMain;
