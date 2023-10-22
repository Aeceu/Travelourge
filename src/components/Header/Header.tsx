// import { Autocomplete } from "@react-google-maps/api";
import { LucideSearch } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-emerald-500 text-white flex justify-between items-center h-[50px] px-4">
      <h1>Travel Advisor</h1>
      <div className="flex gap-2 items-center">
        <h1>Explore new places</h1>
        {/* <Autocomplete> */}
        <div className="flex gap-2 items-center border-[1.5px] border-white px-1  rounded-sm ">
          <span>
            <LucideSearch size="1rem" />
          </span>
          <input
            placeholder="search"
            type="text"
            className="outline-none bg-inherit placeholder-white/50"
          />
        </div>
        {/* </Autocomplete> */}
      </div>
    </div>
  );
}
