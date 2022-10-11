import "./EqCardSingle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { Map, Marker } from "pigeon-maps"

import { useState } from "react";

const EqCardSingle = ({
  date,
  time,
  latitude,
  longitude,
  depth,
  magnitude,
  city,
}) => {
  let magColorStyle = {};

  const [openMap, setOpenMap] = useState(false)

  if (Number(magnitude) <= 2) {
    magColorStyle = {
      backgroundColor: "green",
    };
  } else if (Number(magnitude) <= 3) {
    magColorStyle = {
      backgroundColor: "#e4cf43",
    };
  } else if (Number(magnitude) <= 4) {
    magColorStyle = {
      backgroundColor: "#ff831d",
    };
  } else {
    magColorStyle = {
      backgroundColor: "red",
    };
  }

  const openMapHandler = () => {
    !openMap ? setOpenMap(true) : setOpenMap(false)
  }

  return (
    <div className="eq-card-container">
      <div className="eq-card">
        <div style={magColorStyle} className="mag-container">
          <p className="magnitude">
            <span className="mag-span">Mag</span>
            {magnitude}
          </p>
          <div className="city-container">
            <p>{city.slice(1, -1)}</p>
          </div>
        </div>
        <div className="eq-details">
          <div className="date">
            <h3>Date</h3>
            <p>{date}</p>
          </div>
          <div className="time">
            <h3>Time</h3>
            <p>{time}</p>
          </div>
          <div className="depth">
            <h3>Depth</h3>
            <p>{depth} KM</p>
          </div>
          <div className="place">
            <h3>Location</h3>
            <FontAwesomeIcon 
            icon={faLocationCrosshairs} 
            size="lg"
            onClick={openMapHandler}
            />
          </div>
        </div>
      </div>
      {openMap ? <div className="map">
      <Map height={300} defaultCenter={[Number(latitude), Number(longitude)]} defaultZoom={11}>
      <Marker width={50} anchor={[Number(latitude), Number(longitude)]} />
    </Map>
      </div> :null}
    </div>
  );
};

export default EqCardSingle;
