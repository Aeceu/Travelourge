import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

type Props = {
  places: {
    name: string;
  }[];
};

export default function List({ places }: Props) {
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
      <div className="h-full overflow-y-scroll">
        {places.map((place, id) => (
          <h1 key={id}>{place.name}</h1>
        ))}
      </div>
    </div>
  );
}
