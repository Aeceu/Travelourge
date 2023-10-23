import GoogleMapReact from "google-map-react";
import { LucideMapPin } from "lucide-react";

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
  places: {
    name: string;
    address: string;
    photo: {
      images: {
        medium: {
          url: string;
        };
      };
    };
    latitude: string;
    longitude: string;
  }[];
};

export default function Map({
  setCoordinates,
  setBounds,
  coordinates,
  places,
}: Props) {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyBfJRw9l5etzu7jQG6AOzGSYtaTGfjHhGM",
        }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        yesIWantToUseGoogleMapApiInternals
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        options={{ disableDefaultUI: true, zoomControl: true }}
        // onChildClick={''};
      >
        {places.length &&
          places?.map((place, i) => (
            <div
              className="p-4 rounded-md bg-red-500 shadow-xl flex flex-col gap-2 w-[100px] h-[100px] z-100"
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              <h1>{place.name}</h1>
            </div>
          ))}
      </GoogleMapReact>
    </div>
  );
}
