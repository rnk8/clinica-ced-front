import { useState } from "react";
import Odontogram from "./odontogram";
import axios from "axios";
import { useLocation } from "react-router";
import useAuth from "../../auth/useAuth";

function OdontogramaMain() {
  const [data, setData] = useState([]);
  const [tratamiento, setTratamiento] = useState("");
  // Obtener la ubicación actual usando useLocation
  const location = useLocation();
  const currentURL = location.pathname.split("/")[2];
  console.log(currentURL);
  const UseAuth = useAuth();

  const handleSubmitData = async (e) => {
    e.preventDefault();
    
    if (!(data.length > 0)) {
      window.alert("Odontograma vacio");
      return;
    }
    if (!(tratamiento.length > 0)) {
      window.alert("Tratamiento vacio");
      return;
    }
    const datos = orderDataOdontogram(data);
    await axios
      .post("http://localhost:8081/api/odontograma", {
        piezas: datos,
        paciente_id: currentURL,
        tratamiento
      })
      .then((res) => {
        console.log(res);
        window.alert("Odontograma Registrado");
        console.log(UseAuth.user);
        UseAuth.createBitacora(
          UseAuth.user.email,
          "Escritura",
          "Registro Odontograma"
        );
      })
      .catch((err) => console.log(err));
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
      <div className="flex">
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
        <div className="bg-blue-400 w-1/3 rounded-lg mt-28">
          <select className="w-full p-2 rounded-lg font-medium" 
            onChange={ (e) => setTratamiento(e.target.value)}
          >
            <option value="">Seleccione un tratamiento</option>
            <option value="Limpieza dental">Limpieza dental</option>
            <option value="Relleno dental">Relleno dental</option>
            <option value="Extracción dental">Extracción dental</option>
            <option value="Corona dental">Corona dental</option>
            <option value="Implante dental">Implante dental</option>
            <option value="Ortodoncia">Ortodoncia</option>
            <option value="Blanqueamiento dental">Blanqueamiento dental</option>
            <option value="Endodoncia">Endodoncia</option>
            <option value="Prótesis dental">Prótesis dental</option>
            <option value="Selladores dentales">Selladores dentales</option>
          </select>
        </div>
      </div>
      <div
        style={{ padding: "1rem", display: "flex", justifyContent: "center" }}
      >
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
