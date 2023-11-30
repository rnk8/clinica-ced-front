import Denture from "./denture";
import "./odontogram.css";

function Odontogram(props) {
  return (
    <div className="bg-blue-800">
      <div className="pt-5">
        <p className="font-semibold text-2xl text-white"> ODONTROGRAMA </p>
      </div>
      <div id="root" className="odontogram-graph p-10 flex justify-between">
        <div>
          <Denture
            top_1
            tooth={(labelT, zoneT, idT) => {
              props.tooth(labelT, zoneT, idT);
            }}
            Rtooth={(id) => {
              props.rtooth(id);
            }}
          />
          <Denture
            top_2
            tooth={(labelT, zoneT, idT) => {
              props.tooth(labelT, zoneT, idT);
            }}
            Rtooth={(id) => {
              props.rtooth(id);
            }}
          />
          <Denture
            bottom_1
            tooth={(labelT, zoneT, idT) => {
              props.tooth(labelT, zoneT, idT);
            }}
            Rtooth={(id) => {
              props.rtooth(id);
            }}
          />
          <Denture
            bottom_2
            tooth={(labelT, zoneT, idT) => {
              props.tooth(labelT, zoneT, idT);
            }}
            Rtooth={(id) => {
              props.rtooth(id);
            }}
          />
        </div>
        <div className="bg-blue-400 w-1/3 rounded-lg">
          <select className="w-full p-2 rounded-lg font-medium">
            <option selected value="">
              {" "}
              Seleccione un tratamiento
            </option>
            <option value=""> Tratamiento</option>
            <option value=""> Tratamiento</option>
            <option value=""> Tratamiento</option>
            <option value=""> Tratamiento</option>
            <option value=""> Tratamiento</option>
            <option value=""> Tratamiento</option>
            <option value=""> Tratamiento</option>
            <option value=""> Tratamiento</option>
            <option value=""> Tratamiento</option>
            <option value=""> Tratamiento</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Odontogram;
