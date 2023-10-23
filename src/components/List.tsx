import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import PlaceDetails from "./PlaceDetails";
import { LucideLoader2 } from "lucide-react";

type Props = {
  places: {
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
  }[];
  loading: boolean;
};

export default function List({ places, loading }: Props) {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const handleTypeChange = (value: string) => {
    setType(value);
  };
  const handleRatingChange = (value: string) => {
    setRating(value);
  };

  return (
    <div className="h-full p-4 flex flex-col gap-2">
      <h1 className="text-xl">Restaurants, Hotels & Attractions around you</h1>
      <p className=" text-xs">Type</p>
      <div className="flex gap-4 ">
        <Select value={type} onValueChange={handleTypeChange}>
          <SelectTrigger className="w-[130px]">
            <SelectValue placeholder="select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="restaurants">Restaurants</SelectItem>
            <SelectItem value="hotels">Hotels</SelectItem>
            <SelectItem value="attractions">Attractions</SelectItem>
          </SelectContent>
        </Select>

        <Select value={rating} onValueChange={handleRatingChange}>
          <SelectTrigger className="w-[130px]">
            <SelectValue placeholder="rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">0</SelectItem>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="lists h-full overflow-y-scroll p-4 flex flex-col gap-4">
        {loading ? (
          <span className="w-full p-4 flex items-center justify-center">
            <LucideLoader2 size={"2rem"} className="animate-spin" />
          </span>
        ) : places.length === 0 ? (
          <h1 className="font-bold text-xl text-red-500 p-4 flex items-center justify-center">
            No restaurants {":(("}
          </h1>
        ) : (
          places.map((place, id) => <PlaceDetails key={id} place={place} />)
        )}
      </div>
    </div>
  );
}
