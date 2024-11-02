import { useQuery } from "@tanstack/react-query";
import { getCatagoris } from "../Services/Catagories";

export const useGetCatagoris = () => {
  return useQuery({
    queryKey: ["catagoris"],
    queryFn: async () => await getCatagoris(),
  });
};
