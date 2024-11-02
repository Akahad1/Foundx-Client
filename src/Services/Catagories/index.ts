import AxiosInstance from "@/src/lib/AuthInstanse";

export const getCatagoris = async () => {
  try {
    const { data } = await AxiosInstance.get("/item-categories");
    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
