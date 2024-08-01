"use client";
import {
  ChangeEvent,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useServices } from "./services/query";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import { Character } from "./types";

export default function Home() {
  const { getCharacter } = useServices();
  const [nameCharacter, setNameCharacter] = useState("");
  const [characterData, setCharacterData] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = useCallback(async () => {
    try {
      const response = await getCharacter(nameCharacter, currentPage);
      setCharacterData(response.results);
      setTotalPages(response.info.pages);
    } catch (error) {
      console.error("An unknown error occurred:", error);
    }
  }, [nameCharacter, currentPage]);

  const handleChangeCharacter = (e: ChangeEvent<HTMLInputElement>) => {
    const getValueInput = e.target.value;
    setNameCharacter(getValueInput);
    setCurrentPage(1);
  };

  useEffect(() => {
    fetchData();
  }, [nameCharacter, currentPage]);

  return (
    <main className="w-11/12 mx-auto">
      <Header
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handleChangeCharacter(e);
        }}
      />
      <section className="flex flex-wrap justify-between md:justify-center gap-2">
        {characterData?.map((item: Character) => {
          return <Cards data={item} key={item.id} />;
        })}
      </section>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page: SetStateAction<number>) => setCurrentPage(page)}
      />
    </main>
  );
}
