import eqCardSingleStyle from "./EqCardSingle.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { Map, Marker } from "pigeon-maps";

import { useState } from "react";

const EqCardSingle = ({
  date,
  time,
  latitude,
  longitude,
  depth,
  intensity,
  city,
}) => {
  let magColorStyle = {};

  const [openMap, setOpenMap] = useState(false);

  if (Number(intensity) <= 2) {
    magColorStyle = {
      backgroundColor: "green",
    };
  } else if (Number(intensity) <= 3) {
    magColorStyle = {
      backgroundColor: "#ffb703",
    };
  } else if (Number(intensity) <= 4) {
    magColorStyle = {
      backgroundColor: "#ff831d",
    };
  } else {
    magColorStyle = {
      backgroundColor: "red",
    };
  }

  const openMapHandler = () => {
    !openMap ? setOpenMap(true) : setOpenMap(false);
  };

  return (
    <div className={eqCardSingleStyle.eqCardContainer}>
      <div className={eqCardSingleStyle.eqCard}>
        <div style={magColorStyle} className={eqCardSingleStyle.magContainer}>
          <p className={eqCardSingleStyle.intensity}>
            <span className={eqCardSingleStyle.magSpan}>Mag</span>
            {intensity}
          </p>
          <div className={eqCardSingleStyle.cityContainer}>
            <p>{!city ? 'NO CITY' : city.slice(1, -1)}</p>
          </div>
        </div>
        <div className={eqCardSingleStyle.eqDetails}>
          <div className={eqCardSingleStyle.date}>
            <h3>Date</h3>
            <p>{date}</p>
          </div>
          <div className={eqCardSingleStyle.time}>
            <h3>Time</h3>
            <p>{time}</p>
          </div>
          <div className={eqCardSingleStyle.depth}>
            <h3>Depth</h3>
            <p>{depth} KM</p>
          </div>
          <div className={eqCardSingleStyle.place}>
            <h3>Location</h3>
            <FontAwesomeIcon
              icon={faLocationCrosshairs}
              size="lg"
              onClick={openMapHandler}
            />
          </div>
        </div>
      </div>
      {openMap ? (
        <div className={eqCardSingleStyle.map}>
          <Map
            height={300}
            defaultCenter={[Number(latitude), Number(longitude)]}
            defaultZoom={11}
          >
            <Marker width={50} anchor={[Number(latitude), Number(longitude)]} />
          </Map>
        </div>
      ) : null}
    </div>
  );
};

export default EqCardSingle;
