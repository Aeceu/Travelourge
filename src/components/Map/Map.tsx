import GoogleMapReact from "google-map-react";

type BoundsProps = {
  sw: {
    lat: number;
    lng: number;
  };
  ne: {
    lat: number;
    lng: number;
  };
};

type coordProps = {
  lat: number;
  lng: number;
};

type Props = {
  setCoordinates: ({ lat, lng }: coordProps) => void;
  setBounds: ({ sw, ne }: BoundsProps) => void;
  coordinates: { lat: number; lng: number };
};

export default function Map({ setCoordinates, setBounds, coordinates }: Props) {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBfJRw9l5etzu7jQG6AOzGSYtaTGfjHhGM" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      ></GoogleMapReact>
    </div>
  );
}
