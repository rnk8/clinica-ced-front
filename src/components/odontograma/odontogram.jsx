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
       
      </div>
    </div>
  );
}

export default Odontogram;
