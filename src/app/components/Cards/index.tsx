import { CardsProps } from "@/app/types";
import Image from "next/image";

export default function Cards({ data }: CardsProps) {
  return (
    <div className="flex flex-col justify-end bg-gray-800 rounded-lg p-5 mt-5 mb-5 w-90">
      <Image
        alt="personagem"
        src={data.image}
        width={300}
        height={300}
        className="rounded-md"
      />{" "}
      <h2 className="text-white text-lg font-semibold mt-3">{data.name}</h2>
      <p className="text-white mt-1">STATUS: {data.status}</p>
      <p className="text-white mt-1">GENDER: {data.gender}</p>
      <p className="text-white mt-1">SPECIES: {data.species}</p>
    </div>
  );
}
