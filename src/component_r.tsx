import "./component_r.css";

export default function Component_r() {
  return (
    <>
      <div className="right">
        <div className="column">
          <div className="left_info">
            <div>
              <span className="city">Chaina</span>
            </div>
            <div>
              <span className="country">Beijing</span>
            </div>
            <div>
              <span className="info">Cloudy</span>
            </div>
          </div>
          <div className="right_info">
            <img src="Rainy.png" width="50px" height="5px" alt="" />
          </div>
        </div>

        <div className="column">
          <div className="left_info">
            <div>
              <span className="city">US</span>
            </div>
            <div>
              <span className="country">California</span>
            </div>
            <div>
              <span className="info">windly</span>
            </div>
          </div>
          <div className="right_info">
            <img src="Windy.png" width="50px" height="5px" alt="" id="png2" />
          </div>
        </div>
        <div className="column">
          <div className="left_info">
            <div>
              <span className="city">Dubai</span>
            </div>
            <div>
              <span className="country">Arab Emirates</span>
            </div>
            <div>
              <span className="info">Mostly Sunny</span>
            </div>
          </div>
          <div className="right_info">
            <img src="Sunny.png" width="50px" height="5px" alt="" id="png3" />
          </div>
        </div>
        <div className="column">
          <div className="left_info">
            <div>
              <span className="city">Canada</span>
            </div>
            <div>
              <span className="country">Charlottetown</span>
            </div>
            <div>
              <span className="info">Light SnowShower</span>
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
