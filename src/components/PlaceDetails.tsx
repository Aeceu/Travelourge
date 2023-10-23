type Props = {
  place: {
    name: string;
    address: string;
    latitude: string;
    longitude: string;
    photo: {
      images: {
        large: {
          url: string;
        };
      };
    };
  };
};

export default function PlaceDetails({ place }: Props) {
  return (
    <div className="p-4 rounded-md shadow-xl flex flex-col gap-2">
      <img
        title={place.name}
        alt="img"
        src={
          place.photo
            ? place.photo.images.large.url
            : "https://dummyimage.com/300"
        }
        className="w-full h-[200px] object-cover"
      />
      <span className="flex flex-col gap-2">
        <h1 className="text-sm font-bold">{place.name}</h1>
        <p className="text-xs text-gray-700 ">{place.address}</p>
      </span>
    </div>
  );
}
