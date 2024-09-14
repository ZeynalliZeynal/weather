import "./component_r.css";

export default function Component_r() {
  return (
    <>
      <div className="right">
        <div className="column1">
          <div className="left_info">
            <div>
              <span className="info" style={{ fontSize: 12, color: "#555" }}>
                Chaina
              </span>
            </div>
            <div>
              <span className="info">Beijing</span>
            </div>
            <div>
              <span className="info" style={{ fontSize: 12 }}>
                Cloudy
              </span>
            </div>
          </div>
          <div className="right_info">
            <img src="Rainy.png" width="50px" height="5px" alt="" />
          </div>
        </div>

        <div className="column2">
          <div className="left_info">
            <div>
              <span className="info" style={{ fontSize: 12, color: "#555" }}>
                US
              </span>
            </div>
            <div>
              <span className="info">California</span>
            </div>
            <div>
              <span className="info" style={{ fontSize: 12 }}>
                windly
              </span>
            </div>
          </div>
          <div className="right_info">
            <img src="Windy.png" width="50px" height="5px" alt="" id="png2" />
          </div>
        </div>
        <div className="column3">
          <div className="left_info">
            <div>
              <span className="info" style={{ fontSize: 12, color: "#555" }}>
                Dubai
              </span>
            </div>
            <div>
              <span className="info">Arab Emirates</span>
            </div>
            <div>
              <span className="info" style={{ fontSize: 12 }}>
                Mostly Sunny
              </span>
            </div>
          </div>
          <div className="right_info">
            <img src="Sunny.png" width="50px" height="5px" alt="" id="png3" />
          </div>
        </div>
        <div className="column4">
          <div className="left_info">
            <div>
              <span className="info" style={{ fontSize: 12, color: "#555" }}>
                Canada
              </span>
            </div>
            <div>
              <span className="info">Charlottetown</span>
            </div>
            <div>
              <span className="info" style={{ fontSize: 12 }}>
                Light SnowShower
              </span>
            </div>
          </div>
          <div className="right_info">
            <img
              src="LightSnowShower.png"
              width="50px"
              height="5px"
              alt=""
              id="png4"
            />
          </div>
        </div>
      </div>
    </>
  );
}
