import Denture from "./denture";
import "./odontogram.css";

function Odontogram(props) {
  return (
    <div>
      <div className="pt-9">
        <p className="font-semibold text-2xl text-BLACK"> ODONTROGRAMA </p>
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
            <select>
  <option value="">Seleccione un tratamiento</option>
  <option value="limpieza">Limpieza dental</option>
  <option value="relleno">Relleno dental</option>
  <option value="extraccion">Extracción dental</option>
  <option value="corona">Corona dental</option>
  <option value="implante">Implante dental</option>
  <option value="ortodoncia">Ortodoncia</option>
  <option value="blanqueamiento">Blanqueamiento dental</option>
  <option value="endodoncia">Endodoncia</option>
  <option value="prótesis">Prótesis dental</option>
  <option value="selladores">Selladores dentales</option>
</select>

          </select>
        </div>
      </div>
    </div>
  );
}

export default Odontogram;
