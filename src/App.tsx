import Header from "./components/Header";
import List from "./components/List";
import Map from "./components/Map";
// import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import { useEffect, useState } from "react";
import { getPlacesData } from "@/api/index";

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

export default function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState<coordProps | undefined>(
    undefined
  );
  const [bounds, setBounds] = useState<BoundsProps>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({
          lat: latitude,
          lng: longitude,
        });
      }
    );
  }, []);

  useEffect(() => {
    try {
      setLoading(true);
      if (bounds)
        getPlacesData({ ne: bounds.ne, sw: bounds.sw })
          .then((data) => {
            setPlaces(data);
          })
          .then(() => setLoading(false));
    } catch (error) {
      console.log(error);
    }
  }, [coordinates, bounds]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="h-[calc(100vh-50px)] flex justify-between">
        <div className="w-1/4">
          <List places={places} loading={loading} />
        </div>
        <div className="w-3/4 flex items-center p-4 ">
          {coordinates && (
            <Map
              places={places}
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
            />
          )}
        </div>
      </div>
    </div>
  );
}
