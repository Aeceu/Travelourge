/* eslint-disable @typescript-eslint/no-explicit-any */

type Props = {
  place: {
    name: string;
  };
};

export default function PlaceDetails({ place }: Props) {
  return <div>{place.name}</div>;
}
