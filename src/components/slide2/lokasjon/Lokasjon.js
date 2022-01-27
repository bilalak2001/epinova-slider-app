import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, Tooltip, useMap } from "react-leaflet";

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    margin: 'auto'
  }
}));

const LokasjonMarker = () => {
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position}>
      <Tooltip permanent>
        Lat: {position.lat}, Lng: {position.lng}
        Lat: {position.lat}, Lng: {position.lng}
      </Tooltip>
    </Marker>
  );
};

const Lokasjon = () => {
  const classes = useStyles();

  return (
    <div>
      <MapContainer
        className={classes.root}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "60vh", width: "75%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LokasjonMarker />
      </MapContainer>
    </div>
  );
};

export default Lokasjon;
