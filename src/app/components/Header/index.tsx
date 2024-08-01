import { HeaderProps } from "@/app/types";
import Image from "next/image";

export default function Header({ onChange }: HeaderProps) {
  return (
    <header className="flex justify-between items-center mb-5 flex-col md:flex-row">
      <Image
        alt="logo"
        src="/rickandmorty.png"
        width={288}
        height={288}
        className="w-72"
      />{" "}
      <input
        className="bg-gray-300 rounded h-8 w-72 border-2 border-cyan-500 p-2 mt-4 md:mt-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellowgreen"
        onChange={onChange}
        placeholder="Busque pelo nome"
      />
    </header>
  );
}
