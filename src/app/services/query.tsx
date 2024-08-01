import { api, ApiError } from "./api";

export const useServices = () => {
  const getCharacter = async (characterName: string, currentPage: number) => {
    try {
      const { data } = await api.get(
        `?page=${currentPage}&name=${characterName}`
      );
      return data;
    } catch (error) {
      console.error("An unknown error occurred:", error);
    }
  };

  return { getCharacter };
};
